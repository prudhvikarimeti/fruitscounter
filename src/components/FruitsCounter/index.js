import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {countmango: 0, countbanana: 0}

  onMangoIncrement = () => {
    this.setState(prevState => ({countmango: prevState.countmango + 1}))
  }

  onBananaIncrement = () => {
    this.setState(prevState => ({countbanana: prevState.countbanana + 1}))
  }

  render() {
    const {countbanana, countmango} = this.state

    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="heading">
            Bob ate <span className="span">{countmango}</span> mangoes
            <span className="span">{countbanana}</span> bananas
          </h1>
          <div className="image-container">
            <div className="d1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="img1"
                alt="mango"
              />
              <button
                className="b1"
                onClick={this.onMangoIncrement}
                type="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="d1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="img1"
                alt="banana"
              />
              <button
                className="b1"
                onClick={this.onBananaIncrement}
                type="button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
