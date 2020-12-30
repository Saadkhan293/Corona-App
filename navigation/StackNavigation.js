import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import Countries from '../components/Countries'
import WorldStatistics from '../components/WorldStatistics'
import FavouriteCountries from '../components/FavouriteCountries'
const Stack=createStackNavigator();
function StackNavigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Countries" component={Countries} />
            <Stack.Screen name="Countries" component={WorldStatistics} />
            <Stack.Screen name="Countries" component={FavouriteCountries} />

        </Stack.Navigator>
    )
}
export default StackNavigation;