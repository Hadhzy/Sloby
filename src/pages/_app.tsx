import '../utils/styles/globals.css'

import type { AppProps } from 'next/app'
import {useState} from "react";
import {createBrowserSupabaseClient} from "@supabase/auth-helpers-nextjs";
import {SessionContextProvider} from "@supabase/auth-helpers-react";
import { ProjectsContextProvider } from '../utils/contexts/ProjectsContext';

export default function App({ Component, pageProps }: AppProps) {
    const [supabaseClient] = useState(() => createBrowserSupabaseClient())

    return (
    <ProjectsContextProvider>
        <SessionContextProvider
            supabaseClient={supabaseClient}
            initialSession={pageProps.initialSession}
            >
            <Component {...pageProps} />
        </SessionContextProvider>
    </ProjectsContextProvider>
    )
}
