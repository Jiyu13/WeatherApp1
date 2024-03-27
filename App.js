import React, {useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import * as Location from 'expo-location'
import {WEATHER_API_KEY} from "@env"
import {ActivityIndicator, StyleSheet, View} from "react-native";

// import custom hook
import {useGetWeather} from "./src/hooks/useGetWeather";

const App = () => {
    const [loading, error, weather] = useGetWeather()
    if (weather && weather.list) {
       return (
           <NavigationContainer>
               <Tabs weather={weather}/>
           </NavigationContainer>
       )
    }
    // otherwise return the ActivityIndicator
    return (
        <View style={styles.container}>
            <ActivityIndicator size={'large'} color={'blue'}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1
    }
})
export default App;
