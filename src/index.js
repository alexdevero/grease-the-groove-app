import React from 'react'
import { render } from 'react-dom'
import styled, { injectGlobal } from 'styled-components'

import App from './app/App'

const hindBold = require('./assets/fonts/Hind-Bold.ttf')
const hindLight = require('./assets/fonts/Hind-Light.ttf')
const hindRegular = require('./assets/fonts/Hind-Regular.ttf')

injectGlobal`
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
		font-family: 'Hind', serif;
	}
`

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div')

root.id = 'root'
document.body.appendChild(root)

// Now we can render our application into it
render(<App />, document.getElementById('root'))
