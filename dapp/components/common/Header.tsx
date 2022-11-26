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
} from "@chakra-ui/react";
import { FC } from "react";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineWallet } from "react-icons/ai";
import { useWallet } from "hooks";
import Link from "next/link";

// PLN 프로젝트에 맞게 세계관, 로드맵, 팀 변경
const scrollLink = [
  { id: "story", name: "세계관" },
  { id: "roadmap", name: "로드맵" },
  { id: "team", name: "팀" },
];

const Header: FC = () => {
  const { account, getAccount } = useWallet();

  const onClickWallet = () => {
    getAccount();
  };

  return (
    <Flex
      position="fixed"
      w="full"
      top={0}
      justifyContent="space-between"
      alignItems="center"
      px={8}
      py={2}
      shadow="md"
      zIndex={1}
      bgColor="gray.50"
    >
      <Box>
        {/* PLN 로고 이름 or 이미지 변경 */}
        <Link href="/">
          <Text fontWeight="bold" fontSize="xl" cursor="pointer">
            ProjectLion NFT
          </Text>
        </Link>
      </Box>
      <Box>
        {scrollLink.map((v, i) => {
          return (
            <ScrollLink key={i} to={v.id} spy={true} smooth={true}>
              <Button mx={12} variant="ghost" fontWeight="bold">
                {v.name}
              </Button>
            </ScrollLink>
          );
        })}
      </Box>
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
              <PopoverHeader fontWeight="bold">ProjectLion NFT</PopoverHeader>
              <PopoverBody cursor="pointer" fontSize="xl">
                <Link href="/my-nft">내 NFT 보기</Link>
              </PopoverBody>
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
    </Flex>
  );
};

export default Header;
