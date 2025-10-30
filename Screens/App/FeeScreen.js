import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Headers from '../../Components/Headers';
import { scale,moderateScale, verticalScale } from '../../Components/Constants';
import Constants,{SpacingSize} from '../../Components/Constants';

const FeeScreen = () => {
  navigation = useNavigation()
  return (
    <View style={styles.container}>

       <Headers name={'Fee Info'} clr={"#080808"} fontw={700}/>

      <View style={styles.firstbox}>

        <View style={styles.fbox}>
          <Text style={{ color: "#FFFFFF", fontFamily:Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeLarge), }}>Fee Type</Text>
        </View>

        <View style={styles.fbox}>
          <Text style={{ color: "#FFFFFF",fontFamily:Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeLarge) }}>Paid</Text>
        </View>
        <View style={styles.fbox}>
          <Text style={{ color: "#FFFFFF", fontFamily:Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeLarge)}}>Due</Text>
        </View>
        <View style={styles.fbox}>
          <Text style={{ color: "#FFFFFF", fontFamily:Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeLarge), marginRight:SpacingSize.marginTiny }}>Pay now</Text>
        </View>

      </View>

      <View style={styles.firstbox1}>

        <View style={styles.tbox}>
          <Text style={{ color: "#0F4C75", fontFamily:Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeSmall) }}>Tution Fee</Text>
        </View>

        <View style={styles.tbox}>
          <Text style={{ color: "#0F4C75", fontFamily:Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeSmall) }}>25000</Text>
        </View>

        <View style={styles.tbox}>
          <Text style={{ color: "#0F4C75", fontFamily:Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeSmall) }}>4000</Text>
        </View>
        <View style={styles.tbox}>
          <View style={styles.pbox}>
            <Text onTouchEnd={() => navigation.navigate('FeesecondScreen')}  style={{ color: "#FFFFFF", fontFamily:Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeSmall) }}>PAY</Text>
          </View>
        </View>


      </View>
      <View style={styles.firstbox2}>

        <View style={styles.tbox}>
          <Text style={{ color: "#0F4C75", fontFamily:Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeSmall) }}>Transport Fee</Text>
        </View>

        <View style={styles.tbox}>
          <Text style={{ color: "#0F4C75", fontFamily:Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeSmall), }}>25000</Text>
        </View>

        <View style={styles.tbox}>
          <Text style={{ color: "#0F4C75", fontFamily:Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeSmall), }}>4000</Text>
        </View>
        <View style={styles.tbox}>
          <View style={styles.pbox}>
            <Text onTouchEnd={() => navigation.navigate('FeesecondScreen')}   style={{ color: "#FFFFFF", fontFamily:Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeSmall), }}>PAY</Text>
          </View>
        </View>


      </View>
      <View style={styles.firstbox3}>

        <View style={styles.tbox}>
        
          <Text style={{ color: "#0F4C75", fontFamily:Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeSmall) ,fontWeight:"bold"}}>TOTAL</Text>
        </View>

        <View style={styles.tbox}>
          <Text style={{ color: "#0F4C75", fontFamily:Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeSmall),fontWeight:"bold" }}>50000</Text>
        </View>

        <View style={styles.tbox}>
          <Text style={{ color: "#0F4C75", fontFamily:Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeSmall),fontWeight:"bold" }}>8000</Text>
        </View>
        <View style={styles.tbox}>
          
        </View>


      </View>
      <View style={styles.firstbox4}>

        <View style={styles.tbox}>
          <Text style={{ color: "#0F4C75", fontFamily:Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeSmall) }}>Other Fee</Text>
        </View>

        
        <View style={styles.tbox}>
          <View style={styles.pbox1}>
            <Text onTouchEnd={() => navigation.navigate('FeeinfoScreen')}  
            style={{ color: "#FFFFFF", fontFamily:Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeSmall), }}>PAY</Text>
          </View>
        </View>


      </View>


    </View>
  )
}

export default FeeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
    alignItems:"center"
  },
  firstbox: {
    width:scale(328),
    height: scale(48),
    backgroundColor: "#36C142",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",

  },
  firstbox1: {
    width:scale(328),
    height: scale(48),
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",

  },
  firstbox2: {
    width:scale(328),
    height: scale(48),
    backgroundColor: "#ECECEC",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",

  },
  firstbox3: {
    width:scale(328),
    height: scale(48),
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",

  },
  firstbox4: {
    width:scale(328),
    height: scale(48),
    backgroundColor: "#ECECEC ",
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems: "center",

  },
  tbox: {
    width: scale(82),
    height: scale(48),
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "red"
  },
  fbox: {
    width: scale(82),
    height: scale(48),
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "red"
  },
  pbox: {
    width: scale(82),
    height: scale(26),
    backgroundColor: "#0F4C75",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  
  },
  pbox1: {
    width: scale(82),
    height: scale(26),
    backgroundColor: "#0F4C75",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginRight:SpacingSize.marginLarge
  }

})
