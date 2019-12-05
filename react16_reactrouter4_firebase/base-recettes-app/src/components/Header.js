import React from 'react'

const Header = ({ pseudo }) => {
  // vérifie si la première lettre du pseudo[0] est une voyelle (majuscule ou minuscule)
  const formatPseudo = pseudo => /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`
  return (
    <header>
      <h1>La boite à recettes {formatPseudo(pseudo)}</h1>
    </header>
  )
}

export default Header
