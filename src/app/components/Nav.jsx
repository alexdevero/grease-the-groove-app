import React from 'react'
import styled, { css } from 'styled-components'

import { Icon, IconWraper } from './Icon'

const NavWrapper = styled.nav`
  padding-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`

const Nav = (props) => {
  return(
    <NavWrapper hasCrossSettings={props.hasCrossSettings}>
      {props.hasMenu && <IconWraper href="#" onClick={props.openSettings}>
        <Icon settings />
      </IconWraper>}

      {props.hasCrossSettings && <IconWraper href="#" onClick={props.closeSettings}>
        <Icon cross />
      </IconWraper>}
    </NavWrapper>
  )
}

export default Nav
