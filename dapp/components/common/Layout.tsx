import { Box, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { FC, ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <Head>
        <title>UnderTheMovie NFT</title>
        <meta name="description" content="UnderTheMovie NFT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <footer>
        <Box textAlign="center" my={2}>
          <Text fontSize="sm">Team UnderTheMovie NFT | 76, Haneul-gil, Gangseo-gu, Seoul, Republic of Korea | E-Mail contact@utm.io</Text>
          <Text fontSize="xs" mt={1}>
            COPYRIGHT &copy; Team UnderTheMovie NFT. ALL RIGHT RESERVED
          </Text>
        </Box>
      </footer>
    </Box>
  );
};

export default Layout;
