import React from 'react'

import bellSound from './../../assets/sounds/definite.mp3'

export default class Timer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isTimerRunning: false,
      seconds: this.props.pauseLength * 60, // pauseLength is in minutes
      time: {}
    }

    this.timer = 0
    this.countDown = this.countDown.bind(this)
    this.playSound = this.playSound.bind(this)
    this.restartTimer = this.restartTimer.bind(this)
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60))

    let divisor_for_minutes = secs % (60 * 60)
    let minutes = Math.floor(divisor_for_minutes / 60)

    let divisor_for_seconds = divisor_for_minutes % 60
    let seconds = Math.ceil(divisor_for_seconds)

    let obj = {
      'h': hours,
      'm': minutes,
      's': seconds
    }

    return obj
  }

  componentDidMount() {
    let restPauseLength = this.props.pauseLength * 60 // pauseLength is in minutes

    this.setState({
      time: this.secondsToTime(this.state.seconds)
    })
  }

  startTimer() {
    if (!this.state.isTimerRunning) {
      this.timer = setInterval(this.countDown, 1000)
    }

    // if (this.timer === 0) {
      // this.timer = setInterval(this.countDown, 1000)
    // }
  }

  stopTimer() {
    clearInterval(this.timer)

    this.setState({
      isTimerRunning: false
    })
  }

  restartTimer() {
    clearInterval(this.timer)

    let newTime = this.secondsToTime(this.props.pauseLength * 60)
    let newSeconds = this.state.seconds - 1

    this.setState({
      isTimerRunning: false,
      seconds: this.props.pauseLength * 60,
      time: newTime
    })
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1

    this.setState({
      isTimerRunning: true,
      seconds: seconds,
      time: this.secondsToTime(seconds)
    })

    // Check if we're at zero.
    if (seconds === 0) {
      this.playSound()

      clearInterval(this.timer)
    }
  }

  playSound() {
    const soundFile = new Audio(bellSound);

    soundFile.volume = 1 // 0.5 is half volume

    soundFile.play()

    setTimeout(() => {
      alert('Time for Grease the Groove!')
    }, 500)
  }

  render() {
    return(
      <div>
        <p>{this.state.time.h}h {this.state.time.m}m {this.state.time.s}s</p>

        <button onClick={this.startTimer}>Start</button>

        <button onClick={this.restartTimer}>Reset</button>

        <button onClick={this.stopTimer}>Stop</button>
      </div>
    )
  }
}
