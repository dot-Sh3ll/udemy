import React from 'react'

const Membre = ({ nom, age, children, cacherNom, handleChange }) => {
  return (
    <>
      <h2
        style={{
          backgroundColor: age > 40 ? 'blue ' : 'green',
          color: 'white'
        }}
      >
        {nom.toUpperCase()} : {age}
      </h2>
      <input
          value={nom}
          onChange={handleChange}
          type='text'
        />
      <button onClick={cacherNom}>X</button>
      {children ? <p>{children}</p> : <></>}
    </>
  )
}

export default Membre
