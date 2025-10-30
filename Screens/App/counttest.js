import React, { useState } from "react"
import { Text ,View,StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native";

const Counttest = () => {

    const [count, setcount] = useState(0);
    function incrementCount() {
        setcount(count + 1);
    }
    function decrementCount() {
        setcount(count - 1);
    }
    return (
        <View style={styles.twobox}>
            <View style={styles.decrebox}>
<TouchableOpacity onPress={decrementCount}>
                <Text style={{ color: "white" ,fontSize:14,alignSelf:"center",justifyContent:"center"}}>-</Text></TouchableOpacity>
                </View>
            <Text style={{ alignSelf: 'center', fontSize:14}} >{count} Days</Text>
            <View style={styles.increbox}>
            <TouchableOpacity onPress={incrementCount}>
                <Text style={{ color: "white",fontSize:14,alignSelf:"center"}}>+</Text></TouchableOpacity>
                </View>
        </View>
    );
};
export default Counttest;

const styles = StyleSheet.create({
    twobox:{
        width:157,
        height:58,
        flexDirection:"row",
        backgroundColor:"green",
        justifyContent:"space-between"
    },
    increbox:{
        backgroundColor: "red", width: 30, height: 30, alignSelf: "center" ,justifyContent:"center"
    },
    decrebox:{
        backgroundColor: "red", width: 30, height: 30, alignSelf: "center" ,justifyContent:"center"
    }
})




/*import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Text, View, StyleSheet, Image } from 'react-native';
import Headers from '../../Components/Headers';
import Constants, { SpacingSize, moderateScale, scale } from '../../Components/Constants';
import Righticon from 'react-native-vector-icons/AntDesign'

const Item = ({ name, image }) => {
  navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.item}>

        <View onTouchEnd={() => { name == 'Borrow Book' ? navigation.navigate('BorrowScreen', { name }) : navigation.navigate('ReserveScreen', { name }) }} style={styles.box}>


          <View style={styles.boxx}>

            <View><Image source={image} style={{ width: scale(25), height: scale(25) }} />
            </View>
          </View>
          <Text style={{ color: '#303030', paddingLeft: SpacingSize.paddingLarge, fontSize: moderateScale(SpacingSize.fontsizeMedium), fontFamily: Constants.PrimaryFont }}>{name}</Text>
        </View>

        <View style={styles.rightarrbox}>
          <Righticon name='right' style={{ color: "#0F4C75", fontFamily: Constants.PrimaryFont,fontSize: moderateScale(SpacingSize.fontsizeLarge) }} />
        </View>


      </View>
    </View>
  );
}

export default function Library() {

  const countries = [
    {
      id: '1',
      name: 'Borrow Book',
      Image: require('../../Assets/images/occupation1.png')
    },
    {
      id: '2',
      name: 'Reserve Book',
      Image: require('../../Assets/images/reserved1.png')


    },

  ]
  const renderItem = ({ item }) => (
    <Item name={item.name} image={item.Image} />
  );
  return (
    <>

      <Headers name={"Library"} clr={"#0F4C75"} background={"white"} clricon={"#0F4C75"} fontw={700} />

      
        <FlatList
          data={countries}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}

        />
      
    </>

  );
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "white",
    alignSelf: "center"

  },
  item: {
    backgroundColor: '#ffffff',
    width: scale(328),
    height: scale(62),
    //padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    
    
    borderWidth: 0.25

  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "5%",
    //backgroundColor:"red"


  },
  boxx: {
    backgroundColor: "#B9E3BF",
    width: scale(42),
    height: scale(42),
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"

  },
  rightarrbox: {
    width: scale(16),
    height: scale(16), 
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor:"red",
    marginRight:SpacingSize.marginExtraLarge
  },
});*/