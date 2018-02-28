import React from 'react'
import styled from 'styled-components'

import { Icon, IconWraper } from './Icon'

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`

const Nav = (props) => {
  return(
    <NavWrapper>
      {props.hasTimer && <IconWraper href="#" onClick={props.toggleTimer}>
        <Icon clock />
      </IconWraper>}

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