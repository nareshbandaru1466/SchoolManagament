import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { Booksdata } from '../../Utility/StaticData';
import Headers from '../../Components/Headers';
import Constants, { SpacingSize, moderateScale, scale } from '../../Components/Constants';

const BorrowbookrequestaccpetScreen = ({ route }) => {
    const { dates, Admission, Class, Subject, DaysLimitation, BookType, Note,Note2 } = route.params;
    //  console.log(Admission);
    return (
        <ScrollView>
        <View style={styles.container}>
        <Headers name={"Borrow Book Request Accepted"} clr={"#0F4C75"} background={"white"} clricon={"#0F4C75"} fontw={700} />

            <View style={styles.Mainbox}>
                <View styles={styles.picbox}>
                    <Image style={styles.pic1box} source={require('../../Assets/images/Rectangle984.png')}></Image>
                </View>
                

                <View style={styles.box1}>
                    <View><Text style={{ color: "#303030", fontSize:moderateScale(SpacingSize.fontsizeLarge),}}>Admission no:</Text></View>

                    <Text style={{ fontFamily: Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeLarge),color: "#303030" }}> {Admission}</Text>
                </View>
                <View style={styles.box1}>
                    <View><Text style={{ color: "#303030", fontSize:moderateScale(SpacingSize.fontsizeLarge)  }}>Class:</Text></View>

                    <Text style={{ fontFamily: Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeLarge),color: "#303030" }}> {Class}</Text>
                </View>
                <View style={styles.box1}>
                    <View><Text style={{ color: "#303030", fontSize:moderateScale(SpacingSize.fontsizeLarge), }}>Book Type :</Text></View>

                    <Text style={{ fontFamily: Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeLarge), color: "#303030" }}>{BookType}</Text>
                </View>
                <View style={styles.box1}>
                    <View><Text style={{ color: "#303030", fontSize:moderateScale(SpacingSize.fontsizeLarge), }}>Subject:</Text></View>

                    <Text style={{ fontFamily: Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeLarge),color: "#303030" }}> {Subject}</Text>
                </View>
                <View style={styles.box1}>
                    <View><Text style={{ color: "#303030", fontSize:moderateScale(SpacingSize.fontsizeLarge), }}>Pick up date :</Text></View>

                    <Text style={{ fontFamily: Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeLarge), color: "#303030" }}> {dates}</Text>
                </View>
                <View style={styles.box1}>
                    <View><Text style={{ color: "#303030", fontSize:moderateScale(SpacingSize.fontsizeLarge), }}>Days limitation:</Text></View>

                    <Text style={{ fontFamily: Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeLarge),color: "#303030" }}> {DaysLimitation}</Text>
                </View>
                <View style={styles.box2}>
                    

                    <Text style={{ fontFamily: Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeLarge),color: "#F0695D",}}>Note :{Note}</Text>
                </View>
                <View style={styles.box1}>
                    <View><Text style={{ color: "#303030", fontSize:moderateScale(SpacingSize.fontsizeLarge), }}></Text></View>

                    <Text style={{ fontFamily: Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeLarge),color: "#F0695D" }}> {Note2}</Text>
                </View>


            </View>

        </View>
        </ScrollView>
    )
}

export default BorrowbookrequestaccpetScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor:"white"

    },
    Mainbox: {
        width: scale(328),
        backgroundColor: "#FFFFFF",
        padding:SpacingSize.paddingMedium,
        borderRadius:moderateScale(SpacingSize.fontsizeSmall),
        borderWidth: 0.25

    },
    picbox: {
        width: scale(100),
        height: scale(100),

    },
    pic1box: {
        width: scale(100),
        height: scale(100),
        //backgroundColor:"red"
        alignSelf: "center"
    },
    box1: {
        flexDirection: "row",
        width: scale(325),
        height:scale(32),
    
        
       
    },
    box2: {
        width: scale(320),
        height: scale(48),
        marginTop:SpacingSize.marginSmall,
        
    
    },
})