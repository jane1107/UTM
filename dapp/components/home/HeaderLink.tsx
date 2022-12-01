import { Box, Button } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

// PLN 프로젝트에 맞게 세계관, 로드맵, 팀 변경
const scrollLink = [
  { id: 'story', name: '세계관' },
  { id: 'roadmap', name: '로드맵' },
  { id: 'team', name: '팀' },
];

export default function HeaderLink() {
  return (
    <Box>
      {scrollLink.map(({ id, name }, i) => {
        return (
          <ScrollLink key={i} to={id} spy={true} smooth={true}>
            <Button mx={12} variant="ghost" fontWeight="bold">
              {name}
            </Button>
          </ScrollLink>
        );
      })}
    </Box>
  );
}
