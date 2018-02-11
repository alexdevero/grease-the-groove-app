import React from 'react'

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
        <label htmlFor={`set${i}`}>
          <input id={`set${i}`} name={`set${i}`} type="checkbox"/>

          <span>Set number {i+1}</span>
        </label>
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
        <h1>Grease the Groove!</h1>

        <p>Are you ready to get stronger?</p>

        <a href="#" onClick={(e) => this.toggleSettings(e)}>Settings</a>

        <a href="#" onClick={(e) => this.toggleTimer(e)}>Timer</a>

        {this.state.isSettingsOpen && <div className="settings">
          <p>How many sets do you want to do?</p>

          <input type="number" placeholder={this.state.numOfSets} onChange={(e) => this.updateNumOfSets(e)} />

          <p>How long should the rest pause be (minutes)?</p>

          <input type="number" value={this.state.restPauseLength} onChange={(e) => this.updateRestPauseLength(e)} />
        </div>}

        {this.state.isTimerShown && <Timer pauseLength={this.state.restPauseLength} />}

        <ul>
          {this.generateSetsList()}
        </ul>

        {/* <NotificationButton /> */}
      </div>
    )
  }
}

export default App
