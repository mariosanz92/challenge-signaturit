import styled from 'styled-components';
import device from '../../breakpoints';
import GenericButton from '../GenericButton';

export const Container = styled.div`
  display: grid;
  display: grid;
  grid-template-columns: 1rem auto 1rem;
  grid-row-gap: 1rem;
  grid-template-areas:
    '. title .'
    '. text .'
    '. image .'
    '. delete .';

  @media ${device.tablet} {
    grid-template-columns: 3rem auto 3rem;
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr 3fr 1fr;
  }
`;
export const Title = styled.h1`
  grid-area: title;
  font-size: 4rem;
  margin: 0;
  font-family: 'Lato', sans-serif;
`;
export const Text = styled.p`
  grid-area: text;

  font-family: 'Lato', sans-serif;
  font-size: 1.5rem;
`;

export const Image = styled.img`
  grid-area: image;

  width: 100%;
  height: 20rem;
  object-fit: cover;
`;

export const GenericButtonStyled = styled(GenericButton)`
  grid-area: delete;
  max-width: 15rem;
  margin-left: auto;
  margin-right: 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;
