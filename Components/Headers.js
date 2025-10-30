import { StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import Lefticon from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Constants, { SpacingSize, moderateScale, scale } from './Constants'

const Headers = ({name,background,clr,fontw,clricon}) => {
  const navigation=useNavigation()
  return (
    <View style={[styles.headbox,{backgroundColor:background}]}>
      <View style={styles.headtwobox}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <View style={styles.icon}>
          <Lefticon  name='left' style={[styles.leftbox, {color:clricon}]} />
        </View>
        </TouchableOpacity>
        <View style={styles.textbox}>
              <Text  style={[styles.textsbox,{color:clr,fontWeight:fontw}]}>{name}</Text>
        </View>
      </View>
    </View>
  )
}

export default Headers

const styles = StyleSheet.create({
  headbox: {
    width: scale(370),
    height: scale(50),
    //backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    
    elevation:0.25


  },
  headtwobox: {
    flexDirection: "row",
    alignItems: "center",

  },
  icon: {
    width:scale(16),
    height: scale(16),
   // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    marginRight:SpacingSize.marginSmall

  },
  textbox: {
    width:scale(330),
    height: scale(32),
    //backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center"

  },
  textsbox:{
    fontFamily:Constants.PrimaryFont,
    fontSize:moderateScale(SpacingSize.fontsizeMedium),
    color:"#0F4C75",


  },
  leftbox:{
    color: '#0F4C75',
    fontSize:moderateScale(SpacingSize.fontsizeMedium), 
  }
})