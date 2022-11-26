import { Flex, Grid, Text } from "@chakra-ui/react";
import NftCard from "@components/myNft/NftCard";
import { useWallet, useWeb3 } from "hooks";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const MyNft: NextPage = () => {
  const [nftTokenIds, setNftTokenIds] = useState<string[]>();

  const { account, getAccount } = useWallet();
  const { mintContract } = useWeb3();

  const getMyNft = async () => {
    try {
      const response = await mintContract.methods.getNFTs(account).call();

      setNftTokenIds(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!account || !mintContract) return;

    getMyNft();
  }, [account, mintContract]);

  useEffect(() => {
    getAccount();
  }, []);

  return (
    <Flex
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      pt={24}
      flexDir="column"
    >
      <Text mb={8} fontWeight="bold" fontSize="4xl">
        내 NFT
      </Text>
      <Grid templateColumns="repeat(4, 1fr)" gap={8}>
        {nftTokenIds?.map((v, i) => {
          return <NftCard key={i} tokenId={v} />;
        })}
      </Grid>
    </Flex>
  );
};

export default MyNft;
