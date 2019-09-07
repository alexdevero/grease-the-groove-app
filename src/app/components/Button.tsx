import styled, { css } from 'styled-components'

interface ButtonInterface {
  first?: boolean;
  fullWidth?: boolean;
  last?: boolean;
  middle?: boolean;
  text?: boolean;
}

interface ButtonWrapperInterface {
  center?: boolean;
}

export const Button = styled.button<ButtonInterface>`
  padding: 13px 32px;
  font-weight: 700;
  line-height: 1;
  color: hsl(0, 0%, 100%);
  background-color: hsl(200.5, 100%, 50%);
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color .25s ease-in-out;

  &:focus {
    outline: 0;
  }

  &:hover {
    background-color: hsl(200.5, 100%, 40%);
  }

  ${props => props.fullWidth && css`
    width: 100%;
  `}

  ${props => props.text && css`
    font-size: 15px;
  `}

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

export const ButtonWrapper = styled.div<ButtonWrapperInterface>`
    margin-top: 18px;

  ${props => props.center && css`
    text-align: center;
  `}
`
