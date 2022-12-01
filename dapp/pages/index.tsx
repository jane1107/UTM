import HomeLayout from '@components/home/HomeLayout';
import Roadmap from '@components/home/Roadmap';
import Story from '@components/home/Story';
import Team from '@components/home/Team';
import Title from '@components/home/Title';
import { NextPage } from 'next';

const Home: NextPage & { getLayout(page: React.ReactNode): React.ReactNode } = () => {
  return (
    <main>
      <Title />
      <Story />
      <Roadmap />
      <Team />
    </main>
  );
};

Home.getLayout = (page) => <HomeLayout>{page}</HomeLayout>;

export default Home;
