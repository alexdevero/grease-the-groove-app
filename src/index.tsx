import React from 'react'
import { render } from 'react-dom'
import { createGlobalStyle } from 'styled-components'

import App from './app/App'

const hindBold = require('./assets/fonts/Hind-Bold.ttf')
const hindLight = require('./assets/fonts/Hind-Light.ttf')
const hindRegular = require('./assets/fonts/Hind-Regular.ttf')

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Hind';
    font-weight: 300;
    src: url(${hindLight});
  }

  @font-face {
    font-family: 'Hind';
    font-weight: 400;
    src: url(${hindRegular});
  }

  @font-face {
    font-family: 'Hind';
    font-weight: 700;
    src: url(${hindBold});
  }

  body {
    font: 100% / 1.618 'Hind', serif;
  }

  * {
    -webkit-user-select: none;
  }

  h1,
  p {
    cursor: default;
  }
`

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
const root = document.createElement('div')

root.id = 'root'
document.body.appendChild(root)

const AppWrapper = () => {
  return (
    <>
      <GlobalStyle />

      <App />
    </>
  )
}

// Now we can render our application into it
render(<AppWrapper />, document.getElementById('root'))
