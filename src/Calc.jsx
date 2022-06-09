import React, {Component} from 'react'

export default class Calc extends Component {
  // (((1)))
  //app state for the controlled form
  state = {
      num1: 0,
      num2: 0,
      sum: 0
  }
  // ((2))
  //event handler methods
  calculate = e => {
      e.preventDefault()
      this.setState(prevState => {
          return { sum: prevState.num1 + prevState.num2}
      })
          
  }

  setNum = e => {
      const changedInput = {
          [e.target.name]: Number(e.target.value)
      }
      console.log(changedInput)
      this.setState(changedInput)
  }

  render(){
    return (
        <div>
        <h1>Add with React!</h1>

        <form onSubmit={this.calculate}>
            <input type="number" 
                name="num1"
                value={this.state.num1}
                onChange={this.setNum}
            />
            <span>+</span>
            <input type="number" 
                name="num2"
                value={this.state.num2}
                onChange={this.setNum}
            />
            <button>=</button>
            <h3>{this.state.sum}</h3>
        </form>
    </div>   )
  }
}