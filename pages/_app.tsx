import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Head, Layout } from '@components/common';
import '@assets/main.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
