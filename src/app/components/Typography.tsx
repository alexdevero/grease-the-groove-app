import styled, { css } from 'styled-components'

interface HeadingInterface {
  center?: boolean;
  top?: boolean;
  small?: boolean;
  smallest?: boolean;
}

export const Heading = styled.h1<HeadingInterface>`
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

  ${props => props.top && css`
    margin-top: 21px;
  `}

  ${props => props.smallest && css`
    font-size: 18px;
    color: hsl(0, 0%, 30%);
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

  & + &,
  & + h1 {
    margin-top: 8px;
  }
`

export const SpanBig = styled.span`
  font-size: 48px;
  color: hsl(0, 0%, 50%);
`

export const SpanSmall = styled.span`
  font-size: 21px;
  color: hsl(0, 0%, 80%);
`
