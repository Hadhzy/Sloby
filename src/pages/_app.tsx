import '../utils/styles/globals.css';

import type { AppProps } from 'next/app';
import { Suspense, useState, useEffect } from 'react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { ProjectsContextProvider } from '../utils/contexts/ProjectsContext';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { LoadingContextProvider } from '../utils/contexts/Loading';
import { useRouter } from 'next/router';
import LoadingAnimation from '../components/loading';

function Loading() {
  const router: any = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath() && setLoading(true);
    const handleComplete = (url: string) =>
      url === router.asPath() &&
      setTimeout(() => {
        setLoading(false);
      }, 5000);

    router.events.on('routerChangeStart', handleStart);
    router.events.on('routerChangeComplete', handleComplete);
    router.events.on('routerChangeError', handleComplete);

    return () => {
      router.events.off('routerChangeStart', handleStart);
      router.events.off('routerChangeComplete', handleComplete);
      router.events.off('routerChangeError', handleComplete);
    };
  });

  return loading && <LoadingAnimation />;
}

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
