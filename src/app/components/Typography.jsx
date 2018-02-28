import styled, { css } from 'styled-components'

export const Heading = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 32px;
  line-height: 1.2;
  
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
    margin-top: 8px;
  }
`

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 0;

  & + & {
    margin-top: 8px;
  }
`
