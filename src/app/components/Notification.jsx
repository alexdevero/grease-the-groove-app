import React from 'react'

const path = require('path')

const options = [
  {
    title: 'Notification with image',
    body: 'Short message plus a custom content image',
    // icon: path.join(__dirname, 'icon.png')
  }
]

function doNotify(evt) {
  console.log('clicked')
  new Notification(options[0].title, options[0])
}

const NotificationButton = text => (
  <button onClick={() => doNotify()}>Click</button>
)

export default NotificationButton
