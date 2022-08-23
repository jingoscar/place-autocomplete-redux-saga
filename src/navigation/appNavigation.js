import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from '../views/Places/places';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <NavigationContainer>
        {
            <Stack.Navigator>
            <Stack.Screen name= 'Google Place Search Autocomplete' component={List}/>
            </Stack.Navigator>
        }
        </NavigationContainer>
    );
};

export default AppStack;