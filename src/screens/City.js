import React from "react";
import {ImageBackground, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native";
import {Feather} from "@expo/vector-icons";
import IconText from "../components/IconText";
import moment from "moment";

const City = ({cityData}) => {
    const {name, country, population, sunrise, sunset} = cityData
    // destructure styles
    const {
        container, imageLayout, cityName, cityText, countryName,
        populationWrapper, populationText,
        riseSetWrapper, riseSetText, rowLayout
    } = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require("../../assets/city-background.jpg")}
                style={imageLayout}
            >
                <Text style={[cityName, cityText]}>{name}</Text>
                <Text style={[countryName, cityText]}>{country}</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText
                        iconName={'user'}
                        iconColor={"red"}
                        bodyText={`Population: ${population}`}
                        bodyTextStyles={populationText}
                    />
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText
                        iconName={"sunrise"}
                        iconColor={"white"}
                        bodyText={moment(sunrise).format("h:mm:ss a")}
                        bodyTextStyles={riseSetText}
                    />
                    <IconText
                        iconName={"sunset"}
                        iconColor={"white"}
                        bodyText={moment(sunset).format("h:mm:ss a")}
                        bodyTextStyles={riseSetText}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
        marginTop: Platform.OS === "android" ? 0 : StatusBar.currentHeight || 0,
    },
    imageLayout: {
        flex: 1,
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    // move duplicate code here to make the code cleaner
    // leave the unique styles
    cityText: {
        justifyContent: "center",
        alignSelf: "center",
        color: "white",
        fontWeight: "bold"
    },
    populationWrapper: {
        // flexDirection: "row",
        // alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: "red",
        // fontWeight: "bold"
    },
    riseSetWrapper: {
        // flexDirection: "row",
        // alignItems: "center",
        justifyContent: "space-around",
        marginTop: 30,
    },
    riseSetText: {
        fontSize: 20,
        color: "white",
        // fontWeight: "bold"
    },
    rowLayout: {
        flexDirection: "row",
        alignItems: "center"
    }
})
export default City;
