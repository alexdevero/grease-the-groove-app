import React from 'react'
import styled from 'styled-components'

import Checkbox from './components/Checkbox'
import { Heading, Text } from './components/Typography'
import { ListUnstyled } from './components/Lists'
import { Icon, IconWraper } from './components/Icon'
import ScreenSettings from './components/ScreenSettings'
import ScreenTimer from './components/ScreenTimer'

const MainScreen = styled.main`
  position: relative;
`

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isSettingsOpen: false,
      isTimerShown: false,
      numOfSets: 6,
      restPauseLength: 90
    }
  }

  generateSetsList() {
    let setsItems = []

    for(let i = 0; i<this.state.numOfSets; i++) {
      setsItems.push(<li key={i}>
        <Checkbox id={`set${i}`} label={`Set number ${i+1}`} />
      </li>)
    }

    return setsItems
  }

  toggleSettings(e) {
    e.preventDefault()

    this.setState({
      isSettingsOpen: !this.state.isSettingsOpen,
      isTimerShown: false
    })
  }

  toggleTimer(e) {
    e.preventDefault()

    this.setState({
      isSettingsOpen: false,
      isTimerShown: !this.state.isTimerShown
    })
  }

  updateNumOfSets(e) {
    this.setState({numOfSets: e.target.value})
  }

  updateRestPauseLength(e) {
    this.setState({restPauseLength: e.target.value})
  }

  render() {
    return (
      <MainScreen>
        <nav style={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'flex-end'}}>
          <IconWraper href="#" onClick={(e) => this.toggleTimer(e)}>
            <Icon clock />
          </IconWraper>

          <IconWraper href="#" onClick={(e) => this.toggleSettings(e)}>
            <Icon menu />
          </IconWraper>
        </nav>

        <Heading>Grease the Groove!</Heading>

        <Text>Are you ready to get stronger?</Text>

        <ListUnstyled>
          {this.generateSetsList()}
        </ListUnstyled>

        {/* Timer screen */}
        {this.state.isTimerShown && <ScreenTimer pauseLength={this.state.restPauseLength} toggleTimer={(e) => this.toggleTimer(e)} />}

        {/* Settings screen */}
        {this.state.isSettingsOpen && <ScreenSettings toggleSettings={(e) => this.toggleSettings(e)} changeSets={(e) => this.updateNumOfSets(e)} changePauseLength={(e) => this.updateRestPauseLength(e)} numOfSets={this.state.numOfSets} restPauseLength={this.state.restPauseLength} />}
      </MainScreen>
    )
  }
}

export default App
