import React, {useState} from "react";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";

import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Tabs from "./src/components/Tabs";
import {ActivityIndicator, View, StyleSheet} from "react-native";

const Tab = createBottomTabNavigator()

const App = () => {
    const [loading, setLoading] = useState(true)
    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size={'large'} color={'blue'}/>
            </View>
        )
    }
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1
    }
})
export default App;
