export async function loggedIn(supabase: any, router: any, redirect: string) {
    const {
        data: {session},
    } = await supabase.auth.getSession()

    if (session?.user.email) {
        await router.push(redirect);
    }

    return session
}

export const getURL = () => {
    let url =
        process?.env?.REACT_APP_NEXT_PUBLIC_SUPABASE_URL ?? // Set this to your site URL in production env.
        process?.env?.REACT_APP_NEXT_PUBLIC_SUPABASE_ANON_KEY ?? // Automatically set by Vercel.
        'http://localhost:3000/auth/username';
    // Make sure to include `https://` when not localhost.
    url = url.includes('http') ? url : `https://${url}`;
    // Make sure to including trailing `/`.
    url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;
    return url;
};

export async function googleLogin(event: any, supabase: any) {
    event.preventDefault();
    const {data, error} = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: getURL(),
        }
    })
}

export async function githubLogin(event: any, supabase: any) {
    event.preventDefault();
    const {data, error} = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
            redirectTo: getURL(),
        }
    })
}
