import * as React from 'react'

import { Button, ButtonWrapper } from './Button'
import { Heading, Text } from './Typography'
import Nav from './Nav'
import { Input, InputWrapper } from './Input'
import { ScreenWrapper } from './Wrappers'

interface ScreenSettingsInterface {
  isOnboarding: boolean;
  numOfSets: number;
  restPauseLength: number;
  handleSetsChange: () => void;
  handlePauseLengthChange: () => void;
  closeSettings: (e) => void;
  handleSaveSettings: (e) => void;
}

const ScreenSettings = (props: ScreenSettingsInterface) => {
  return (
    <ScreenWrapper absolute center fullHeight={props.isOnboarding ? true : null}>
      <Nav hasCrossSettings handleCloseSettings={props.closeSettings} />

      <Heading>App settings</Heading>

      <Heading smallest>Sets</Heading>

      <Text>How many sets do you want to do?</Text>

      <InputWrapper first>
        <Input className="settings-sets" type="number" defaultValue={props.numOfSets.toString()} />

        {!props.isOnboarding && <Button last onClick={props.handleSetsChange}>Save</Button>}
      </InputWrapper>

      <Heading smallest>Rest pause</Heading>

      <Text>How long should the rest pause be (in minutes)? You can use decimal numbers for seconds, i.e.: 0.2 for 12s.</Text>

      <InputWrapper>
        <Input className="settings-pause" type="number" defaultValue={props.restPauseLength.toString()} />

        {!props.isOnboarding && <Button last onClick={props.handlePauseLengthChange}>Save</Button>}
      </InputWrapper>

      {props.isOnboarding && (
        <ButtonWrapper center>
          <Button fullWidth text onClick={props.handleSaveSettings}>Save & start!</Button>
        </ButtonWrapper>
      )}
    </ScreenWrapper>
  )
}

export default ScreenSettings
