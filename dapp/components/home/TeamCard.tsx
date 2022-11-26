import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useObserve } from "hooks";
import { FC } from "react";

export interface TeamCardProps {
  name: string;
  position: string;
  image: string;
}

const TeamCard: FC<TeamCardProps> = ({ name, position, image }) => {
  const { dom, isObserved } = useObserve();

  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      bgColor="gray.50"
      px={8}
      pt={8}
      pb={16}
      mx={8}
      rounded="2xl"
      shadow="lg"
      ref={dom}
      className={isObserved ? "animate__animated animate__pulse" : ""}
    >
      <Image
        src={image}
        alt={name}
        style={{ width: 250, borderRadius: "9999px" }}
      />
      <Text mt={4} fontSize="4xl">
        {name}
      </Text>
      <Text mt={2} fontSize="2xl" fontWeight="bold">
        {position}
      </Text>
    </Flex>
  );
};

export default TeamCard;
