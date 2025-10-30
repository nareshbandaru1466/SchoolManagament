import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { daysdata } from '../../Utility/StaticData'
import { ScrollView } from 'react-native-gesture-handler'
import Constants, { SpacingSize, } from '../../Components/Constants';
import { verticalScale, moderateScale, scale } from '../../Components/Constants';

const FridayScreen = ({ route }) => {
  return (
    <ScrollView>
    {/* <FlatList
      contentContainerStyle={styles.container}
      data={daysdata}
      renderItem={({ item, index }) => (

        <View style={styles.flatlistbox}>

          <View style={styles.twoboxs}>
            <View style={styles.timebox}>
              <Text style={{ color: '#76453B', }}>{item.time}</Text>
            </View>
            <View style={styles.subjectbox}>
              <Text style={{ color: '#76453B', }}>{item.subject}</Text>
            </View>
          </View>
        </View>



      )}

    /> */}
    <SubjectBox time={'8 30 '} subject={'Mathematics'} color={'#74C51E'}/>
    <SubjectBox time={'9 15 '} subject={'English'} color={'#FFCD37'}/>
    <SubjectBox time={'10 00 '} subject={'Telugu'} color={'#FF9B06'}/>
    <SubjectBox time={'10 45 '} subject={'Physics'} color={'#F57EC4'}/>
    <SubjectBox time={'11 30'} subject={'Biology'} color={'#157CB5'}/>
    <SubjectBox time={'12 15 '} subject={'Hindi'} color={'#2DC79C'}/>
    <SubjectBox time={'1 00'} subject={'Lunch'} color={'#CD3737'}/>
    <SubjectBox time={'1 45 '} subject={'Chemistry'} color={'#BE5BE1'}/>
    <SubjectBox time={'2 30 '} subject={'Computer'} color={'#157CB5'}/>
    <SubjectBox time={'3 15 '} subject={'Break'} color={'#CD3737'}/>
    </ScrollView>
  )
}

const SubjectBox = ({time, subject, color}) => {
return(
    <View style={{backgroundColor: color}}>

          <View style={styles.twoboxs}>
            <View style={styles.timebox}>
              <Text style={{ color: '#FFFFFF',fontFamily:Constants.PrimaryFont,fontSize:moderateScale(SpacingSize.fontsizeLarge) }}>{time}</Text>
            </View>
            <View style={[styles.subjectbox,{flexDirection: 'row'}]}>
              <Text style={{ color: '#FFFFFF',fontFamily:Constants.PrimaryFont,fontSize:moderateScale(SpacingSize.fontsizeLarge)}}>{subject}</Text>
              {subject == 'Telugu' ? 
              <Text style={{ textAlignVertical:'center',color: '#FFFFFF',fontFamily:Constants.PrimaryFont,fontSize:moderateScale(SpacingSize.fontsizeSmall) 
              ,backgroundColor: '#6D5FDF', alignSelf:"center",paddingHorizontal:SpacingSize.paddingLarge,marginLeft:SpacingSize.margingMedium,
               borderRadius: 5 }}>Now</Text>
            :
            null  
            }
            </View>
          </View>
        </View>
)
}

export default FridayScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  flatlistbox: {
    // backgroundColor: '#FFCD37',
    width: 360,
    height: 60,
    borderRadius: 5,
    alignSelf: "center",
    margin: 5,
    paddingHorizontal:SpacingSize.paddingLarge,
    paddingVertical:SpacingSize.paddingLarge,

  },
  timebox: {
    width: scale(50),
    height: scale(25),
    //backgroundColor: "red"
  },
  twoboxs: {
    width: scale(328),
    height:scale(55),
    flexDirection: 'row',
    //backgroundColor: "green",
    alignItems: "center",
    marginLeft:SpacingSize.margingMedium


  },
  subjectbox: {
    width: scale(150),
    height: scale(25),
    //backgroundColor: "pink"
  },


});