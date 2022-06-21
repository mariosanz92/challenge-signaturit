import styled from 'styled-components';

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  row-gap: 0.5rem;
  grid-area: filterType;
  align-items: end;
  grid-template-rows: 1rem;
  margin-top: 2rem;
  font-family: 'Lato', sans-serif;
`;

export const Select = styled.select`
  position: relative;
  font-family: Arial;
  height: 2rem;
  background: white;
  color: black;
  font-size: 1rem;
  border-color: #dcdcdc;
  border-radius: 0.5rem;
  padding: 0 0.5rem;
`;

export const Option = styled.option``;
