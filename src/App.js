import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      discount: '10'
    }
  }

  datashandler = () => {
   
    this.setState({discount:'20'})
  }

  render() {
    return (
      <div>
        <p>{this.state.discount}</p>
        <button onClick={this.datashandler}>ac</button>
      </div>
    )
  }
}

export default App
