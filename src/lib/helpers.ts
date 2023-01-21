import { NextRouter } from 'next/router';
import supabase from '../config/supabase';

export async function loggedIn(router: NextRouter, redirect: string) {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session?.user.email) {
    await router.push(redirect);
  }

  return session;
}

export const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SUPABASE_URL ?? // Set this to your site URL in production env.
    process?.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? // Automatically set by Vercel.
    'http://localhost:3000/auth/username';
  // Make sure to include `https://` when not localhost.
  url = url.includes('http') ? url : `https://${url}`;
  // Make sure to including trailing `/`.
  url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;
  return url;
};

export async function googleLogin(
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
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
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
) {
  event.preventDefault();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: getURL(),
    },
  });
}
