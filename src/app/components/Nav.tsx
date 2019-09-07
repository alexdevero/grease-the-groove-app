import * as React from 'react'
import styled from 'styled-components'

import { Icon, IconWrapper } from './Icon'

interface NavWrapperInterface {
  hasCrossSettings?: boolean;
}

interface NavInterface {
  hasCrossSettings?: boolean;
  hasMenu?: boolean;
  handleCloseSettings: () => void;
  handleOpenSettings: () => void;
}

const NavWrapper = styled.nav<NavWrapperInterface>`
  padding-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`

const Nav = (props: NavInterface) => {
  return (
    <NavWrapper hasCrossSettings={props.hasCrossSettings}>
      {props.hasMenu && (
        <IconWrapper href="#" onClick={props.handleCloseSettings}>
          <Icon settings />
        </IconWrapper>
      )}

      {props.hasCrossSettings && (
        <IconWrapper href="#" onClick={props.handleOpenSettings}>
          <Icon cross />
        </IconWrapper>
      )}
    </NavWrapper>
  )
}

export default Nav
