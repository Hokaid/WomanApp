import React from 'react';
import Login from './components/screens/Login';
import SignUp from './components/screens/SignUp';
import ForgotPassw from './components/screens/ForgotPassw';
import Home from './components/screens/Home';
import DestinationHistory from './components/screens/DestinationHistory';
import Settings from './components/screens/Settings';
import Review from './components/screens/Review';
import IncidentRegister from './components/screens/IncidentRegister';
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
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Review" component={Review} />
        <Stack.Screen name="IncidentRegister" component={IncidentRegister} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;