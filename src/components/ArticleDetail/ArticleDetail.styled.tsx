import styled from 'styled-components';
import device from '../../breakpoints';
import GenericButton from '../GenericButton';

export const Container = styled.div`
  display: grid;
  display: grid;
  grid-template-columns: 1rem auto 1rem;
  grid-row-gap: 1rem;
  grid-template-areas:
    '. nextArticle .'
    '. title .'
    '. text .'
    '. image .'
    '. wrapper .';

  @media ${device.tablet} {
    grid-template-columns: 3rem auto 3rem;
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr 3fr 1fr;
  }
`;
export const Title = styled.h1`
  grid-area: title;
  font-size: 2.5rem;
  margin: 0;
  font-family: 'Lato', sans-serif;
  @media ${device.tablet} {
    font-size: 4rem;
  }
`;
export const Text = styled.p`
  grid-area: text;

  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

export const Image = styled.img`
  grid-area: image;
  width: 100%;
  height: 20rem;
  object-fit: cover;
`;

export const GenericButtonDelete = styled(GenericButton)`
  max-width: 15rem;
`;

export const Date = styled.p`
  margin-top: 0;
  padding: 0.3rem;
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  background-color: #cdcdcd;
  border-radius: 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  grid-area: wrapper;
`;

export const GenericButtonBack = styled(GenericButton)`
  grid-area: nextArticle;
  max-width: 12rem;
  margin-right: 0;
  @media ${device.tablet} {
    max-width: 15rem;
  }
`;
