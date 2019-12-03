import React, { Component } from 'react'
import './App.css'

import Formulaire from './components/Formulaire'
import Message from './components/Message'

// Firebase
import base from './base'

class App extends Component {
  state = {
    messages: {},
    // on récupère le pseudo dans l'extension react de chrome en cherchant
    pseudo: this.props.match.params.pseudo
  }

  componentDidMount () {
    base.syncState('/', {
      context: this,
      state: 'messages'
    })
  }

  addMessage = message => {
    const messages = { ...this.state.messages }
    messages[`message-${Date.now()}`] = message
    this.setState({ messages })
  }
  render () {
    // on fait un objet message
    const messages = Object
      // qui a pour clef celle des messages
      .keys(this.state.messages)
      .map(key => (
        <Message
          key={key}
          pseudo={this.state.messages[key].pseudo}
          message={this.state.messages[key].message}
        />
      ))

    return (
      <div className='box'>
        <div>
          <div className='messages'>
            <div className='message'>{messages}</div>
          </div>
        </div>
        <Formulaire
          length={150}
          pseudo={this.state.pseudo}
          addMessage={this.addMessage}
        />
      </div>
    )
  }
}

export default App
