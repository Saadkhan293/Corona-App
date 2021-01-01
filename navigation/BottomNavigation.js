import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {countriesNavigator,WorldStatisticsNavigator,FavouriteCountriesNavigator} from './StackNavigation'
const Tab= createBottomTabNavigator();
 function BottomNavigation(){
     return(
         <Tab.Navigator barStyle={{ marginLeft:10, marginRight:10 }} tabBarOptions={
            {
                style: {
                    height: 60,
                    width: 350,
                    flexDirection: 'row',
                    alignSelf: 'center',
                    justifyContent:"center",
                    elevation: 2,
                    border:"black"
                    

                },
                activeTintColor: 'green',
            }}>
             <Tab.Screen name="Countries" component={countriesNavigator} />
             <Tab.Screen name="WorldStatistics" component={WorldStatisticsNavigator} />
             <Tab.Screen name="Favourite Countries" component={FavouriteCountriesNavigator} />
         </Tab.Navigator>
     )
 }
 export default BottomNavigation;