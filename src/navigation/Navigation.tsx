import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator();

// Export the type for use in other components
export type RootStackParamList = {
  HomeScreen: undefined;
  DetailScreen: undefined;
};

export const Navigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle:{
                backgroundColor: '#302742'
            }
        }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}
