import React from 'react';
import axios from 'axios';

import { StyleSheet, Text, View, navigation, Button, ActivityIndicator, TouchableOpacity, Modal } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
function CovidStats({navigation,route}){
    const [stats,setStats]=useState(route.params.param1);
    return(
        <View>
            
        </View>

    )

}
function Countries({ navigation }) {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [covid, setCovid] = useState([]);
    const [modal, setModal] = useState(false);

    const covid_19 = () => {
        const options = {
            method: 'GET',
            url: 'https://covid-19-data.p.rapidapi.com/country',
            params: { name: 'italy' },
            headers: {
                'x-rapidapi-key': '6f7f2aeb4fmshbda174dffbebc0ap1bc89ajsn451171c737f8',
                'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

    }
    const allCountries = () => {

        const options = {
            method: 'GET',
            url: 'https://world-population.p.rapidapi.com/allcountriesname',
            headers: {
                'x-rapidapi-key': '6f7f2aeb4fmshbda174dffbebc0ap1bc89ajsn451171c737f8',
                'x-rapidapi-host': 'world-population.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setCountries(response.data.body.countries);
            setLoading(false);
        }).catch(function (error) {
            console.error(error);
        });
    }
    useEffect(() => {
        allCountries();
        covid_19();
    }, []);

    render = (loading) => {
        if (loading) {
            return (
                <View>
                    <ActivityIndicator color="green" />
                    <Text>DATA IS LOADING</Text>
                </View>
            )
        }
        if (!loading) {
            return (

                <FlatList style={{ width: '100%' }}
                    data={countries}

                    renderItem={({ item }) => {
                        return (
                            <View>
                                <TouchableOpacity onPress={()=>navigation.navigate('CovidStats',{param1:item})}>
                                    <Text style={styles.country}>{JSON.stringify(item).slice(1, -1)}</Text></TouchableOpacity></View>
                        )
                    }}
                    keyExtractor={(item) => item}
                />

            )
        }
    }
    return (
        <View style={{ flex: 1, margin: 30 }}>



            {this.render(loading)}


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
    contain: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 22
    },
 
});

export {Countries,CovidStats};