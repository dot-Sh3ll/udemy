import React, { Component, createRef } from 'react'
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

  // importation de createRef() pour la faire vivre dans l'application (permet la manipulation du dom)
  messagesRef = createRef()

  componentDidMount () {
    // synchronise l'app avec firebase pour récupérer les derniers messages
    base.syncState('/', {
      context: this,
      state: 'messages'
    })
  }

  componentDidUpdate () {
    // dans le chat, permet de scroller automatiquement en bas des derniers messages
    const ref = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }

  addMessage = message => {
    const messages = { ...this.state.messages }
    messages[`message-${Date.now()}`] = message
    // supprime les messages quand le chat dépasse 10 messages
    Object
      // on boucle sur messages en récupérant les keys
      .keys(messages)
      // on met de coté les 10 derniers messages pour ne pas les toucher
      .slice(0, -10)
      // pour chaque messages qui restent, on leur donne la valeur null
      .forEach(key => (messages[key] = null))
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
          <div className='messages' ref={this.messagesRef}>
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
