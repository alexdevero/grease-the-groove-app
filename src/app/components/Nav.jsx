import React from 'react'
import styled, { css } from 'styled-components'

import { Icon, IconWraper } from './Icon'

const NavWrapper = styled.nav`
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  ${'' /* ${props => props.hasCrossSettings && css`
    justify-content: flex-end;
  `} */}
`

const Nav = (props) => {
  return(
    <NavWrapper hasCrossSettings={props.hasCrossSettings}>
      {/* {props.hasTimer && <IconWraper href="#" onClick={props.toggleTimer}>
        <Icon clock />
      </IconWraper>} */}

      {props.hasMenu && <IconWraper href="#" onClick={props.toggleSettings}>
        <Icon menu />
      </IconWraper>}

      {props.hasCrossSettings && <IconWraper href="#" onClick={props.toggleSettings}>
        <Icon cross />
      </IconWraper>}

      {props.hasCrossTimer && <IconWraper href="#" onClick={props.toggleTimer}>
        <Icon cross />
      </IconWraper>}
    </NavWrapper>
  )
}

export default Nav
