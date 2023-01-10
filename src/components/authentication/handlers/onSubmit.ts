import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

export async function onSubmit(
  event: React.FormEvent<HTMLFormElement>,
  emailStyles: string,
  setEmailStyles: Function,
  setPasswordStyles: Function,
  setErrorMsg: Function,
  setSuccessMsg: Function,
  emailRef: any,
  strength: any,
  passwordRef: any,
  usernameRef: any,
  supabase: any
) {
  event.preventDefault();

  if (
    emailStyles.startsWith('!border-red-mid') ||
    emailRef.current?.value === ''
  ) {
    setErrorMsg('Please enter a valid email address');
    setEmailStyles('!border-red-mid !animate-shake');
    return;
  }

  if (passwordRef.current?.value === '') {
    setErrorMsg('Please enter a password');
    setPasswordStyles('!border-red-mid !animate-shake');
    return;
  }

  if (strength < 4) {
    setErrorMsg('Password is too weak');
    setPasswordStyles('!border-red-mid !animate-shake');
    return;
  }

  const body = {
    username: event.currentTarget.username.value,
    password: event.currentTarget.password.value,
    name: event.currentTarget.username.value,
  };

  if (body.password !== event.currentTarget.rpassword.value) {
    setErrorMsg(`The passwords don't match`);
    return;
  }

  const { data, error } = await supabase.auth.signUp({
    email: event.currentTarget.email.value,
    password: event.currentTarget.password.value,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data: profile } = await supabase
    .from('profiles')
    .update({ username: usernameRef.current?.value })
    .eq('id', session?.user?.id);

  setSuccessMsg('Check your email for a confirmation link');
}
