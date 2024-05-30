import { useParams } from 'react-router-dom';
import PageList from '../layout/PageList';
import CarouselContainer from 'components/carousel/CarouselContainer';
import Section from 'components/markup/Section';
import Container from 'components/markup/Container';
import BestMenu from 'components/main/sec02/BestMenu';
import TeaRecipe from 'components/main/sec03/TeaRecipe';
import Franchise from 'components/main/sec04/Franchise';

import 'components/main/style.scss';

const HomeContainer = () => {
  const params = useParams();
  const category = params.category || 'all';

  // scroll full page

  return (
    <Container className="container">
      <PageList category={category} />
      <Section className="sec01 visual">
        <CarouselContainer type="visual" />
      </Section>
      <Section className="sec02 best">
        <BestMenu />
        <CarouselContainer type="menu" />
      </Section>
      <Section className="sec03 recipe">
        <TeaRecipe />
      </Section>
      <Section className="sec04 franchise">
        <Franchise />
      </Section>
      <Section className="sec05 notice"></Section>
    </Container>
  );
};

export default HomeContainer;
