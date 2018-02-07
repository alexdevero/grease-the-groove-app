import React from 'react'

import NotificationButton from './components/Notification'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isSettingsOpen: false,
      sets: 6
    }
  }

  generateSetsList() {
    let setsItems = []

    for(let i = 0; i<this.state.sets; i++) {
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

    this.setState({isSettingsOpen: !this.state.isSettingsOpen})
  }

  updateNumOfSets(e) {
    this.setState({sets: e.target.value})
  }

  render() {
    return (
      <div>
        <h1>Grease the Groove!</h1>

        <p>Are you ready to get stronger?</p>


        <a href="#" onClick={(e) => this.toggleSettings(e)}>Settings</a>

        {this.state.isSettingsOpen && <div className="settings">
          <p>How many sets do you want to do?</p>

          <input type="number" onChange={(e) => this.updateNumOfSets(e)} />
        </div>}

        <ul>
          {this.generateSetsList()}
        </ul>

        {/* <NotificationButton /> */}
      </div>
    )
  }
}

export default App
