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
    famille,
    isShow: false
  }

  handleClick = num => {
    const famille = { ...this.state.famille }
    famille.membre1.age += num
    this.setState({ famille })
  }

  handleChange = (event, id) => {
    const famille = { ...this.state.famille }
    const nom = event.target.value
    famille[id].nom = nom
    this.setState({ famille })
  }

  handleShowDescription = () => {
    const isShow = !this.state.isShow
    this.setState({ isShow })
  }

  cacherNom = (id) => {
    const famille = { ...this.state.famille }
    famille[id].nom = 'X'
    this.setState({ famille })
  }

  render () {
    const { titre } = this.props
    const { famille, isShow } = this.state

    let description = null
    if (isShow) {
      description = <strong>J'aime beaucoup Kris</strong>
    }

    const liste = Object.keys(famille).map(membre => (
      <Membre
        key={membre}
        handleChange={(event) => this.handleChange(event, membre)}
        cacherNom={() => this.cacherNom(membre)}
        nom={famille[membre].nom}
        age={famille[membre].age}
      />
    ))
    console.log(liste)

    return (
      <div className='App'>
        <h1>{titre}</h1>
        {liste}
        {description}
        <button onClick={this.handleShowDescription}>
          {isShow ? 'Montrer' : 'Cacher'}
        </button>
        <Button vieillir={() => this.handleClick(2)} />
      </div>
    )
  }
}

export default App
