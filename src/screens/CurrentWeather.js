import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';


const CurrentWeather = () => {

  const { wrapper, 
          container, 
          temp, 
          feels, 
          highLow,
          highLowWrapper, 
          bodyWrapper, 
          description, 
          message } = styles;

  return(
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black"/>
        <Text style={temp} >6</Text>
        <Text style={feels} >Feels Like 5</Text>
        <RowText messageOne={'High: 8'} 
                 messageTwo={'Low: 6'} 
                 containerStyles ={highLowWrapper} 
                 messageOneStyles={highLow} 
                 messageTwoStyles={highLow} />
      </View>
      <RowText messageOne={'Its sunny'} 
                 messageTwo={'Its perfect t-shirt weather'} 
                 containerStyles ={bodyWrapper} 
                 messageOneStyles={description} 
                 messageTwoStyles={message} />
    </SafeAreaView>
    
  )
}
const styles = StyleSheet.create({
  wrapper:{
    flex:1, 
    backgroundColor: "#A3C1AD"
   
  },  
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp:{
    color: 'black',
    fontSize: 48
  },
  feels:{
    fontSize: 30,
    color: 'black'
  }, 
  highLow:{
    color: 'black',
    fontSize: 20,
  },
  highLowWrapper:{
    flexDirection: 'row',
  }, 
  bodyWrapper:{
    justifyContent:"flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40

  },
  description:{
    fontSize: 40
  },
  message:{
    fontSize: 25
  }

})

export default CurrentWeather;