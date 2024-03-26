import React from "react";
import {SafeAreaView, StyleSheet, Text, FlatList, StatusBar, ImageBackground, Platform} from "react-native";
// import {SafeAreaView} from 'react-native-safe-area-context';
import {Feather} from '@expo/vector-icons';
import ListItem from "../components/ListItem";


const DATA = [
    {
        dt_txt: "2022-08-30 16:00:00",
        main: {
            temp_min: 8.55,
            temp_max: 7.55,
        },
        weather: [
            {
            main: "Rain",
            }
        ]
    },
    {
        dt_txt: "2022-08-30 17:00:00",
        main: {
            temp_min: 8.55,
            temp_max: 7.55,
        },
        weather: [
            {
                main: "Clouds",
            }
        ]},
    {
        dt_txt: "2022-08-30 18:00:00",
        main: {
            temp_min: 8.55,
            temp_max: 7.55,
        },
        weather: [
            {
                main: "Clear",
            }
        ]
    }
]

const UpcomingWeather = () => {
    // create renderItem function
    const renderItem = ({item}) => (
        <ListItem
            condition={item.weather[0].main}
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    )

    // destructure 'styles' variable
    const {container, image} = styles
    return (
      <SafeAreaView style={container}>

          {/* ====================Add ImageBackground component =======================*/}
          <ImageBackground
              source={require("../../assets/upcoming-background.jpg")}
              style={image}
          >
              <Text>Upcoming Weather </Text>
              <FlatList
                  data={DATA}
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
