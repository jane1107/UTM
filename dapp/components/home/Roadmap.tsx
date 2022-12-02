import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import RoadmapCard, { RoadmapCardProps } from './RoadmapCard';

// PLN justifyContent "" - 카드 왼쪽 위치, "end" - 카드 오른쪽 위치
// PLN 로드맵 카드 name, description 변경
// PLN bgGradientColor 색상 변경 참조 https://chakra-ui.com/docs/styled-system/theme
const roadmapContents: RoadmapCardProps[] = [
  {
    justifyContent: '',
    animation: 'slideInLeft',
    name: '1. 영화 커뮤니티 활성화',
    description: '디스코드에서 다양한 영화 커뮤니티 활동을 통한 인원 모집',
    bgGradientColor: 'red',
  },
  {
    justifyContent: 'end',
    animation: 'slideInRight',
    name: '2. 1차 민팅',
    description: '커뮤니티 인원 50명 대상으로 1차 민팅',
    bgGradientColor: 'orange',
  },
  {
    justifyContent: '',
    animation: 'slideInLeft',
    name: '3. 오프라인 활동 계획',
    description: '영화관 대관을 통한 매주 함께 영화 관람',
    bgGradientColor: 'yellow',
  },
  {
    justifyContent: 'end',
    animation: 'slideInRight',
    name: '4. 배우들과 파트너십',
    description: '각종 배우들에게 참여를 유도하여 NFT 협업',
    bgGradientColor: 'green',
  },
  {
    justifyContent: '',
    animation: 'slideInLeft',
    name: '5+. UTM 커뮤니티 어플 제작',
    description: '2023년 2분기 예정',
    bgGradientColor: 'blue',
  },
  {
    justifyContent: 'end',
    animation: 'slideInRight',
    name: '5+. 세계관 확대와 2차 민팅',
    description: '2023년 2분기 예정',
    bgGradientColor: 'purple',
  },
  {
    justifyContent: '',
    animation: 'slideInLeft',
    name: '5+. 영화 크라우드 펀딩 주최',
    description: '홀더에게 선투자 기회 제공',
    bgGradientColor: 'red',
  },
  {
    justifyContent: 'end',
    animation: 'slideInRight',
    name: '5+. 캐릭터 브랜딩 및 굿즈 제작',
    description: '홀더들에게 수익을 재분배하고 제작에 참여할 수 있도록 함',
    bgGradientColor: 'orange',
  },
  {
    justifyContent: '',
    animation: 'slideInLeft',
    name: '6+. 오프라인 바닷속 영화관 오픈',
    description: '커뮤니티 멤버만을 위한 영화관 오픈',
    bgGradientColor: 'yellow',
  },
  {
    justifyContent: 'end',
    animation: 'slideInRight',
    name: '6+. 영화 제작에 참여',
    description: '파트너십을 통해 홀더들에게 제작에 참여할 기회를 제공',
    bgGradientColor: 'green',
  },
];

const Roadmap: FC = () => {
  return (
    <Flex id="roadmap" minH="calc(100vh-16px)" pt={16} flexDir="column" justifyContent="center" alignItems="center" pb={24}>
      <Text mb={8} fontWeight="bold" fontSize="4xl">
        ROADMAP
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
