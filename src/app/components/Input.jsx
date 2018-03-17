import styled, { css } from 'styled-components'

export const Input = styled.input`
  padding: 10px;
  margin: 0;
  color: hsl(0, 0%, 40%);
  border-top: 0;
  border-right: 0;
  border-bottom: 2px solid hsl(0, 0%, 85%);
  border-left: 0;
  transition: border-bottom-color .25s ease-in-out;

  &:active,
  &:focus {
    border-bottom-color: hsl(200.5, 100%, 50%);
    outline: 0;
  }
`

export const InputWrapper = styled.div`
  margin-top: 8px;

  ${props => props.first && css`
    margin-bottom: 28px;
  `}

  ${props => props.center && css`
    text-align: center;
  `}
`
