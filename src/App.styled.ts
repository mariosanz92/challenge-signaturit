import styled from 'styled-components';
import device from './breakpoints';

const Container = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: 1rem auto 1rem;
  grid-template-areas:
    '. filterType .'
    '. listitem .';

  @media ${device.tablet} {
    grid-template-columns: 3rem auto 3rem;
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr 2fr 1fr;
  }
`;

export default Container;
