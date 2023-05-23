import React from "react";
import { SafeAreaView, 
         Text, 
         ImageBackground, 
         StyleSheet, 
         StatusBar,
         View
      } from "react-native";
import { Feather } from '@expo/vector-icons'
import { registerAsset } from "react-native-web/dist/cjs/modules/AssetRegistry";

const City = () => {
 
  const {container, imageLayout, cityName, stateName, cityText, populationWrapper, populationText, riseSetWrapper, riseSetText} = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground source={require('../../assets/images/cityBackground.jpg')} style={imageLayout}>
        <Text style={[cityName, cityText]} >Baton Rouge</Text>
        <Text style={[stateName, cityText]} >Louisiana</Text>
        <Text style={[stateName, cityText]}>United States</Text>
        <View style={[populationWrapper, cityText]}>
          <Feather name="user" size={50} color="teal" />
          <Text style={populationText} >222,000</Text>
        </View>
        <View style={[riseSetWrapper, cityText]}>
          <Feather name="sunrise" size={50} color="teal" />
          <Text style={riseSetText}>6:15:30am</Text>
          <Feather name='sunset' size={50} color='teal' />
          <Text style={riseSetText}>17:28:15pm</Text>
        </View>
       
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: StatusBar.currentHeight || 0
  }, 
  imageLayout:{
    flex:1
  },
  cityName:{
    fontSize: 40,
  },
  stateName:{
    fontSize: 30,
  },
  cityText:{
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  populationWrapper:{
    flexDirection: 'row',
    alignItems: 'center', 
    marginTop: 30
  },
  populationText:{
    fontSize: 25,
    marginLeft: 30,
    color: 'white',
    fontWeight: 'bold'
  },
  riseSetWrapper:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText:{
    fontSize: 20,
    marginLeft: 7.5,
    marginRight: 7.5,
    color: 'white',
    fontWeight: 'bold'
  }



})

export default City;