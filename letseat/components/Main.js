import React, { useEffect } from 'react';
import Home from './Home';
import Menu from './Menu';
import DishDetail from './DishDetail';
import Aboutus from './Aboutus';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import Logo from './Logo';
import { useStore } from '../Context/Store';
import { fetchComments, fetchDishes, fetchStaff } from '../Context/Actions';

export default function Main () {
  const [state, dispatch] = useStore();

  useEffect(() => {
    fetchDishes(dispatch);
    fetchStaff(dispatch);
    fetchComments(dispatch)
  }, [])
  
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
        <Drawer.Screen name="Menu" component={Menu}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: '#00a2ff' },
            headerTintColor: '#000',
            headerTitleStyle: { fontWeight: 'bold' },
            drawerIcon: (tintColor) => (
              <Icon name='menu' color={tintColor.color} />
            )
          }}
        />
        {/* {props => <Menu {...props} dishes={this.state.dishes} />}
          </Drawer.Screen> */}

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