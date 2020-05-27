import * as React from 'react';

// react navigation from @react-navigation
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Screens
import Home from './screens/Home';
import PostDetails from './screens/PostDetails';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'Details'} component={PostDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
