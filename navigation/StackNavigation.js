import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import {Countries,CovidStats} from '../components/Countries'
import WorldStatistics from '../components/WorldStatistics';
import FavouriteCountries from '../components/FavouriteCountries';
const Stack = createStackNavigator();

function countriesNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Countries" component={Countries} />
            <Stack.Screen name="Covid Stats" component={CovidStats} />

        </Stack.Navigator>
    )
}
function WorldStatisticsNavigator() {
    return (<Stack.Navigator>
        <Stack.Screen name="WorldStatistics" component={WorldStatistics} />

    </Stack.Navigator>)
}
function FavouriteCountriesNavigator() {
    return (
        <Stack.Navigator>


            <Stack.Screen name="FavouriteCountries" component={FavouriteCountries} />

        </Stack.Navigator>
    )
}
export { countriesNavigator, WorldStatisticsNavigator, FavouriteCountriesNavigator };