import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 10rem;
  background-color: #dcdcdc;
  border-radius: 2rem;
  box-sizing: border-box;
  padding: 1rem 2rem;
`;

export const Title = styled.h2`
  margin: 0;
  font-family: 'Lato', sans-serif;
`;

export const Emoji = styled.p`
  margin: 0;
  padding: 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;
