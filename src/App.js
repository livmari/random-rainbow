import React from 'react'
import './App.css'
import { RainbowButton, RainbowCode, RainbowSquare } from './components'
import {
  generateColorValue,
  generateDegree,
  updateBackground,
  updateTextColor,
} from './util'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstColor: { red: 0, green: 0, blue: 0, rgb: 'rgb(0, 0, 0)' },
      secondColor: { red: 0, green: 0, blue: 0, rgb: 'rgb(0, 0, 0)' },
      darkestColor: 'rgb(0, 0, 0)',
      degree: '0deg',
      gradient: 'linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)',
    }

    this.setColors = this.setColors.bind(this)
    this.setDarkestColor = this.setDarkestColor.bind(this)
    this.updateUi = this.updateUi.bind(this)
  }

  async setColors() {
    let firstRed = generateColorValue(),
      firstGreen = generateColorValue(),
      firstBlue = generateColorValue(),
      firstRgb = `rgb(${firstRed}, ${firstGreen}, ${firstBlue})`,
      secondRed = generateColorValue(),
      secondGreen = generateColorValue(),
      secondBlue = generateColorValue(),
      secondRgb = `rgb(${secondRed}, ${secondGreen}, ${secondBlue})`

    do {
      secondRed = generateColorValue()
      secondGreen = generateColorValue()
      secondBlue = generateColorValue()
      secondRgb = `rgb(${secondRed}, ${secondGreen}, ${secondBlue})`
    } while (firstRgb === secondRgb)

    await this.setState(prevState => ({
      firstColor: {
        ...prevState.firstColor,
        red: firstRed,
        green: firstGreen,
        blue: firstBlue,
        rgb: firstRgb,
      },
      secondColor: {
        ...prevState.secondColor,
        red: secondRed,
        green: secondGreen,
        blue: secondBlue,
        rgb: secondRgb,
      },
    }))
  }

  setDarkestColor() {
    let firstSum =
      this.state.firstColor.red +
      this.state.firstColor.green +
      this.state.firstColor.blue

    let secondSum =
      this.state.secondColor.red +
      this.state.secondColor.green +
      this.state.secondColor.blue

    if (firstSum > secondSum)
      this.setState({ darkestColor: this.state.secondColor.rgb })
    else this.setState({ darkestColor: this.state.firstColor.rgb })
  }

  async updateUi() {
    await this.setColors()

    await this.setState({ degree: generateDegree() })

    await this.setDarkestColor()

    await this.setState({
      gradient: `linear-gradient(${this.state.degree}, ${this.state.firstColor.rgb} 0%, ${this.state.secondColor.rgb} 100%)`,
    })

    await updateBackground('rainbowSquare', this.state.gradient)
    await updateTextColor('rainbowBtn', this.state.darkestColor)
  }

  async componentDidMount() {
    await this.updateUi()
  }

  render() {
    return (
      <div className='app bg-white'>
        <div className={'container h-screen mx-auto align-middle p-6 sm:p-10 '}>
          <RainbowSquare id={'rainbowSquare'} handleClick={this.updateUi} />
          <RainbowButton id={'rainbowBtn'} handleClick={this.updateUi} />

          <RainbowCode
            darkestColor={this.state.darkestColor}
            gradient={this.state.gradient}
          />
        </div>
      </div>
    )
  }
}

export default App
