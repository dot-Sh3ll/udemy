import React, { Component } from 'react'
// import de la redirection
import { Redirect } from 'react-router-dom'

export default class Connexion extends Component {
  state = {
    pseudo: '',
    goToChat: false
  }

  handleChange = event => {
    const pseudo = event.target.value
    this.setState({ pseudo })
  }

  handleSubmit = event => {
    // annule l'évenement prévu par défault au submit pour faire ce qui est codé ci dessous
    event.preventDefault()
    this.setState({ goToChat: true })
  }

  render () {
    if (this.state.goToChat) {
      // la page de redirection si on submit, prenant en le pseudo taper comme variable
      // push permet de garder la page précédente en historique
      return <Redirect psuh to={`/pseudo/${this.state.pseudo}`} />
    }
    return (
      <div className='connexionBox'>
        <form className='connexion' onSubmit={this.handleSubmit}>
          <input
            value={this.state.pseudo}
            onChange={this.handleChange}
            type='text'
            placeholder='pseudo'
            required
          />
          <button type='submit'>Go</button>
        </form>
      </div>
    )
  }
}
