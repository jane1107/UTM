import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { FC, useState } from "react";

// PLN width, height 사이즈 수정
const width = 512;
const height = 512;

// PLN image - public/images 교체, contents - 세계관에 관한 내용 추가
const StoryContents = [
  {
    image: "images/story1.gif",
    contents: "우리 NFT의 세계관을 여기에 적습니다.",
  },
  {
    image: "images/story2.png",
    contents:
      "잘 갖추어진 세계관은 NFT 홀더들에게 몰입감을 부여할 수 있습니다.",
  },
  {
    image: "images/story3.png",
    contents: "여러분의 상상의 나래를 펼쳐서 멋진 세계관을 창조해보세요.",
  },
];

const Story: FC = () => {
  const [page, setPage] = useState<number>(0);

  const onClickPage = (_page: number) => () => {
    setPage(_page);
  };
  const onClickPrev = () => {
    if (page > 0) {
      setPage(page - 1);
    } else {
      setPage(StoryContents.length - 1);
    }
  };
  const onClickNext = () => {
    if (page < StoryContents.length - 1) {
      setPage(page + 1);
    } else {
      setPage(0);
    }
  };

  return (
    <Flex
      id="story"
      minH="100vh"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text mb={8} fontWeight="bold" fontSize="4xl">
        STORY
      </Text>
      <Flex mb={4}>
        {StoryContents.map((_, i) => {
          return (
            <Box
              key={i}
              mx={1}
              w={4}
              h={4}
              rounded="full"
              bgColor={i === page ? "gray.300" : "gray.100"}
              onClick={onClickPage(i)}
              cursor="pointer"
            ></Box>
          );
        })}
      </Flex>
      <Flex alignItems="center">
        <Text onClick={onClickPrev} mr={12} fontSize="6xl" cursor="pointer">
          ←
        </Text>
        <Flex width={width} minH={height} overflow="hidden">
          {StoryContents.map((v, i) => {
            return (
              <Box
                key={i}
                width={width}
                flex="none"
                ml={i === 0 ? `-${page}00%` : ""}
                style={{ transition: "all 0.3s ease-out" }}
              >
                <Image src={v.image} alt="Story" />
                {i === page && (
                  <Text fontSize="xl" w={width}>
                    {v.contents}
                  </Text>
                )}
              </Box>
            );
          })}
        </Flex>
        <Text onClick={onClickNext} ml={12} fontSize="6xl" cursor="pointer">
          →
        </Text>
      </Flex>
    </Flex>
  );
};

export default Story;
