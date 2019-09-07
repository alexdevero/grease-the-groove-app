import styled, { css } from 'styled-components'

interface ScreenWrapperInterface {
  absolute?: boolean;
  center?: boolean;
  fullHeight?: boolean;
  static?: boolean;
}

export const ScreenWrapper = styled.section<ScreenWrapperInterface>`
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

  ${props => props.center && css`
    text-align: center;
  `}

  ${props => props.fullHeight && css`
    display: flex;
    align-items: center;
    flex-flow: column;
    justify-content: space-between;
    height: calc(100vh - 16px);

    div:last-of-type {
      margin-top: auto;
      width: 100%;
    }
  `}
`
