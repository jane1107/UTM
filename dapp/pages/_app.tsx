import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '@components/common/Layout';
import 'animate.css';
import { NextComponentType } from 'next';

type NextPageWithLayout = NextComponentType & {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: React.ReactNode) => <Layout>{page}</Layout>);
  return <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>;
}
