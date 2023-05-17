import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, FlatList, StatusBar, ImageBackground } from 'react-native';
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

const Item = (props) => {
  const { dt_txt, min, max, condition } = props;
  return(
    <View style={styles.item}>
      <Feather name={'sun'} size={50} color={'white'}/>
      <Text style={styles.date} >{dt_txt}</Text>
      <Text style={styles.temp} >{min}</Text>
      <Text style={styles.temp} >{max}</Text>
    </View>
  )
}

const UpcomingWeather = () => {
  const renderItem = ({item}) => (
    <Item condition={item.weather[0].main} dt_txt ={item.dt_txt}  
      min = {item.main.temp_min} max = {item.main.temp_max}
    />
  )

  return(

    <SafeAreaView style={styles.container} >
      <Text >Upcoming Weather</Text>
      <ImageBackground source={require('../../assets/images/beautiful-nature-g008bf5021_1920.jpg')} style= {styles.image}>
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
    color: 'green'
  },
  item:{
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "teal"
  },
   temp:{
    color: 'white',
    fontSize: 15
   }, 
   date:{
    color: 'white',
    fontSize: 8,
   },
   image:{
    flex: 1
   }

})
export default UpcomingWeather;