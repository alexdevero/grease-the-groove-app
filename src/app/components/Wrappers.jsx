import styled, { css } from 'styled-components'

export const ScreenWrapper = styled.section`
  ${props => props.absolute && css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: #fff;
    width: 100%;
    height: 100%;
  `}

  ${props => props.static && css`
    margin-top: 16px;
    margin-bottom: 23px;
    text-align: center;
  `}
`
