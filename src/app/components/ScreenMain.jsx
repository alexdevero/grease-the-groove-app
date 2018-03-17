import React from 'react'
import styled from 'styled-components'

import { Heading, Text } from './Typography'
import { ListUnstyled } from './Lists'
import Nav from './Nav'
import ScreenTimer from './ScreenTimer'
import { ScreenWrapper } from './Wrappers'

const ScreenMain = (props) => {
  return(
    <ScreenWrapper absolute>
      <Nav toggleSettings={props.toggleSettings} toggleTimer={props.toggleTimer} hasTimer hasMenu />

      {/* <Heading>Grease the Groove!</Heading> */}

      {/* <Text>Are you ready to get stronger?</Text> */}

      {/* Timer screen */}
      {props.isTimerShown && <ScreenTimer pauseLength={props.restPauseLength} />}

      <ListUnstyled>
        {props.listGenerator}
      </ListUnstyled>
    </ScreenWrapper>
  )
}

export default ScreenMain
