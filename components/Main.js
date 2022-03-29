import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { DISHES } from '../data/dishes';
import Menu from './Menu';

export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES
    }
  }
  render() {
    return (
      <>
        <Menu dishes={this.state.dishes} />
      </>
    )
  }
}