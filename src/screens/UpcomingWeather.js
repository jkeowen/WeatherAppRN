import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, StatusBar, ImageBackground } from 'react-native';
import ListItem from '../components/ListItem';
import { Feather } from '@expo/vector-icons';

const DATA = [
  {
    dt_txt: "2023-02-18 12:00:00",
    main:{
    temp_max: 8.55,
    temp_min: 7.55
    },
    weather: [
    {
      main: 'Clear'
    }
   ]
    },
  {
    dt_txt: "2023-02-18 15:00:00",
    main:{
      temp_max: 10.55,
      temp_min: 5.55
  },
    weather: [
   {
     main: 'Clouds'
   }
  ]},
  {
    dt_txt: "2023-02-18 18:00:00",
    main:{
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
    {
     main: 'Rain'
    }
  ]}
];

const Empty = () =>(
  <View>
    <Text>Empty</Text>
  </View>
)



const UpcomingWeather = () => {
  const renderItem = ({item}) => (
    <ListItem condition={item.weather[0].main} dt_txt ={item.dt_txt}  
      min = {item.main.temp_min} max = {item.main.temp_max}
    />
  )

  const { container, image } = styles
  return(
    <SafeAreaView style={container} >
      <Text >Upcoming Weather</Text>
      <ImageBackground source={require('../../assets/images/beautiful-nature-g008bf5021_1920.jpg')} style= {image}>
      <FlatList 
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
        // ItemSeparatorComponent={()=> 
        // <View style={{backgroundColor:"#5f9ea0", height: 10}} />}
        ListEmptyComponent={Empty}
      />
      </ImageBackground>
    </SafeAreaView>
  )

}
const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'lavender',
    color: 'green',
  },

   image:{
    flex: 1
   }

})
export default UpcomingWeather;