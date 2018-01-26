import React from 'react'
import { render } from 'react-dom'
// import App from './components/App'

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it

const App = () => (
  <div className="app">
    <h1 className="app__title">Grease the Groove!</h1>
  </div>
)

// Now we can render our application into it
render(<App />, document.getElementById('root'))
