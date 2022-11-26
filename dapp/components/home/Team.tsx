import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import TeamCard, { TeamCardProps } from "./TeamCard";

// PLN 팀원 정보 교체
const teamCardContents: TeamCardProps[] = [
  {
    name: "h662",
    position: "팀장, 프로그래머",
    image: "images/team1.png",
  },
  {
    name: "h662",
    position: "디자니어",
    image: "images/team2.png",
  },
  {
    name: "h662",
    position: "기획",
    image: "images/team3.png",
  },
  {
    name: "h662",
    position: "프로그래머",
    image: "images/team4.png",
  },
];

const Team: FC = () => {
  return (
    <Flex
      id="roadmap"
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      pb={24}
      flexDir="column"
    >
      <Text mb={8} fontWeight="bold" fontSize="4xl">
        TEAM
      </Text>
      <Flex>
        {teamCardContents.map((v, i) => {
          return (
            <TeamCard
              key={i}
              name={v.name}
              position={v.position}
              image={v.image}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Team;
