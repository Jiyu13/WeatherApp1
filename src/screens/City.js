import React from "react";
import {ImageBackground, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native";
import {Feather} from "@expo/vector-icons";
import IconText from "../components/IconText";

const City = () => {
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
                <Text style={[cityName, cityText]}>London</Text>
                <Text style={[countryName, cityText]}>UK</Text>
                <View style={[populationWrapper, rowLayout]}>
                    {/*<Feather name={"user"} size={50} color={"red"} />*/}
                    {/*<Text style={styles.populationText}>8000</Text>*/}
                    <IconText
                        iconName={'user'}
                        iconColor={"red"}
                        bodyText={"8000"}
                        bodyTextStyles={populationText}
                    />
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    {/*<Feather name={"sunrise"} size={50} color={"white"} />*/}
                    {/*<Text style={styles.riseSetText}>10:46:58am</Text>*/}
                    <IconText
                        iconName={"sunrise"}
                        iconColor={"white"}
                        bodyText={"10:46:58am"}
                        bodyTextStyles={riseSetText}
                    />
                    {/*<Feather name={"sunset"} size={50} color={"white"} />*/}
                    {/*<Text style={styles.riseSetText}>17:28:15pm</Text>*/}
                    <IconText
                        iconName={"sunset"}
                        iconColor={"white"}
                        bodyText={"17:28:15pm"}
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
