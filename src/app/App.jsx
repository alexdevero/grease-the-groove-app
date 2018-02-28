import React from 'react'
import styled from 'styled-components'

import Checkbox from './components/Checkbox'
import { Heading, Text } from './components/Typography'
import { ListUnstyled } from './components/Lists'
import { Icon, IconWraper } from './components/Icon'
import Nav from './components/Nav'
import ScreenMain from './components/ScreenMain'
import ScreenSettings from './components/ScreenSettings'
import ScreenTimer from './components/ScreenTimer'

const AppWrapper = styled.main`
  position: relative;
`

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isMainScreenShown: true,
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
      isMainScreenShown: !this.state.isMainScreenShown,
      isSettingsOpen: !this.state.isSettingsOpen
    })
  }

  toggleTimer(e) {
    e.preventDefault()

    this.setState({
      isTimerShown: !this.state.isTimerShown
    })
  }

  updateNumOfSets(e) {
    let setsValue = document.querySelector('.settings-sets').value

    this.setState({numOfSets: setsValue})
  }

  updateRestPauseLength(e) {
    let restPauseValue = document.querySelector('.settings-pause').value

    this.setState({restPauseLength: restPauseValue})
  }

  render() {
    return (
      <AppWrapper>
        {/* Main screen */}
        {this.state.isMainScreenShown && <ScreenMain listGenerator={this.generateSetsList()} isTimerShown={this.state.isTimerShown} toggleSettings={(e) => this.toggleSettings(e)} toggleTimer={(e) => this.toggleTimer(e)} restPauseLength={this.state.restPauseLength} />}

        {/* Timer screen */}
        {/* {this.state.isTimerShown && <ScreenTimer pauseLength={this.state.restPauseLength} toggleTimer={(e) => this.toggleTimer(e)} />} */}

        {/* Settings screen */}
        {this.state.isSettingsOpen && <ScreenSettings toggleSettings={(e) => this.toggleSettings(e)} changeSets={(e) => this.updateNumOfSets(e)} changePauseLength={(e) => this.updateRestPauseLength(e)} numOfSets={this.state.numOfSets} restPauseLength={this.state.restPauseLength} />}
      </AppWrapper>
    )
  }
}

export default App
