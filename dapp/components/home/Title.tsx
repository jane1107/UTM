import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { FC } from "react";
import { Link as ScrollLink } from "react-scroll";

const Title: FC = () => {
  return (
    <Flex
      minH="100vh"
      justifyContent="space-between"
      alignItems="center"
      flexDir="column"
      id="title"
      px="4"
    >
      <Box></Box>
      <Box>
        {/* PLN 타이틀 이미지 교체 */}
        <Image src="images/title.gif" alt="Title" />
      </Box>
      <ScrollLink to="story" spy={true} smooth={true}>
        <Button
          variant="ghost"
          fontSize="4xl"
          mb={8}
          className="animate__animated animate__heartBeat animate__infinite"
        >
          ↓
        </Button>
      </ScrollLink>
    </Flex>
  );
};

export default Title;
