import React from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ForgotPassw from './components/ForgotPassw';
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassw" component={ForgotPassw} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DestinationHistory" component={DestinationHistory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;