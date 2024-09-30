import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      let speed = prevState.count
      console.log(speed)

      if (speed === 200) {
        console.log(speed, 'Max-Speed')
      } else if (speed < 200) {
        console.log(speed, 'Increasing')
        speed += 10
      }

      return {count: speed}
    })
  }

  onDecrement = () => {
    this.setState(prevState => {
      let speed = prevState.count

      if (speed === 0) {
        console.log(0, 'Min-Speed')
      } else {
        console.log(speed, 'Decreasing')
        speed -= 10
      }

      return {count: speed}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="speedo-container">
        <h1 className="speedo-title">SPEEDOMETER</h1>
        <img
          className="speedo-img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          alt="Speedometer"
        />
        <h1 className="speedo-title speedo-indicator">Speed is {count}mph</h1>
        <p className="speedo-para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="speedo-btn acc-btn"
            onClick={this.onIncrement}
            type="button"
          >
            Accelerate
          </button>
          <button
            className="speedo-btn apply-btn"
            onClick={this.onDecrement}
            type="button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
