import React from 'react'

const Membre = ({ nom, age, children }) => {
  return (
    <>
      <h2>
        {nom.toUpperCase()} : {age}
      </h2>
      {children ? <p>{children}</p> : <></>}
    </>
  )
}

export default Membre
