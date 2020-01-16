import React, { Component } from 'react';
import './App.css';
import { getAnimals } from './apiCalls/apiCalls';
import { setAnimals, addLoading, hasErrored } from './actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AnimalCardContainer from './containers/animalCardContainer';

export class App extends Component {
  async componentDidMount() {
    const animals = await this.fetchAnimals()
  }

  async fetchAnimals() {
    try {
    const animals = await getAnimals()
    this.props.setAnimals(animals)
    this.props.addLoading(true)
    return animals;
    }
    catch{
      this.props.hasErrored('There was an issue getting this data')
    }
  }

  render() {
    const { isLoaded, error } = this.props;
    return (
      <div>
        <AnimalCardContainer />
      </div>
    )
  };
}

export const mapStateToProps = ({ isLoaded, error }) => ({
  isLoaded,
  error
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setAnimals,
    addLoading,
    hasErrored
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
