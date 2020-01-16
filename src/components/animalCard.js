import React from 'react'

export const AnimalCard = ({ img, name, species, description }) => {
  return(
    <div>
      <img src={img} />
      <h2>{name}</h2>
      <p>{species}</p>
      <p>{description}</p>
    </div>
  )
}

