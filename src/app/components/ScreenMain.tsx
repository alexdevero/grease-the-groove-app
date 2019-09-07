import * as React from 'react'

// import { Heading, Text } from './Typography'
import { ListUnstyled } from './Lists'
import Nav from './Nav'
import ScreenTimer from './ScreenTimer'
import { ScreenWrapper } from './Wrappers'

const ScreenMain = (props) => {
  return (
    <ScreenWrapper absolute>
      <Nav hasMenu handleCloseSettings={props.closeSettings} handleOpenSettings={props.openSettings} />

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
