import React from 'react'
import { getRainbow } from '../../computing/getRainbow'
import { setBackground } from '../../computing/setBackground'

class RainbowContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    setBackground('rainbowContainer')
  }

  render() {
    return (
      <div className={'rainbow-container container'} id={'rainbowContainer'}>
        <h1>Rainbow container</h1>
        {console.log(getRainbow())}
      </div>
    )
  }
}

export default RainbowContainer
