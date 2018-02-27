import React from 'react'

import Checkbox from './components/Checkbox'
import { Heading, Text } from './components/Typography'
import { ListUnstyled } from './components/Lists'
import NotificationButton from './components/Notification'
import Timer from './components/Timer'

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
      <div>
        <Heading>Grease the Groove!</Heading>

        <Text>Are you ready to get stronger?</Text>

        <a href="#" onClick={(e) => this.toggleSettings(e)}>Settings</a>

        <a href="#" onClick={(e) => this.toggleTimer(e)}>Timer</a>

        {this.state.isSettingsOpen && <div className="settings">
          <Text>How many sets do you want to do?</Text>

          <input type="number" value={this.state.numOfSets} onChange={(e) => this.updateNumOfSets(e)} />

          <Text>How long should the rest pause be (in minutes)? You can use decimal numbers for seconds, i.e.: 0.2 for 12s.</Text>

          <input type="number" value={this.state.restPauseLength} onChange={(e) => this.updateRestPauseLength(e)} />
        </div>}

        {this.state.isTimerShown && <Timer pauseLength={this.state.restPauseLength} />}

        <ListUnstyled>
          {this.generateSetsList()}
        </ListUnstyled>

        {/* <NotificationButton /> */}
      </div>
    )
  }
}

export default App
