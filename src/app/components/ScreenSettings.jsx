import React from 'react'
import styled from 'styled-components'

import { Heading, Text } from './Typography'
import Nav from './Nav'

const SettingsScreenWrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: #fff;
`

const ScreenSettings = (props) => {
  return(
    <SettingsScreenWrapper>
      <Nav toggleSettings={props.toggleSettings} hasCrossSettings />

      <Heading small>Settings</Heading>

      <Text>How many sets do you want to do?</Text>

      <input className="settings-sets" type="number" defaultValue={props.numOfSets} />

      <button onClick={props.changeSets}>Save</button>

      <Text>How long should the rest pause be (in minutes)? You can use decimal numbers for seconds, i.e.: 0.2 for 12s.</Text>

      <input className="settings-pause" type="number" defaultValue={props.restPauseLength} />

      <button onClick={props.changePauseLength}>Save</button>
    </SettingsScreenWrapper>
  )
}

export default ScreenSettings
