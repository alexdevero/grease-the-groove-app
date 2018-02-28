import React from 'react'
import styled from 'styled-components'

import { Heading, Text } from './Typography'
import { ListUnstyled } from './Lists'
import Nav from './Nav'
import ScreenTimer from './ScreenTimer'

const SettingsMainWrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: #fff;
`

const ScreenMain = (props) => {
  return(
    <SettingsMainWrapper>
      <Nav toggleSettings={props.toggleSettings} toggleTimer={props.toggleTimer} hasTimer hasMenu />

      <Heading>Grease the Groove!</Heading>

      <Text>Are you ready to get stronger?</Text>

      {/* Timer screen */}
      {props.isTimerShown && <ScreenTimer pauseLength={props.restPauseLength} />}

      <ListUnstyled>
        {props.listGenerator}
      </ListUnstyled>
    </SettingsMainWrapper>
  )
}

export default ScreenMain
