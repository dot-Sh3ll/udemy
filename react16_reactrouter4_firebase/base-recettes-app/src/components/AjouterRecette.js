import React, { Component } from 'react'

export default class AjouterRecette extends Component {
  state = {
    nom: '',
    image: '',
    ingredients: '',
    instructions: ''
  }

  handleChange = event => {
    const { name, value } = event.target
    // pour mettre une variable dans un objet, on utilise les crochets
    // ici on a besoin que la méthode soit dynamique, donc on change la clef par celle de la target
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()
    const recette = { ...this.state }
    this.props.ajouterRecette(recette)
    // reset
    Object.keys(recette).forEach(item => {
      recette[item] = ''
    })
    this.setState({ ...recette })
  }

  render () {
    return (
      <div className='card'>
        <form
          className='admin-form ajouter-recette'
          onSubmit={this.handleSubmit}
        >
          <input
            type='text'
            name='nom'
            placeholder='nom de la recette'
            value={this.state.nom}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='image'
            placeholder={"nom de l'image"}
            value={this.state.image}
            onChange={this.handleChange}
          />
          <textarea
            name='ingredients'
            rows='3'
            placeholder='liste des ingrédients'
            value={this.state.ingredients}
            onChange={this.handleChange}
          />
          <textarea
            name='instructions'
            rows='15'
            placeholder='liste des instructions'
            value={this.state.instructions}
            onChange={this.handleChange}
          />
          <button type='submit'>+ Ajouter une recette</button>
        </form>
      </div>
    )
  }
}
