import { Box, Text, Image, Button } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

interface NftCardProps {
  tokenId: string;
}

export interface IMetadata {
  name: string;
  description: string;
  image: string;
  attributes: {
    trait_type: string;
    value: string;
  }[];
}

const NftCard: FC<NftCardProps> = ({ tokenId }) => {
  const [metadata, setMetadata] = useState<IMetadata>();

  const getMetadata = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_PINATA_GATEWAY}/${tokenId}.json`
      );

      setMetadata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMetadata();
  }, []);

  return (
    <Box w={300} bgColor="gray.50" shadow="md" rounded="2xl" p={4}>
      <Image
        src={metadata?.image}
        alt={metadata?.name}
        fallbackSrc="images/loading.png"
        rounded="2xl"
      />
      <Text mt={2} fontSize="2xl" fontWeight="bold">
        {metadata?.name}
      </Text>
      <Text>{metadata?.description}</Text>
      <Link href={`my-nft/detail/${tokenId}`}>
        <Button my={4}>Detail</Button>
      </Link>
    </Box>
  );
};

export default NftCard;
