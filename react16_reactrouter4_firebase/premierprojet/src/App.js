import React, { Component, Fragment } from 'react'
import './App.css'
import Membre from './components/Membre'

class App extends Component {
  render () {
    return (
      <Fragment>
        <div className='App'>
          <p className='test'>voila</p>
          <h1>React app</h1>
          <Membre />
        </div>
        <h2>Mon second titre</h2>
      </Fragment>
    )
  }
}

export default App
