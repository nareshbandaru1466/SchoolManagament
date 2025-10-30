import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headers from '../../Components/Headers'
import { SpacingSize, scale , moderateScale} from '../../Components/Constants'
import Constants from '../../Components/Constants'

const AtScreen = () => {
  return (
    <View style={styles.container}>
      <Headers name={"Attendance"} clr={"#0F4C75"} background={"white"} clricon={"#0F4C75"} fontw={700} />


      <View onTouchEnd={() => navigation.navigate('AtchoosemonthScreen')}  style={styles.choosebox}>
                <Text style={{ color: "#C4C4C4",  fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeDoubleExtraLarge) }}>{'<'}</Text>
                <Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge)}}>Choose the month</Text>
                <Text style={{ color: "#C4C4C4",  fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeDoubleExtraLarge) }}>{'>'}</Text>
            </View>
      <View style={styles.Telugubox}>
                <Text style={{color:"#FFFFFF",fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge),marginLeft:SpacingSize.marginTiny}}>Total Absent</Text>
                <Text style={{color:"#FFFFFF",fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall),marginRight:SpacingSize.marginTiny}}>Add comment  V</Text>
            </View>
            <View style={styles.flatlistbox}><Text style={{color: '#0F4C75', fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall)}}>1 December 2023, Friday</Text>
      </View>
      <View style={styles.Telugubox2}>
                <Text style={{color:"#FFFFFF",fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge),marginLeft:SpacingSize.marginTiny}}>Total Present</Text>
                <Text style={{color:"#FFFFFF",fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall),marginRight:SpacingSize.marginTiny}}> Add comment  V</Text>
            </View>
            <View style={styles.flatlistbox}><Text style={{color: '#0F4C75', fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall)}}>2 December 2023, Friday</Text></View>
            <View style={styles.flatlistbox}><Text style={{color: '#0F4C75', fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall)}}>4 December 2023, Friday</Text></View>
            <View style={styles.flatlistbox}><Text style={{color: '#0F4C75', fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall)}}>5 December 2023, Friday</Text></View>
            <View style={styles.flatlistbox}><Text style={{color: '#0F4C75', fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall)}}>6 December 2023, Friday</Text></View>
            <View style={styles.flatlistbox}><Text style={{color: '#0F4C75', fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall)}}>7 December 2023, Friday</Text></View>
            <View style={styles.flatlistbox}><Text style={{color: '#0F4C75', fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall)}}>8 December 2023, Friday</Text>
            
      </View>

      <View style={styles.Telugubox3}>
                <Text style={{color:"#FFFFFF",fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge),marginLeft:SpacingSize.marginTiny}}>Total Holidays</Text>
                <Text style={{color:"#FFFFFF",fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall),marginRight:SpacingSize.marginTiny}}>Add comment  V</Text>
            </View>
            <View style={styles.flatlistbox}><Text style={{color: '#0F4C75', fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall)}}>25 December 2023, Monday</Text>
      </View>
    </View>
  )
}

export default AtScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  width:"100%",
    backgroundColor: "#FAFAFA",
    alignItems:"center"
  },
  Telugubox:{
    width:scale (328),
    height:scale(32),
    backgroundColor:"#FF9B06",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    
},
Telugubox2:{
  width:scale (328),
  height:scale(32),
  backgroundColor:"#9283EF",
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center",
  
},
Telugubox3:{
  width:scale (328),
  height:scale(32),
  backgroundColor:"#36C142",
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center",
  
},
flatlistbox: {
  backgroundColor: '#FFFFFF',
  width:scale(328),
  padding:SpacingSize.paddingMedium ,
  height: scale(60),
  },

choosebox: {
  width: scale(328),
  height: scale(60),
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 0.25,
  borderColor: "#000000",
  borderRadius: 48,
  justifyContent: "space-evenly",
  marginTop: SpacingSize.margingMedium,
  marginBottom: SpacingSize.margingMedium


},
})