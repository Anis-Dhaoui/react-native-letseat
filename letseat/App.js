// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import Main from './components/Main';
import { StoreProvider } from './Context/Store';

export default function App() {
  return (
    <StoreProvider>
    <NavigationContainer style={styles.container}>
      <Main />
      <StatusBar style="auto" />
    </NavigationContainer>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  },
});
