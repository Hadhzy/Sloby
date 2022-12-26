import {createMiddlewareSupabaseClient} from '@supabase/auth-helpers-nextjs'
import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'

export async function middleware(req: NextRequest) {
    const res = NextResponse.next()
    const redirectUrl = req.nextUrl.clone()
    const supabase = createMiddlewareSupabaseClient({req, res})
    const {
        data: {session},
    } = await supabase.auth.getSession()

    // Check auth condition
    if (session?.user.email) {
        const oneTimeRoutes = ['/auth/(.*)']
        if (oneTimeRoutes.some((route) => req.nextUrl.pathname.match(route))) {
            redirectUrl.pathname = '/editor/dashboard'
            return NextResponse.redirect(redirectUrl)
        }
        return res
    }

    const protectedRoutes = ['/editor/(.*)',]

    if (protectedRoutes.some((route) => req.nextUrl.pathname.match(route))) {
        // Auth condition not met, redirect to log in.
        redirectUrl.pathname = '/auth/login'
        redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname)
        return NextResponse.redirect(redirectUrl)
    }

    return res
}
