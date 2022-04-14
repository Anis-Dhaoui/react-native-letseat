import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { DISHES } from '../data/dishes';
import Home from './Home';
import Menu from './Menu';
import DishDetail from './DishDetail';
import Aboutus from './Aboutus';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { Icon, Image } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from './Logo';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    }
  }
  render() {
    const Stack = createNativeStackNavigator();
    const Drawer = createDrawerNavigator();
    const Root = () => {
      return (
        <Drawer.Navigator screenOptions={{ headerTitleAlign: 'center' }} initialRouteName='Home' drawerContent={(props) => <Logo {...props} />}>
          <Drawer.Screen name="Home" component={Home}
            options={{
              headerShown: true,
              headerStyle: { backgroundColor: '#00a2ff' },
              headerTintColor: '#000',
              headerTitleStyle: { fontWeight: 'bold' },
              drawerActiveTintColor: '#008cff',
              drawerIcon: (tintColor) => (
                <Icon name='home' color={tintColor.color} />
              )
            }}
          />
          <Drawer.Screen name="Menu"
            options={{
              headerShown: true,
              headerStyle: { backgroundColor: '#00a2ff' },
              headerTintColor: '#000',
              headerTitleStyle: { fontWeight: 'bold' },
              drawerIcon: (tintColor) => (
                <Icon name='menu' color={tintColor.color} />
              )
            }}
          >
            {props => <Menu {...props} dishes={this.state.dishes} />}
          </Drawer.Screen>

          <Drawer.Screen name="About" component={Aboutus}
            options={{
              headerShown: true,
              headerStyle: { backgroundColor: '#00a2ff' },
              headerTintColor: '#000',
              headerTitleStyle: { fontWeight: 'bold' },
              drawerIcon: (tintColor) => (
                <Icon name='info' color={tintColor.color} />
              )
            }}
          />
        </Drawer.Navigator>
      )
    }

    return (
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={DishDetail}
          options={({ route }) => ({
            title: route.params.dish.name,
            headerStyle: { backgroundColor: '#f0e9f3' },
            headerTintColor: '#000',
            headerTitleStyle: { fontWeight: 'bold' }
          })}
        />
      </Stack.Navigator>
    )
  }
}