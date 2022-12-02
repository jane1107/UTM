import { Box, Flex, Text, Image, Button } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

// PLN width, height 사이즈 수정
const width = 512;
const height = 512;

// PLN image - public/images 교체, contents - 세계관에 관한 내용 추가
const StoryContents = [
  {
    image: 'images/team1.png',
    contents: '영화를 좋아하는 바닷속 친구들',
  },
  {
    image: 'images/team2.png',
    contents: '영화를 위해서 UTM을 만들었습니다',
  },
  {
    image: 'images/team3.png',
    contents: '함께 영화를 즐겨요',
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
    <Flex id="story" minH="calc(100vh-16px)" pt={16} flexDir="column" justifyContent="center" alignItems="center">
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
              bgColor={i === page ? 'gray.300' : 'gray.100'}
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
              <Box key={i} width={width} flex="none" ml={i === 0 ? `-${page}00%` : ''} style={{ transition: 'all 0.3s ease-out' }}>
                <Image src={v.image} alt="Story" />
                {i === page && (
                  <Text fontSize="xl" h={20} w={width}>
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
      <ScrollLink to="roadmap" spy={true} smooth={true}>
        <Button variant="ghost" fontSize="4xl" className="animate__animated animate__heartBeat animate__infinite">
          ↓
        </Button>
      </ScrollLink>
    </Flex>
  );
};

export default Story;
