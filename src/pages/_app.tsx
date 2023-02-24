import '../utils/styles/globals.css';

import type { AppProps } from 'next/app';
import {useState } from 'react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import {
  SessionContextProvider,
} from '@supabase/auth-helpers-react';
import { ProjectsContextProvider } from '../utils/contexts/ProjectsContext';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { LoadingContextProvider } from '../utils/contexts/Loading';
import {BluePrintContextProvider} from "../utils/contexts/BluePrint";

export default function App({ Component, pageProps }: AppProps) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
      <BluePrintContextProvider>
        <ProjectsContextProvider>
         <LoadingContextProvider>
            <SessionContextProvider
              supabaseClient={supabaseClient}
              initialSession={pageProps.initialSession}
            >
              <>
                <Component {...pageProps} />
              </>
            </SessionContextProvider>
          </LoadingContextProvider>
        </ProjectsContextProvider>
      </BluePrintContextProvider>
  );
}
