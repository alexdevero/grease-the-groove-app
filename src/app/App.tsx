import * as React from 'react'
import styled from 'styled-components'

import Checkbox from './components/Checkbox'
// import Nav from './components/Nav'
import ScreenMain from './components/ScreenMain'
import ScreenSettings from './components/ScreenSettings'
// import ScreenTimer from './components/ScreenTimer'
import ScreenWelcome from './components/ScreenWelcome'

// import tadaSound from './../assets/sounds/ta-da.mp3'

const dialog = require('electron').remote.dialog

interface AppStateInterface {
  isMainScreenShown: boolean;
  isOnboarding: boolean;
  isSettingsOpen: boolean;
  isTimerShown: boolean;
  isWelcomeScreenShown: boolean;
  numOfSets: number;
  restPauseLength: number;
}

const AppWrapper = styled.main`
  position: relative;
`

class App extends React.Component<{}, AppStateInterface> {
  constructor(props) {
    super(props)

    this.state = {
      isMainScreenShown: false,
      isOnboarding: true,
      isSettingsOpen: false,
      isTimerShown: true,
      isWelcomeScreenShown: true,
      numOfSets: 6,
      restPauseLength: 90
    }
  }

  generateSetsList() {
    const setsItems = []

    for (let i = 0; i < this.state.numOfSets; i++) {
      setsItems.push(
        <li key={i} onClick={(e) => this.countCheckedSets(e)}>
          <Checkbox id={`set${i}`} label={`Set number ${i + 1}`} />
        </li>
      )
    }

    return setsItems
  }

  openSettings(e) {
    e.preventDefault()

    this.setState((prevState) => ({
      isMainScreenShown: false,
      isSettingsOpen: prevState.isSettingsOpen,
      isWelcomeScreenShown: false
    }))
  }

  closeSettings(e) {
    e.preventDefault()

    this.setState({
      isMainScreenShown: true,
      isOnboarding: false,
      isSettingsOpen: false
    })
  }

  updateNumOfSets() {
    const setsValue = document.querySelector('.settings-sets').value

    this.setState({
      numOfSets: setsValue
    })

    dialog.showMessageBox({
      buttons: ['OK'],
      message: 'Settings for sets have been updated!',
      type: 'info'
    })
  }

  updateRestPauseLength() {
    const restPauseValue = document.querySelector('.settings-pause').value

    this.setState({
      restPauseLength: restPauseValue
    })

    dialog.showMessageBox({
      buttons: ['OK'],
      message: 'Settings for rest pause have been updated!',
      type: 'info'
    })
  }

  saveSettings() {
    const restPauseValue = document.querySelector('.settings-pause').value
    const setsValue = document.querySelector('.settings-sets').value

    this.setState({
      isMainScreenShown: true,
      isOnboarding: false,
      isSettingsOpen: false,
      numOfSets: setsValue,
      restPauseLength: restPauseValue
    })
  }

  countCheckedSets(e) {
    // Prevent event firing twice
    e.preventDefault()

    // Toggle checkbox
    const checkbox = e.currentTarget.querySelector('[type=checkbox]')
    checkbox.checked = !checkbox.checked

    // Check number of checked checkboxes
    const checkboxesArray = document.querySelectorAll('[type=checkbox]:checked')

    // If number of completed sets matches number of sets
    // show success message and play ta da sound
    if (checkboxesArray.length === this.state.numOfSets) {
      // setTimeout(() => {
      //   let soundFile = new Audio(tadaSound);
      //
      //   soundFile.volume = 0.5 // 0.5 is half volume
      //
      //   soundFile.play()
      // }, 450)

      setTimeout(() => {
        dialog.showMessageBox({
          buttons: ['Close'],
          message: 'Congratulations! You finished all sets you had for today!',
          type: 'info'
        })
      }, 400)
    }
  }

  render() {
    return (
      <AppWrapper>
        {/* Main screen */}
        {this.state.isMainScreenShown && (
          <ScreenMain
            listGenerator={this.generateSetsList()}
            isTimerShown={this.state.isTimerShown}
            closeSettings={(e) => this.closeSettings(e)}
            openSettings={(e) => this.openSettings(e)}
            restPauseLength={this.state.restPauseLength}
          />
        )}

        {/* Timer screen */}
        {/* {this.state.isTimerShown && <ScreenTimer pauseLength={this.state.restPauseLength} toggleTimer={(e) => this.toggleTimer(e)} />} */}

        {/* Settings screen */}
        {this.state.isSettingsOpen && (
          <ScreenSettings
            closeSettings={(e) => this.closeSettings(e)}
            handleSetsChange={() => this.updateNumOfSets()}
            handlePauseLengthChange={() => this.updateRestPauseLength()}
            numOfSets={this.state.numOfSets}
            restPauseLength={this.state.restPauseLength}
            isOnboarding={this.state.isOnboarding}
            handleSaveSettings={() => this.saveSettings()}
          />
        )}

        {/* Welcome screen */}
        {this.state.isWelcomeScreenShown && (
          <ScreenWelcome handleOpenSettings={(e) => this.openSettings(e)} />
        )}
      </AppWrapper>
    )
  }
}

export default App
