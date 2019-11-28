import React, { Component } from 'react'
import './App.css'
import Membre from './components/Membre'
import Button from './components/Button'

const famille = {
  membre1: {
    nom: 'François',
    age: 62
  },
  membre2: {
    nom: 'Mireille',
    age: 63
  },
  membre3: {
    nom: 'Anne-Sophie',
    age: 33
  },
  membre4: {
    nom: 'Paul',
    age: 29
  }
}

class App extends Component {
  state = {
    famille
  }

  handleClick = num => {
    const famille = { ...this.state.famille }
    famille.membre1.age += num
    this.setState({ famille })
  }

  handleChange = event => {
    const famille = { ...this.state.famille }
    const nom = event.target.value
    famille.membre1.nom = nom
    this.setState({ famille })
  }

  render () {
    const { titre } = this.props
    const { famille } = this.state
    return (
      <div className='App'>
        <h1>{titre}</h1>
        <input
          value={famille.membre1.nom}
          onChange={this.handleChange}
          type='text'
        />
        <Membre nom={famille.membre1.nom} age={famille.membre1.age} />
        <Membre nom={famille.membre2.nom} age={famille.membre2.age} />
        <Membre nom={famille.membre3.nom} age={famille.membre3.age} />
        <Membre nom={famille.membre4.nom} age={famille.membre4.age}>
          <strong>J'aime beaucoup Kris</strong>
        </Membre>
        <Button vieillir={() => this.handleClick(2)} />
      </div>
    )
  }
}

export default App
