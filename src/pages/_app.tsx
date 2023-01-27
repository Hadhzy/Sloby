import '../utils/styles/globals.css';

import type { AppProps } from 'next/app';
import { Suspense, useState, useEffect } from 'react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import {
  SessionContextProvider,
  useSupabaseClient,
} from '@supabase/auth-helpers-react';
import { ProjectsContextProvider } from '../utils/contexts/ProjectsContext';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { LoadingContextProvider } from '../utils/contexts/Loading';
import { useRouter } from 'next/router';
import LoadingAnimation from '../components/loading';
import { BaseServices } from '../api/base';
import { ToolClickedContextProvider } from '../utils/contexts/ToolClicked';

export default function App({ Component, pageProps }: AppProps) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
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
  );
}
