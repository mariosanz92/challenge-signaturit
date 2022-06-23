import styled from 'styled-components';
import device from '../../breakpoints';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0 auto 0;
  grid-row-gap: 5rem;
  grid-template-areas:
    '. content .'
    '. listitem .';

  @media ${device.tablet} {
    grid-template-columns: 3rem auto 3rem;
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  grid-area: content;
`;
