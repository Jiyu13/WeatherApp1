import React from "react";
import {SafeAreaView, StyleSheet, Text, FlatList, StatusBar, ImageBackground, Platform} from "react-native";
// import {SafeAreaView} from 'react-native-safe-area-context';
import {Feather} from '@expo/vector-icons';
import ListItem from "../components/ListItem";

const UpcomingWeather = ({ weatherData }) => {
    // create renderItem function
    const renderItem = ({item}) => {
        return (
            <ListItem
                condition={item.weather[0].main}
                dt_txt={item.dt_txt}
                min={item.main.temp_min}
                max={item.main.temp_max}
            />
        )
    }

    // destructure 'styles' variable
    const {container, image} = styles
    return (
      <SafeAreaView style={container}>
          {/* ====================Add ImageBackground component =======================*/}
          <ImageBackground
              source={require("../../assets/upcoming-background.jpg")}
              style={image}
          >
              {/*<Text>{weatherData["weather"][0].description} </Text>*/}
              <FlatList
                  data={weatherData}
                  renderItem={renderItem}  // pass in renderItem function -> renderItem={(item) => <Item dt_txt={item.dt_txt}/>}
                  keyExtractor={(item) => item.dt_txt}
              />
          </ImageBackground>

      </SafeAreaView>
    )
};

// { Platform.OS}{StatusBar.currentHeight} -> Android, height 24
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === "android" ? 0 : StatusBar.currentHeight || 0,
        backgroundColor: "royalblue"
    },
    image: {
        flex: 1,
    }
})
export default UpcomingWeather;
