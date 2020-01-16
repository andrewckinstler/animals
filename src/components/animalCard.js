import React from 'react'

export const AnimalCard = ({ animal }) => {
  console.log(animal)
  const { img, name, species, description } = animal
  return(
    <div>
      <img src={img} />
      <h2>{name}</h2>
      <p>{species}</p>
      <p>{description}</p>
    </div>
  )
}

