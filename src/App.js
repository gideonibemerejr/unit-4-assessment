import React, { Component } from 'react'
import './App.css'
import CircleSelector from './components/CircleSelector'
import Circles from './components/Circles'
class App extends Component {
  state = {
    links: [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      },
      {
        id: 4
      }
    ],
    selected: 1
  }
  handleClick = id => {
    this.setState({ selected: id })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            handleClick={this.handleClick}
            links={this.state.links}
            selected={this.state.selected}
          />
          <Circles
            handleClick={this.handleClick}
            links={this.state.links}
            selected={this.state.selected}
          />
        </main>
      </div>
    )
  }
}

export default App
