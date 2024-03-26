import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Feather} from '@expo/vector-icons';
import RowText from "../components/RowText";
import {weatherType} from "../utilities/weatherType";


const CurrentWeather = () => {
    const {wrapper, container, temp, feels, highLowWrapper, highLow, bodyWrapper, description, message} = styles
    // add JSX to return some UI
    return (
        <SafeAreaView style={wrapper}>
            <View style={container}>
                <Feather name="sun" size={100} color="black" />
                <Text style={temp}>6</Text>
                <Text style={feels}>Feels like 5</Text>
                {/*<View style={styles.highLowWrapper}>*/}
                {/*    <Text style={styles.highLow}>High: 8</Text>*/}
                {/*    <Text style={styles.highLow}>Low: 6</Text>*/}
                {/*</View>*/}
                <RowText
                    messageOne={"High: 8"}
                    messageTwo={"Low: 6"}
                    containerStyles={highLowWrapper}
                    messageOneStyles={highLow}
                    messageTwoStyles={highLow}
                />
            </View>
            {/*<View style={styles.bodyWrapper}>*/}
            {/*    <Text style={styles.description}>Its sunny</Text>*/}
            {/*    <Text style={styles.message}>Its perfect t-shit weather</Text>*/}
            {/*</View>*/}
            <RowText
                messageOne={"Its sunny"}
                messageTwo={"Its perfect t-shit weather"}
                containerStyles={bodyWrapper}
                messageOneStyles={description}
                messageTwoStyles={message}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'pink',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    temp: {
        color: 'black',
        fontSize: 48,
    },
    feels: {
        color: 'black',
        fontSize: 30,
    },
    highLow: {
        color: 'black',
        fontSize: 20,
    },
    highLowWrapper: {
        flexDirection: 'row',
    },
    bodyWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 25,
        marginBottom: 40,
    },
    description: {
        fontSize: 48,
    },
    message: {
        fontSize: 30,
    },
});
export default CurrentWeather;
