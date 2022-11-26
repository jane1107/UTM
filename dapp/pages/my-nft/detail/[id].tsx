import { Box, Flex, Grid, Image, Text, Button } from "@chakra-ui/react";
import { IMetadata } from "@components/myNft/NftCard";
import axios from "axios";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Detail: NextPage = () => {
  const [metadata, setMetadata] = useState<IMetadata>();

  const router = useRouter();
  const { id } = router.query;

  const getMetadata = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_PINATA_GATEWAY}/${id}.json`
      );

      setMetadata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!id) return;

    getMetadata();
  }, [id]);

  return (
    <>
      <Flex justifyContent="center" alignItems="center" minH="100vh">
        <Image
          src={metadata?.image}
          alt={metadata?.name}
          fallbackSrc="images/loading.png"
          rounded="2xl"
        />
        <Box w={400} ml={8}>
          <Text mt={2} fontSize="4xl" fontWeight="bold">
            {metadata?.name}
          </Text>
          <Text mt={2} mb={8} fontSize="2xl">
            {metadata?.description}
          </Text>
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            {metadata?.attributes.map((v, i) => {
              return (
                <Box
                  key={i}
                  bgColor="gray.50"
                  p={4}
                  rounded="2xl"
                  textAlign="center"
                >
                  <Text fontWeight="bold">{v.trait_type}</Text>
                  <Text mt={1}>{v.value}</Text>
                </Box>
              );
            })}
          </Grid>
        </Box>
      </Flex>
      <Link href="/my-nft">
        <Button position="absolute" top={24} left={24}>
          ← Back
        </Button>
      </Link>
    </>
  );
};

export default Detail;
