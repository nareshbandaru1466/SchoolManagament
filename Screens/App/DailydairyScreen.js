import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Headers from '../../Components/Headers'
import Lefticon from 'react-native-vector-icons/AntDesign'
import Righticon from 'react-native-vector-icons/AntDesign'
import Downicon from 'react-native-vector-icons/AntDesign'
import Constants, { SpacingSize, moderateScale, scale } from '../../Components/Constants'
// import { Telugudata } from '../../Utility/StaticData'
// import { useNavigation } from '@react-navigation/native';


const DailydairyScreen = ({ navigation }) => {
  // navigation = useNavigation()
  return (
    <ScrollView>
      <View style={styles.container}>
        <Headers name={"Daily Dairy"} clr={"#0F4C75"} background={"white"} clricon={"#0F4C75"} fontw={700} />

        <View onTouchEnd={() => navigation.navigate('DailychoosemonthScreen')} style={styles.choosebox}>
        <View style={styles.threeboxs}>
          <View style={styles.leftarrbox}>
            <Lefticon name='left' style={{ color: "#C4C4C4", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge) }} />
          </View>
          <View style={styles.textsbox}>
            <Text onTouchEnd={() => navigation.navigate('DailychoosemonthScreen')} style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge) }}>12 Dec, 2023</Text>
          </View>
          <View style={styles.rightarrbox}>
            <Righticon name='right' style={{ color: "#C4C4C4", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge) }} />
          </View>
          </View>
        </View>

        <View style={styles.Telugubox}>
          <Text style={{ color: "#FFFFFF", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge), marginLeft: SpacingSize.marginTiny }}>Telugu</Text>
          <View style={styles.downbox}>
            <Text style={{ color: "#FFFFFF", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), }}>Add comment  </Text>
            <Downicon name='down' style={{ color: "#FFFFFF", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), alignSelf: "center", marginRight: SpacingSize.marginTiny }} />
          </View>
        </View>
        <View style={styles.flatlistbox}><Text style={{ color: '#0F4C75', fontFamily: Constants.PrimaryFont,fontSize: moderateScale(SpacingSize.fontsizeSmall) }}>Read and write chapter 5  essay Q & A</Text>
        </View>

        <View style={styles.Telugubox}>
          <Text style={{ color: "#FFFFFF", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge), marginLeft: SpacingSize.marginTiny }}>Hindi</Text>
          <View style={styles.downbox}>
            <Text style={{ color: "#FFFFFF", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), }}>Add comment  </Text>
            <Downicon name='down' style={{ color: "#FFFFFF", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), alignSelf: "center", marginRight: SpacingSize.marginTiny }} />
          </View>
        </View>
        <View style={styles.flatlistbox}><Text style={{ color: '#0F4C75', fontFamily: Constants.PrimaryFont,fontSize: moderateScale(SpacingSize.fontsizeSmall) }}>Read and write chapter 5  essay Q & A</Text>
        </View>

        <View style={styles.Telugubox}>
          <Text style={{ color: "#FFFFFF", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge), marginLeft: SpacingSize.marginTiny }}>English</Text>
          <View style={styles.downbox}>
            <Text style={{ color: "#FFFFFF", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), }}>Add comment  </Text>
            <Downicon name='down' style={{ color: "#FFFFFF", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), alignSelf: "center", marginRight: SpacingSize.marginTiny }} />
          </View>
        </View>
        <View style={styles.flatlistbox}><Text style={{ color: '#0F4C75',fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall) }}>Read and write chapter 5  essay Q & A</Text>
        </View>


        <View style={styles.Telugubox}>
          <Text style={{ color: "#FFFFFF", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge), marginLeft: SpacingSize.marginTiny }}>Physics</Text>
          <View style={styles.downbox}>
            <Text style={{ color: "#FFFFFF", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), }}>Add comment  </Text>
            <Downicon name='down' style={{ color: "#FFFFFF", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), alignSelf: "center", marginRight: SpacingSize.marginTiny }} />
          </View>
        </View>
        <View style={styles.flatlistbox2}>
          
          <View style={styles.typebox}>
          <View style={styles.wtihtwo}>
            <Text style={{ color: '#6E6E6E', marginLeft:SpacingSize.marginExtraLarge , alignSelf: "center",
            fontSize: moderateScale(SpacingSize.fontsizeSmall,) ,fontFamily: Constants.PrimaryFont, }}>Type your concern here !</Text>

            <Image style={styles.img} source={require('../../Assets/images/iconamoon_send-light.png')} />

          </View>
        </View>
          
          <Text style={{ color: '#0F4C75', fontFamily: Constants.PrimaryFont,fontSize: moderateScale(SpacingSize.fontsizeSmall)  }}>Read and write chapter 5  essay Q & A</Text>
        </View>

        <View style={styles.Telugubox}>
          <Text style={{ color: "#FFFFFF", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge), marginLeft: SpacingSize.marginTiny }}>Mathematics</Text>
          <View style={styles.downbox}>
            <Text style={{ color: "#FFFFFF", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), }}>Add comment  </Text>
            <Downicon name='down' style={{ color: "#FFFFFF", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), alignSelf: "center", marginRight: SpacingSize.marginTiny }} />
          </View>
        </View>
        <View style={styles.flatlistbox1}><Text style={{ color: '#0F4C75',fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall) }}>Read and write chapter 5  essay Q & A</Text>
        </View>


        <View style={styles.Telugubox1}>
          <Text style={{ color: "#FFFFFF", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge), marginLeft: SpacingSize.marginTiny }}>Class Teacher</Text>
          <View style={styles.downbox}>
            <Text style={{ color: "#FFFFFF", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), }}>Add comment  </Text>
            <Downicon name='down' style={{ color: "#FFFFFF", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), alignSelf: "center", marginRight: SpacingSize.marginTiny }} />
          </View>
        </View>
        <View style={styles.flatlistbox}><Text style={{ color: '#0F4C75',fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall) }}>Your child is not wearing shoes daily.</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default DailydairyScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    alignItems: "center"
  },
  choosebox: {
    width: scale(328),
    height: scale(60),
    flexDirection: "row",
    borderWidth: 0.25,
    borderColor: "#000000",
    borderRadius: 48,
    marginBottom:SpacingSize.margingMedium,
    alignItems: "center",
    justifyContent: "space-evenly",

  },
  threeboxs: {
    flexDirection: "row",
    //backgroundColor: "red",
    width:scale(300),
    height:scale(32),
    alignSelf:"center",
    alignItems:"center",
    
    justifyContent:"center"
  },
  Telugubox: {
    width: scale(328),
    height: scale(32),
    backgroundColor: "#6D5FDF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 0.10

  },
  flatlistbox: {
    backgroundColor: '#FFFFFF',
    width: scale(328),
    padding: SpacingSize.paddingMedium,
    height: scale(60),
    borderWidth: 0.10,
    marginBottom: SpacingSize.margingMedium
  },
  flatlistbox2: {
    backgroundColor: '#FFFFFF',
    width: scale(328),
    padding: SpacingSize.paddingMedium,
    height: scale(100),
    borderWidth: 0.10,
    marginBottom: SpacingSize.margingMedium
  },
  typebox: {
    width: scale(320),
    height: scale(44),
    backgroundColor:"white",
    justifyContent: "center",
    alignSelf:"center",
    borderRadius: 8,
    borderWidth: 0.25,

  },
  flatlistbox1: {

    backgroundColor: '#F5ADB7',
    width: scale(327),
    padding:SpacingSize.paddingMedium,
    height: scale(60),
    marginBottom:SpacingSize.margingMedium

  },
  Telugubox1: {
    width: scale(328),
    height: scale(32),
    backgroundColor: "#EB4C92",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },
  img: {
    width: scale(40),
    height:  scale(40),
    marginRight:SpacingSize.margingMedium ,
    //backgroundColor: "red"
  
  },
  wtihtwo: {
    flexDirection: "row",
    justifyContent: "space-between"

  },
  leftarrbox: {
    width: scale(22),
    height: scale(22),
    alignItems: "center",
    justifyContent:"center"
  },
  rightarrbox: {
    width: scale(22),
    height: scale(22),alignItems: "center",
    justifyContent:"center"

  },
  textsbox: {
    width: scale(200),
    height: scale(32),
    alignItems: "center",
   justifyContent:"center",
   
  },
  downbox: {
    flexDirection: "row",



  }

})