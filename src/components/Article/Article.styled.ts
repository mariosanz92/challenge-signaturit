import styled from 'styled-components';
import device from '../../breakpoints';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  animation: visible 1s;
  justify-content: space-around;
  height: 10rem;
  background-color: #dcdcdc;
  border-radius: 2rem;
  box-sizing: border-box;
  padding: 1rem 2rem;
  @keyframes visible {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-family: 'Lato', sans-serif;
  font-size: 1rem;

  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;
