import React from 'react';
import { FlatList, Text, View, StyleSheet, Image } from 'react-native';
import { Booksdata } from '../../Utility/StaticData';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Headers from '../../Components/Headers';
import { scale ,moderateScale} from '../../Components/Constants';
import Constants,{SpacingSize} from '../../Components/Constants';



const Item = ({ name, dates, Status, Admission,BookType, Class,Subject,DaysLimitation,Note,Note2,Note3}) => {
navigation=useNavigation()
  return (
    <TouchableOpacity>
    <View style={styles.container}>

      <View onTouchEnd={() =>  { Status == 'Accepted' ? navigation.navigate('BorrowbookrequestaccpetScreen',{dates,name,Status,Admission,BookType,Class,Subject,DaysLimitation,Note,Note2})
       : navigation.navigate('BorrowbookrequestdeniedScreen',{dates,name,Status,Admission,BookType,Class,Subject,DaysLimitation,Note3})}} style={styles.item}>
        <View style={styles.box}>
            <View>
              <Image source={require('../../Assets/images/bi_list-task.png')} style={{ width: scale(18), height: scale(18), color: "#303030", fontSize: moderateScale(SpacingSize.fontsizeLarge) }} />
            </View>
            <Text style={{
              fontFamily: Constants.SecondaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge),
              color: "#303030", marginLeft: SpacingSize.marginLarge,
            }}>{name}</Text>
          </View>

          <View style={styles.box1}>
            <View><Text style={{ color: "#303030", fontSize: moderateScale(SpacingSize.fontsizeSmall) }}>PickUpDate:</Text></View>

            <Text style={{ fontFamily: "Poppins-Regular",fontSize: moderateScale(SpacingSize.fontsizeSmall) ,marginLeft:SpacingSize.marginTiny, color: "#303030" }}> {dates}</Text>
          </View>
          <View style={styles.box2}>
            <View><Text style={{ color: "#303030", fontSize: moderateScale(SpacingSize.fontsizeSmall) }}>Status:</Text></View>
            <Text style={{
              fontFamily: "Poppins-Regular", fontSize: moderateScale(SpacingSize.fontsizeSmall),
              color: Status == 'Accepted' ? "#36C142" : 'red', marginLeft:SpacingSize.marginTiny,
            }}> {Status}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function BorrowBH2Screen() {
  const renderItem = ({ item }) => (<Item name={item.name} dates={item.dates} Status={item.Status} 
    Admission={item.Admission} Class={item.Class} BookType={item.BookType} Subject={item.Subject}
    DaysLimitation={item.DaysLimitation} Note={item.Note} Note2={item.Note2} Note3={item.Note3}/>
  );
  return (
    <>
    <View style={styles.container}>
    
<Headers name={"Borrow Book (History)"} clr={"#0F4C75"} background={"white"} clricon={"#0F4C75"} fontw={700} />
      <FlatList
        data={Booksdata}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}

      />
    </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
alignItems:"center",
    flex: 1,

  },
  item: {
    backgroundColor: '#D4F7B3',
    padding: SpacingSize.paddingLarge,
    marginBottom: SpacingSize.marginExtraLarge,
    borderRadius: moderateScale(8),
    elevation: 3,
    width: scale(328),
    height: scale(140),
    justifyContent:"space-between"
  
    

  },
  box: {
    flexDirection: "row",
    width: scale(325),
    height: scale(22),
    alignItems: "center",

    //backgroundColor:"pink",
    
  },
  box1: {
    flexDirection: "row",
    width: scale(325),
    height: scale(22),
    marginBottom: SpacingSize.marginExtraLarge,
    //alignItems:"center",
    //backgroundColor:"pink",
   
  },
  box2: {
    flexDirection: "row",
    width: scale(325),
    height: scale(22),
    marginTop: SpacingSize.marginSmall,
    //alignItems:"center",
   // backgroundColor:"pink",
    
  },
});