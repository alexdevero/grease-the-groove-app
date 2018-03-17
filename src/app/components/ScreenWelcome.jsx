import React from 'react'
import styled, { css } from 'styled-components'

import { Button, ButtonWrapper } from './Button'
import { Heading, Text } from './Typography'
import { InputWrapper, ScreenWrapper } from './Wrappers'

const ScreenWelcome = (props) => {
  return(
    <ScreenWrapper absolute>
      <Heading center>Grease the Groove!</Heading>

      <Text>How many sets do you want to do?</Text>

      <InputWrapper first>
        <input className="settings-sets" type="number" defaultValue={props.numOfSets} />
      </InputWrapper>

      <Heading smallest>Rest pause</Heading>

      <Text>How long should the rest pause be (in minutes)? You can use decimal numbers for seconds, i.e.: 0.2 for 12s.</Text>

      <InputWrapper>
        <input className="settings-pause" type="number" defaultValue={props.restPauseLength} />
      </InputWrapper>

      <ButtonWrapper center>
        <Button onClick={props.saveSettings}>Start!</Button>
      </ButtonWrapper>
    </ScreenWrapper>
  )
}

export default ScreenWelcome
