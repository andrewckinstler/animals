import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AnimalCard } from '../components/animalCard'

export const AnimalCardContainer = ({ animals }) => {
  const createCards = animals => {
    animals.map(animal => {
      return (<AnimalCard 
        animal={animal}
      />)
    })
  }

  return (<div><h1>hi</h1>
    {createCards(animals)}
  </div>)
}

export const mapStateToProps = ({ animals }) => ({
  animals
})


export default connect(mapStateToProps)(AnimalCardContainer)