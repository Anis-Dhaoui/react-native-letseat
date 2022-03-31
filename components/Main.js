import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { DISHES } from '../data/dishes';
import Menu from './Menu';
import DishDetail from './DishDetail';

export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      selecteDish: null,
      showSeleteDish: false,
    }
  }
  selecteDish(dishId){
    this.setState({...this.state, selecteDish: dishId, showSeleteDish: !this.state.showSeleteDish})
  }
  render() {
    return (
      <>
        <Menu dishes={this.state.dishes} handlePress={(dishId) => this.selecteDish(dishId)} />
        <DishDetail isModalOpen={this.state.showSeleteDish} closeModal={() => this.setState({showSeleteDish: false})} dish={this.state.dishes.filter((item) => item.id === this.state.selecteDish )[0]} />
      </>
    )
  }
}