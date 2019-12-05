import React from 'react'

const Card = ({ details }) => {
  const ingredients = details.ingredients
    // pour chaque ingredients, je retire la virgule
    .split(',')
    // retourne un nouveau tableau qui a pour item un li avec une cle unique et son contenu
    .map(item => <li key={item}>{item}</li>)

  const instructions = details.instructions
    .split('\n')
    .map(item => <li key={item}>{item}</li>)

  // faire une image par défaut
  const requireImage = chemin => {
    try {
      return require(`../img/${chemin}`)
    } catch (err) {
      return require(`../img/default.jpeg`)
    }
  }

  return (
    <div>
      <div className='card'>
        <div className='image'>
          <img src={requireImage(details.image)} alt={details.nom} />
        </div>
        <h2>{details.nom}</h2>
        <div className='recette'>
          <ul className='liste-ingredients'>{ingredients}</ul>
          <ol className='instructions'>{instructions}</ol>
        </div>
      </div>
    </div>
  )
}

export default Card
