import React from 'react'
import styled, { css } from 'styled-components'

import { Icon, IconWrapper } from './Icon'

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
      {props.hasMenu && <IconWrapper href="#" onClick={props.openSettings}>
        <Icon settings />
      </IconWrapper>}

      {props.hasCrossSettings && <IconWrapper href="#" onClick={props.closeSettings}>
        <Icon cross />
      </IconWrapper>}
    </NavWrapper>
  )
}

export default Nav
