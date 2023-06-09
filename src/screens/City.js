import React from "react";
import { SafeAreaView, 
         Text, 
         ImageBackground, 
         StyleSheet, 
         StatusBar,
         View
      } from "react-native";
import IconText from "../components/IconText";

const City = () => {
 
  const {container, 
         imageLayout, 
         cityName, 
         stateName, 
         cityText, 
         populationWrapper, 
         populationText, 
         riseSetWrapper, 
         riseSetText, 
         rowLayout
        } = styles
  return (
    <ImageBackground source={require('../../assets/images/cityBackground.jpg')} style={imageLayout}>
    <SafeAreaView style={container}>
     
        <Text style={[cityName, cityText]} >Baton Rouge</Text>
        <Text style={[stateName, cityText]} >Louisiana</Text>
        <Text style={[stateName, cityText]}>United States</Text>
        <View style={[populationWrapper, cityText, rowLayout]}>
          <IconText iconName={'user'} 
                    iconColor={'teal'} 
                    bodyText={'222,000'} 
                    bodyTextStyles={populationText} 
                    />
        </View>
        <View style={[riseSetWrapper, cityText, rowLayout]}>
          <IconText 
            iconName={'sunrise'} 
            iconColor={'teal'}
            bodyText={'6:15:30am'}
            bodyTextStyles={riseSetText}
            />
          <IconText 
            iconName={'sunset'} 
            iconColor={'teal'}
            bodyText={'17:28:15pm'}
            bodyTextStyles={riseSetText}
            />
        </View>
    </SafeAreaView>
    </ImageBackground>
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
    marginTop: 30
  },
  populationText:{
    fontSize: 25,
    marginLeft: 7.5,
    color: 'white',
  
  },
  riseSetWrapper:{
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText:{
    fontSize: 10,
    marginLeft: 7.5,
    marginRight: 7.5,
    color: 'white',
  },
  rowLayout:{
    flexDirection: 'row',
    alignItems: 'center'
  }



})

export default City;