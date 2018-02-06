import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sets: 6
    }
  }

  render() {
    return (
      <div>
        <h1>Grease the Groove!</h1>

        <p>Are you ready to get stronger?</p>

        <ul>
          {[...Array(this.state.sets)].map((x, i) =>
            <li key={i}>
              <checkbox>
                <label htmlFor={i}>
                  <input id={i} name={i} type="checkbox"/>

                  <span>Set number {i+1}</span>
                </label>
              </checkbox>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default App
