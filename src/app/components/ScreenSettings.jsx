import React from 'react'
import styled, { css } from 'styled-components'

import { Heading, Text } from './Typography'
import Nav from './Nav'
import { InputWrapper, ScreenWrapper } from './Wrappers'

const ScreenSettings = (props) => {
  return(
    <ScreenWrapper absolute>
      <Nav toggleSettings={props.toggleSettings} hasCrossSettings />

      <Heading>App settings</Heading>

      <Heading smallest>Sets</Heading>

      <Text>How many sets do you want to do?</Text>

      <InputWrapper first>
        <input className="settings-sets" type="number" defaultValue={props.numOfSets} />

        <button onClick={props.changeSets}>Save</button>
      </InputWrapper>

      <Heading smallest>Rest pause</Heading>

      <Text>How long should the rest pause be (in minutes)? You can use decimal numbers for seconds, i.e.: 0.2 for 12s.</Text>

      <InputWrapper>
        <input className="settings-pause" type="number" defaultValue={props.restPauseLength} />

        <button onClick={props.changePauseLength}>Save</button>
      </InputWrapper>
    </ScreenWrapper>
  )
}

export default ScreenSettings
