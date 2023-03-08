import { NextRouter } from 'next/router';
import { supabase } from '../config/supabase';
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
  const isProduction = process.env.NODE_ENV === 'production';
  const url = isProduction
    ? 'https://slolby-builder.netlify.app//editor/dashboard'
    : 'http://localhost:3000/editor/dashboard';
  // Make sure to including trailing `/`.
  // url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;
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
