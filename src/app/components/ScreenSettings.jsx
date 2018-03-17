import React from 'react'
import styled, { css } from 'styled-components'

import { Button, ButtonWrapper } from './Button'
import { Heading, Text } from './Typography'
import Nav from './Nav'
import { Input, InputWrapper } from './Input'
import { ScreenWrapper } from './Wrappers'

const ScreenSettings = (props) => {
  return(
    <ScreenWrapper absolute>
      <Nav closeSettings={props.closeSettings} hasCrossSettings />

      <Heading>App settings</Heading>

      <Heading smallest>Sets</Heading>

      <Text>How many sets do you want to do?</Text>

      <InputWrapper first>
        <Input className="settings-sets" type="number" defaultValue={props.numOfSets} />

        {!props.isOnboarding && <Button onClick={props.changeSets} last>Save</Button>}
      </InputWrapper>

      <Heading smallest>Rest pause</Heading>

      <Text>How long should the rest pause be (in minutes)? You can use decimal numbers for seconds, i.e.: 0.2 for 12s.</Text>

      <InputWrapper>
        <Input className="settings-pause" type="number" defaultValue={props.restPauseLength} />

        {!props.isOnboarding && <Button onClick={props.changePauseLength} last>Save</Button>}
      </InputWrapper>

      {props.isOnboarding && <ButtonWrapper center>
        <Button onClick={props.saveSettings}>Get started!</Button>
      </ButtonWrapper>}
    </ScreenWrapper>
  )
}

export default ScreenSettings
