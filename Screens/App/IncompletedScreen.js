import React from 'react';
import { FlatList, Text, View, StyleSheet, Image } from 'react-native';
import ProfileIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { spread } from 'axios';
import Constants, { SpacingSize, moderateScale, scale } from '../../Components/Constants';

const Item = ({ name, subject, marks }) => {

  navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <View style={styles.box}>

          <ProfileIcon name='profile' style={{ color: 'black', alignSelf: "center", marginRight: SpacingSize.marginTiny,   }} />
          <Text style={{ color: "#303030", fontFamily: Constants.SecondaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge) }}>{name}</Text>
        </View>
        <Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeMedium),    marginBottom:SpacingSize.marginExtraLarge}}>Subject: {subject}</Text>
        <Text style={{ color: 'red', fontFamily: Constants.PrimaryFont,fontSize: moderateScale(SpacingSize.fontsizeMedium),}}>Last date of submission : 31 dec </Text>
        <Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall),   marginBottom:SpacingSize.marginTiny , marginTop:SpacingSize.marginExtraLarge}}>Marks: {marks}</Text>

      </View>



    </View>
  );
}

export default function Library() {

  const countries = [
    {
      id: '1',
      name: 'Plantation of seeds',
      subject: 'Maths',
      marks: 10
    },
    {
      id: '2',
      name: 'Plantation of seeds',
      subject: 'Maths',
      marks: 10


    },

  ]
  const renderItem = ({ item }) => (<Item name={item.name} subject={item.subject} marks={item.marks} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={countries}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}

      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: SpacingSize.margingMedium,
    flex: 1,
    alignItems: "center"
  },
  item: {
    backgroundColor: '#A3FFFF',
    borderRadius: 4,
   // height: scale(140),
    width: scale(328),
    shadowRadius: 10,
    elevation: 3,
    padding:SpacingSize.paddingLarge,

    borderBlockColor:"red"
  },
  box: {
    flexDirection: "row",
    //backgroundColor:"red",
    width: scale(200),
    height: scale(30),
    alignItems: "center",
    //marginBottom:SpacingSize.marginSmall,



  },
});
















