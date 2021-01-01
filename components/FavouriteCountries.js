import React from 'react';
import { StyleSheet, Text, View,Button,navigation } from 'react-native';
function FavouriteCountries({navigation}){
    return(
        <View>
            <Text>
                Hello
            
            </Text>
            <Button onPress={()=>navigation.navigate('WorldStatistics')} title="Press me" />
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
export default FavouriteCountries;

