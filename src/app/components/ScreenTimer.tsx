import * as React from 'react'

// import bellSound from './../../assets/sounds/definite.mp3'

import { Button, ButtonWrapper } from './Button'
import { SpanBig, SpanSmall, Text } from './Typography'
import { Icon } from './Icon'
import { ScreenWrapper } from './Wrappers'

// Import electron dialog module
const dialog = require('electron').remote.dialog

interface ScreenTimerPropsInterface {
  pauseLength: number;
}

interface ScreenTimerStateInterface {
  isTimerRunning: boolean;
  seconds: number;
  time: {
    h: number;
    m: number;
    s: number;
  };
}

export default class ScreenTimer extends React.Component<ScreenTimerPropsInterface, ScreenTimerStateInterface> {
  constructor(props) {
    super(props)

    this.state = {
      isTimerRunning: false,
      seconds: this.props.pauseLength * 60, // pauseLength is in minutes
      time: {
        h: 0,
        m: 0,
        s: 0
      }
    }

    this.timer = 0
    this.countDown = this.countDown.bind(this)
    this.playSound = this.playSound.bind(this)
    this.handleRestartTimer = this.handleRestartTimer.bind(this)
    this.handleStartTimer = this.handleStartTimer.bind(this)
    this.handleStopTimer = this.handleStopTimer.bind(this)
  }

  componentDidMount() {
    // const restPauseLength = this.props.pauseLength * 60 // pauseLength is in minutes

    this.setState((prevState) => ({
      time: this.secondsToTime(prevState.seconds)
    }))
  }

  // Define class members
  timer: number

  secondsToTime(secs: number) {
    const hours = Math.floor(secs / (60 * 60))

    const divisorForMinutes = secs % (60 * 60)
    const minutes = Math.floor(divisorForMinutes / 60)

    const divisorForSeconds = divisorForMinutes % 60
    const seconds = Math.ceil(divisorForSeconds)

    const obj = {
      h: hours,
      m: minutes,
      s: seconds
    }

    return obj
  }

  handleStartTimer() {
    if (!this.state.isTimerRunning && this.state.seconds !== 0) {
      // If timer is not at 0 and is not running, start countdown
      this.timer = setInterval(this.countDown, 1000)
    } else {
      // If we are on 0, restart timer
      this.handleRestartTimer()

      // Start new countdown
      this.timer = setInterval(this.countDown, 1000)
    }
  }

  handleStopTimer() {
    clearInterval(this.timer)

    this.setState({
      isTimerRunning: false
    })
  }

  handleRestartTimer() {
    clearInterval(this.timer)

    const newTime = this.secondsToTime(this.props.pauseLength * 60)
    // const newSeconds = this.state.seconds - 1

    this.setState({
      isTimerRunning: false,
      seconds: this.props.pauseLength * 60,
      time: newTime
    })
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    const seconds = this.state.seconds - 1

    this.setState({
      isTimerRunning: true,
      seconds: seconds,
      time: this.secondsToTime(seconds)
    })

    // Check if we're at 0.
    if (seconds === 0) {
      this.playSound()

      clearInterval(this.timer)

      this.setState({
        isTimerRunning: false
      })
    }
  }

  playSound() {
    const soundFile = new Audio(require('./../../assets/sounds/definite.mp3'))

    soundFile.volume = 1 // 0.5 is half volume

    soundFile.play()

    // Wait 0.25s so the sound plays first
    setTimeout(() => {
      // Use electron native dialog box (notification box)
      dialog.showMessageBox({
        buttons: ['OK'],
        message: 'Time for Grease the Groove!',
        type: 'info'
      })
    }, 400)
  }

  render() {
    // const props = this.props

    return (
      <ScreenWrapper static>
        {/* <Nav toggleTimer={props.toggleTimer} hasCrossTimer /> */}

        {/* <Heading small>Timer</Heading> */}

        <Text>
          <SpanBig>{this.state.time.h}</SpanBig>
          <SpanSmall>hr</SpanSmall>
          {' : '}
          <SpanBig>{this.state.time.m}</SpanBig>
          <SpanSmall>min</SpanSmall>
          {' : '}
          <SpanBig>{this.state.time.s}</SpanBig>

          <SpanSmall>sec</SpanSmall>
        </Text>

        <ButtonWrapper>
          <Button first onClick={this.handleRestartTimer}><Icon reset /></Button>

          <Button middle onClick={this.handleStartTimer}><Icon play /></Button>

          <Button last onClick={this.handleStopTimer}><Icon stop /></Button>
        </ButtonWrapper>
      </ScreenWrapper>
    )
  }
}
