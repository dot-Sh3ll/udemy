import React from 'react'

const AdminForm = ({ id: key, majRecette, recettes, supprimerRecette }) => {
  const recette = recettes[key]

  const handleChange = (event, key) => {
    const {name, value} = event.target
    const recette = recettes[key]
    recette[name] = value
    majRecette(key, recette)
  }
  return (
    <div className='card'>
      <form className='admin-form'>
        <input
          onChange={e => handleChange(e, key)}
          type='text'
          value={recette.nom}
          name='nom'
          placeholder='Nom de la recette'
        />
        <input
          onChange={e => handleChange(e, key)}
          type='text'
          value={recette.image}
          name='image'
          placeholder={"Adresse de l'image"}
        />
        <textarea
          onChange={e => handleChange(e, key)}
          value={recette.ingredients}
          name='ingredients'
          rows='3'
          placeholder='liste des ingredients'
        />
        <textarea
          onChange={e => handleChange(e, key)}
          value={recette.instructions}
          name='instructions'
          rows='3'
          placeholder='liste des instructions'
        />
      </form>
      <button onClick={() => supprimerRecette(key)}>Supprimer</button>
    </div>
  )
}

export default AdminForm
