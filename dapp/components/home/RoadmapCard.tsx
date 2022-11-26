import { Flex, Text, useColorMode } from "@chakra-ui/react";
import { useObserve } from "hooks";
import React, { FC } from "react";

export interface RoadmapCardProps {
  justifyContent: string;
  animation: string;
  name: string;
  description: string;
  bgGradientColor: string;
}

const RoadmapCard: FC<RoadmapCardProps> = ({
  justifyContent,
  animation,
  name,
  description,
  bgGradientColor,
}) => {
  const { isObserved, dom } = useObserve();

  return (
    <Flex
      ref={dom}
      justifyContent={justifyContent}
      className={isObserved ? "animate__animated animate__" + animation : ""}
      py={2}
      w="40%"
    >
      <Flex
        rounded="xl"
        shadow="md"
        w={450}
        px={8}
        py={4}
        flexDir="column"
        bgGradient={`linear(to-b, ${bgGradientColor}.100, ${bgGradientColor}.200, ${bgGradientColor}.300, ${bgGradientColor}.400)`}
      >
        <Text fontSize="2xl" fontWeight="bold">
          {name}
        </Text>
        <Text mt={2} fontSize="xl">
          {description}
        </Text>
      </Flex>
    </Flex>
  );
};

export default RoadmapCard;
