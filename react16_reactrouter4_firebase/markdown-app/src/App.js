import React, { Component } from 'react'
import './App.css'

import marked from 'marked'

import { sampleText } from './sampleText'

class App extends Component {
  state = {
    text: sampleText
  }

  componentDidMount () {
    const text = localStorage.getItem('text')
    if (text) {
      this.setState({ text })
    } else {
      this.setState({ text: sampleText })
    }
  }

  componentDidUpdate () {
    localStorage.setItem('text', this.state.text)
  }

  handleChange = event => {
    this.setState({ text: event.target.value })
  }

  renderText = text => {
    const __html = marked(text, { sanitize: true })
    return { __html }
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
            <textarea
              value={this.state.text}
              onChange={this.handleChange}
              className='form-control'
              rows='35'
            />
          </div>
          <div className='col-sm-6'>
            <div dangerouslySetInnerHTML={this.renderText(this.state.text)} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
