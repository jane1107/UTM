import {
  Box,
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import { AiOutlineWallet } from 'react-icons/ai';
import { useWallet } from 'hooks';
import Link from 'next/link';

interface Props {
  children?: React.ReactNode;
}

const Header: FC<Props> = ({ children }) => {
  const { account, getAccount, isPending } = useWallet();

  const onClickWallet = () => {
    getAccount();
  };

  useEffect(() => {
    getAccount();
  }, []);

  return (
    <Flex position="fixed" w="full" top={0} justifyContent="space-between" alignItems="center" px={8} py={2} shadow="md" zIndex={1} bgColor="gray.50">
      <Box>
        <Link href="/">
          <Text fontWeight="bold" fontSize="xl" cursor="pointer">
            UnderTheMovie NFT test
          </Text>
        </Link>
      </Box>

      {children}

      {isPending ? (
        <Flex></Flex>
      ) : (
        <Flex justifyContent="center" alignItems="center">
          {account ? (
            <Popover>
              <PopoverTrigger>
                <Button>
                  <AiOutlineWallet size={28} />
                  <Text ml={2} fontSize="xs">
                    {account.substring(0, 4)}...
                    {account.substring(account.length - 4)}
                  </Text>
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader fontWeight="bold">UnderTheMovie NFT</PopoverHeader>
                <Link href="/my-nft">
                  <PopoverBody cursor="pointer" fontSize="xl">
                    내 NFT 보기
                  </PopoverBody>
                </Link>
              </PopoverContent>
            </Popover>
          ) : (
            <Button onClick={onClickWallet}>
              <AiOutlineWallet size={28} />
              <Text ml={2} fontSize="xs">
                MetaMask
                <br /> LogIn
              </Text>
            </Button>
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default Header;
