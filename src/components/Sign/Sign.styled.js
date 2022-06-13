import styled from '@emotion/styled/'

export const Main = styled.main`
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 340px;
  margin-bottom: 30px;
`
export const SignTitle = styled.h2`
  margin: 0 0 20px;
  font-size: var(--font-size-400);
  text-align: center;
`
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const InputHeading = styled.span`
  font-size: var(--font-size-100);
  line-height: 1;
`
export const Input = styled.input`
  min-width: 160px;
  min-height: 45px;
  padding: 10px 15px;
  font-size: var(--font-size-300);
  background-color: var(--color-blue-100);
  border: none;
  border-radius: 1px;
  cursor: pointer;
  appearance: none;
`
export const Button = styled.button`
  display: block;
  width: 100%;
  min-height: 45px;
  padding: 10px 15px;
  color: var(--color-white);
  font-size: var(--font-size-200);
  text-align: center;
  text-decoration: none;
  background-color: var(--color-blue-200);
  border: none;
  border-radius: 1px;
  cursor: pointer;
  transition: background-color 0.2s ease;
`
export const Span = styled.span``

export const SignLink = styled.span`
  text-decoration: underline;
  color: var(--color-blue-200);
  transition: 0.1s color ease;
  &:hover {
    color: var(--color-blue-300);
  }
`
