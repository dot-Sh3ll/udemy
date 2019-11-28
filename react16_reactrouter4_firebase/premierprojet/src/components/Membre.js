import React from 'react'

const Membre = ({ nom, age, children }) => {
  return (
    <>
      <h2 style={{ backgroundColor: age > 40 ? 'blue ' : 'green' , color: 'white' }}>
        {nom.toUpperCase()} : {age}
      </h2>
      {children ? <p>{children}</p> : <></>}
    </>
  )
}

export default Membre
