// Write your code here
// import {Component} from 'react'
// class Speedometer extends Component {
//   state = {count: 0}
//   onIncreament = () => {
//     this.setState(prevState => {
//       return {count: prevState.count + 10}
//     })
//   }
//   onDecreament = () => {
//     this.setState(prevState => {
//       return {count: prevState.count - 10}
//     })
//   }
//   render() {
//     const {count} = this.state
//     return (
//       <div className="container">
//         <h1 className="heading">SPEEDOMETER</h1>
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
//           alt="speedometer"
//         />
//         <h1 className="mainpera">Speed is {count}mph</h1>
//         <p className="minpera">Min Limit is 0mph, Max Limit is 200mph</p>
//         <div>
//           <button className="high" onClick={this.onIncreament}>
//             Accelerate
//           </button>
//           <button className="low" onClick={this.onDecreament}>
//             Apply Brake
//           </button>
//         </div>
//       </div>
//     )
//   }
// }

// export default Speedometer

import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrease = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="heading"> SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="img"
        />
        <h1 className="paragraph">Speed is {speed}mph</h1>
        <p className="sub">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            type="button"
            className="button-inc"
            onClick={this.onIncrease}
          >
            Accelerate
          </button>
          <button type="button" className="button-break" onClick={this.onBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
