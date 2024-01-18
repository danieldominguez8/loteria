import React from 'react';
import MainMenuScreen from './Screens/MainMenuScreen';
import GameScreen from './Screens/GameScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main Menu" component={MainMenuScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#42a1c3',
              height: 5
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: 'white',
              fontSize: 20,
              fontFamily: 'AvenirNextCondensed-Heavy'
            }
          }}
        />
        <Stack.Screen name="Game" component={GameScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#42a1c3',
              height: 5
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: 'white',
              fontSize: 20,
              fontFamily: 'AvenirNextCondensed-Heavy'
            }
          }} />
      </Stack.Navigator>
    </NavigationContainer>


  );
};




export default App;
