import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import RoadmapCard, { RoadmapCardProps } from "./RoadmapCard";

// PLN justifyContent "" - 카드 왼쪽 위치, "end" - 카드 오른쪽 위치
// PLN 로드맵 카드 name, description 변경
// PLN bgGradientColor 색상 변경 참조 https://chakra-ui.com/docs/styled-system/theme
const roadmapContents: RoadmapCardProps[] = [
  {
    justifyContent: "",
    animation: "slideInLeft",
    name: "name1",
    description: "description1",
    bgGradientColor: "red",
  },
  {
    justifyContent: "end",
    animation: "slideInRight",
    name: "name2",
    description: "description2",
    bgGradientColor: "orange",
  },
  {
    justifyContent: "",
    animation: "slideInLeft",
    name: "로드맵 적고",
    description: "로드맵에 관한 상세한 내용을 여기에 추가로 적습니다.",
    bgGradientColor: "yellow",
  },
  {
    justifyContent: "end",
    animation: "slideInRight",
    name: "P2E GAME 오픈",
    description: "ProjectLion NFT의 세계관을 활용한 P2E 게임 오픈",
    bgGradientColor: "green",
  },
  {
    justifyContent: "",
    animation: "slideInLeft",
    name: "name5",
    description: "description5",
    bgGradientColor: "blue",
  },
  {
    justifyContent: "end",
    animation: "slideInRight",
    name: "name6",
    description: "description6",
    bgGradientColor: "purple",
  },
];

const Roadmap: FC = () => {
  return (
    <Flex
      id="roadmap"
      minH="100vh"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      pb={24}
    >
      <Text mb={8} fontWeight="bold" fontSize="4xl">
        STORY
      </Text>
      {roadmapContents.map((v, i) => {
        return (
          <RoadmapCard
            key={i}
            justifyContent={v.justifyContent}
            animation={v.animation}
            name={v.name}
            description={v.description}
            bgGradientColor={v.bgGradientColor}
          />
        );
      })}
    </Flex>
  );
};

export default Roadmap;
