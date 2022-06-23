import styled from 'styled-components';

export const FormContainer = styled.form.attrs(() => ({
  'aria-label': 'form',
}))`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  transition: 0.5ms ease;
`;

export const Input = styled.input.attrs(() => ({
  'aria-label': 'input',
}))`
  font-family: 'Lato', sans-serif;
  width: auto;
  font-size: 1rem;
  border: 0.3rem solid #cdcdcd;
  border-radius: 0.5rem;
`;

export const Textarea = styled.textarea`
  font-family: 'Lato', sans-serif;
  resize: none;
  height: 10rem;
  width: auto;
  font-size: 1rem;
  border: 0.3rem solid #cdcdcd;
  border-radius: 0.5rem;
`;

export const Date = styled.input.attrs(() => ({
  'aria-label': 'input-date',
}))`
  font-family: 'Lato', sans-serif;
  width: auto;
  font-size: 1rem;
  border: 0.3rem solid #cdcdcd;
  border-radius: 0.5rem;
`;

export const ErrorText = styled.h3`
  font-family: 'Lato', sans-serif;
  transition: 0.5ms;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  font-size: 0.8rem;
  font-family: 'Lato', sans-serif;
`;
