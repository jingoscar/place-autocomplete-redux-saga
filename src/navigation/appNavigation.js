import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import searchPage from '../views/Places/searchPage';
import Map from '../views/Map/Map';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <NavigationContainer>
        {
            <Stack.Navigator>
            <Stack.Screen name= 'Google Place Search Autocomplete' component={searchPage}/>
            <Stack.Screen name= 'Map' component={Map}/>
            </Stack.Navigator>
        }
        </NavigationContainer>
    );
};

export default AppStack;