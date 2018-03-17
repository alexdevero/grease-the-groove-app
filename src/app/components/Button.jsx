import styled, { css } from 'styled-components'

export const Button = styled.button`
  padding: 12px 32px;
  font-weight: 700;
  color: hsl(0, 0%, 100%);
  background-color: hsl(200.5, 100%, 50%);
  border: 0;
  border-radius: 35px;
  cursor: pointer;
  transition: background-color .25s ease-in-out;

  &:active,
  &:focus {
    background-color: hsl(200.5, 100%, 30%);
  }

  &:hover {
    background-color: hsl(200.5, 100%, 40%);
  }

  ${props => props.first && css`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `}

  ${props => props.last && css`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  `}

  ${props => props.middle && css`
    border-radius: 0;
  `}
`

export const ButtonWrapper = styled.div`
    margin-top: 18px;

  ${props => props.center && css`
    text-align: center;
  `}
`
