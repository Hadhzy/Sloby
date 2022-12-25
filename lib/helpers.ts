export async function loggedIn(supabase: any, router: any, redirect: string) {
    const {
        data: {session},
    } = await supabase.auth.getSession()

    if (session?.user.email) {
        await router.push(redirect);
    }
}
