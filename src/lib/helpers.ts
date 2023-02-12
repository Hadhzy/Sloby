import { NextRouter } from 'next/router';
import supabase from '../config/supabase';
import { SupabaseClient } from '@supabase/supabase-js';

export async function loggedIn(
  router: NextRouter,
  redirect: string,
  supabase: SupabaseClient<any, 'public', any>
) {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session?.user.email) {
    await router.push(redirect);
  }

  return session;
}

export const getURL = () => {
  let url = `sloby-nextjs--eclectic-cranachan-d53843.netlify.app/editor/dashboard`;
  // Make sure to include `https://` when not localhost.
  url = url.includes('http') ? url : `https://${url}`;
  // Make sure to including trailing `/`.
  url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;
  return url;
};

export async function googleLogin(
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  supabase: SupabaseClient<any, 'public', any>
) {
  event.preventDefault();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: getURL(),
    },
  });
}

export async function githubLogin(
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  supabase: SupabaseClient<any, 'public', any>
) {
  event.preventDefault();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: getURL(),
    },
  });
}
