import React, { Component } from 'react'

export default class Formulaire extends Component {
  state = {
    message: '',
    length: this.props.length
  }

  createMessage = () => {
    const { addMessage, pseudo, length } = this.props

    const message = {
      pseudo,
      message: this.state.message
    }
    addMessage(message)
    // reset pour purger la variable
    this.setState({ message: '', length })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.createMessage()
  }

  // afficher le nombre de caractère restant disponible
  handleChange = event => {
    const message = event.target.value
    const length = this.props.length - message.length
    this.setState({ message, length })
  }
  // pour confirmer la création du message avec la touche entrée
  handleKeyUp = event => {
    if (event.key === 'Enter') {
      this.createMessage()
    }
  }

  render () {
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.message}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          maxLength={this.props.length}
          required
        />
        <div className='info'>{this.state.length}</div>
        <button type='submit'>Envoyer</button>
      </form>
    )
  }
}
