import styled from 'styled-components';

export const Container = styled.div.attrs(() => ({
  'aria-label': 'modal',
}))`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  position: fixed;
  width: auto;
  animation: visible 1s;
  padding: 3rem;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0.1rem 0.1rem 0.5rem #dcdcdc;

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
  font-family: 'Lato', sans-serif;
  margin: 0;
`;

export const Close = styled.button`
  position: absolute;
  background-color: transparent;
  cursor: pointer;
  border: none;
  font-size: 2rem;
  font-family: 'Lato', sans-serif;
  color: #585858;
  right: 0.8rem;
  top: 0.5rem;
  margin: 0;
`;
