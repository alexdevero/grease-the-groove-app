import styled, { css } from 'styled-components'

export const Heading = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 32px;
  line-height: 1.2;
  color: hsl(0, 0%, 12.9%);

  ${props => props.center && css`
    text-align: center;
  `}

  ${props => props.small && css`
    font-size: 21px;
  `}

  ${props => props.smallest && css`
    font-size: 18px;
  `}

  & + h1 {
    margin-top: 16px;
  }

  & + p {
    margin-top: 16px;
  }
`

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  color: hsl(0, 0%, 50%);

  & + & {
    margin-top: 8px;
  }
`
