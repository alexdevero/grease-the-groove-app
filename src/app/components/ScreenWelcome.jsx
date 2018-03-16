import React from 'react'
import styled, { css } from 'styled-components'

import { Heading, Text } from './Typography'

const SettingsWelcomeWrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: #fff;
`

const InputWrapper = styled.div`
  margin-top: 8px;

  ${props => props.first && css`
    margin-bottom: 28px;
  `}
`

const ScreenWelcome = (props) => {
  return(
    <SettingsWelcomeWrapper>
      <Heading>Grease the Groove!</Heading>

      <Text>How many sets do you want to do?</Text>

      <InputWrapper first>
        <input className="settings-sets" type="number" defaultValue={props.numOfSets} />
      </InputWrapper>

      <Heading smallest>Rest pause</Heading>

      <Text>How long should the rest pause be (in minutes)? You can use decimal numbers for seconds, i.e.: 0.2 for 12s.</Text>

      <InputWrapper>
        <input className="settings-pause" type="number" defaultValue={props.restPauseLength} />

        <button onClick={props.saveSettings}>Start!</button>
      </InputWrapper>
    </SettingsWelcomeWrapper>
  )
}

export default ScreenWelcome
