import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import CheckBox from 'react-native-check-box'
import Headers from '../../Components/Headers';
import Constants, { SpacingSize, moderateScale, scale } from '../../Components/Constants';

const FeeinfoScreen = ({ navigation }) => {
  const [isSelected, setSelection] = useState({
    "FIELD TRIP": false,
    "Batch Photo": false,
    "Sports Fee": false,
    "Teachers day": false,
    "Contribution medical exp.": false,
    "TEXT BOOK EM": false,
    "S BATCH T-SHIRTS": false,
    "Mumbai Education tour": false,
    "VR Videos": false,
  });

  const handleSelection = () => {
    setSelection(!isSelected)
  }

  return (
    <View style={styles.container}>
      <Headers name={'Fee Info (Others)'} clr={"#0F4C75"} fontw={700} />



      <View style={styles.checkboxContainer}>
        <CheckBox
          style={{ flex: 1, padding:SpacingSize.paddingMedium,  }}
          onClick={() => setSelection({ ...isSelected, "FIELD TRIP": !isSelected['FIELD TRIP'] })}
          isChecked={isSelected['FIELD TRIP']}
          rightText={"FIELD TRIP"}
          rightTextStyle={{ fontSize:moderateScale(SpacingSize.fontsizeLarge), color:"#C4C4C4" }}
        />
        <Text style={styles.testbox}>(100.00)</Text>
      </View>








      <View style={styles.checkboxContainer}>
        <CheckBox
          style={{ flex: 1, padding: 10 }}
          onClick={() => setSelection({ ...isSelected, "Batch Photo": !isSelected['Batch Photo'] })}
          isChecked={isSelected['Batch Photo']}
          rightText={"Batch Photo"}
          rightTextStyle={{ fontSize:moderateScale(SpacingSize.fontsizeLarge), color:"#C4C4C4" }}
        />
        <Text style={styles.testbox}>(100.00)</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          style={{ flex: 1, padding: 10 }}
          onClick={() => setSelection({ ...isSelected, "Sports Fee": !isSelected['Sports Fee'] })}
          isChecked={isSelected['Sports Fee']}
          rightText={"Sports Fee"}
          rightTextStyle={{ fontSize:moderateScale(SpacingSize.fontsizeLarge), color:"#C4C4C4" }}
        />
        <Text style={styles.testbox}>(100.00)</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          style={{ flex: 1, padding: 10 }}
          onClick={() => setSelection({ ...isSelected, "Teachers day": !isSelected['Teachers day'] })}
          isChecked={isSelected['Teachers day']}
          rightText={"Teachers day"}
          rightTextStyle={{ fontSize:moderateScale(SpacingSize.fontsizeLarge), color:"#303030" }}
        />
        <Text style={styles.testbox2}>(100.00)</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          style={{ flex: 1, padding: 10 }}
          onClick={() => setSelection({ ...isSelected, "Contribution medical exp.": !isSelected['Contribution medical exp.'] })}
          isChecked={isSelected['Contribution medical exp.']}
          rightText={"Contribution medical exp."}
          rightTextStyle={{ fontSize:moderateScale(SpacingSize.fontsizeLarge), color:"#303030" }}
        />
        <Text style={styles.testbox2}>(100.00)</Text>
      </View>






      <View style={styles.paybox}>
        <Text onTouchEnd={() => navigation.navigate('FeepaymentScreen')} style={{ color: "#FFFFFF", fontFamily:Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.marginLarge) }}>PAY NOW</Text>
        {/* <Text onTouchEnd={() => navigation.goBack()} style={{ color: "#FFFFFF", fontFamily: "Poppins-Regular", fontSize: 16 }}>PAY NOW</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: "white"
  },
  checkboxContainer: {
    flexDirection: 'row',
    width:scale(328),
    height:scale(32),
    //backgroundColor:"red",
    marginTop:SpacingSize.marginLarge,
    justifyContent: "center",
    alignItems: "center"

  },
  paybox: {
    width: scale(328),
    height:scale(62),
    backgroundColor: "#0F4C75",
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 8,
    marginTop:SpacingSize.marginExtraLarge
  },
  testbox:{
    fontSize:moderateScale(SpacingSize.fontsizeLarge),
    fontFamily:Constants.PrimaryFont,
    color:"#C4C4C4" 
  },
  testbox2:{
    fontSize:moderateScale(SpacingSize.fontsizeLarge),
    fontFamily:Constants.PrimaryFont,
    color:"#303030" 
  }
});

export default FeeinfoScreen;