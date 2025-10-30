import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import Headers from '../../Components/Headers';
import { SpacingSize, moderateScale, scale } from '../../Components/Constants';
import Righticon from 'react-native-vector-icons/AntDesign'
import Constants from '../../Components/Constants';


const BorrowbookrequestdeniedScreen = ({ route }) => {
    const { dates, Admission, Class, Subject, DaysLimitation, BookType, Note3 } = route.params;
    //  console.log(Admission);
    return (
        <ScrollView>
            <View style={styles.container}>
                <Headers name={"Borrow Book Request Denied"} clr={"#0F4C75"} background={"white"} clricon={"#0F4C75"} fontw={700} />

                <View style={styles.Mainbox}>
                    <View styles={styles.picbox}>
                        <Image style={styles.pic1box} source={require('../../Assets/images/Denied.png')}></Image>
                    </View>

                    <View style={styles.box1}>
                        <View><Text style={{ color: "#303030", fontSize:moderateScale(SpacingSize.fontsizeLarge)}}>Admission no:</Text></View>

                        <Text style={{ fontFamily: Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeLarge), color: "#303030" }}> {Admission}</Text>
                    </View>
                    <View style={styles.box1}>
                        <View><Text style={{ color: "#303030", fontSize:moderateScale(SpacingSize.fontsizeLarge), }}>Class:</Text></View>

                        <Text style={{ fontFamily: Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeLarge), color: "#303030" }}> {Class}</Text>
                    </View>
                    <View style={styles.box1}>
                        <View><Text style={{ color: "#303030", fontSize:moderateScale(SpacingSize.fontsizeLarge)}}>Book Type :</Text></View>

                        <Text style={{ fontFamily: Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeLarge), color: "#303030" }}>{BookType}</Text>
                    </View>
                    <View style={styles.box1}>
                        <View><Text style={{ color: "#303030", fontSize:moderateScale(SpacingSize.fontsizeLarge)}}>Subject:</Text></View>

                        <Text style={{ fontFamily: Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeLarge), color: "#303030" }}> {Subject}</Text>
                    </View>
                    <View style={styles.box1}>
                        <View><Text style={{ color: "#303030", fontSize:moderateScale(SpacingSize.fontsizeLarge)}}>Pick up date :</Text></View>

                        <Text style={{ fontFamily: Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeLarge), color: "#303030" }}> {dates}</Text>
                    </View>
                    <View style={styles.box1}>
                        <View><Text style={{ color: "#303030", fontSize:moderateScale(SpacingSize.fontsizeLarge)}}>Days limitation:</Text></View>

                        <Text style={{ fontFamily: Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeLarge), color: "#303030" }}> {DaysLimitation}</Text>
                    </View>

                    <View style={styles.box2}>

                        <Text style={{ fontFamily: Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeLarge), color: "#F0695D" }}>Note:{Note3}</Text>
                    </View>

                    <View onTouchEnd={() => navigation.navigate('NewrequestScreen')} style={styles.bottombox}>

                        <View style={styles.bottomboxwithtext}>
                            <View style={styles.bottomcirclebox}><Image style={{ width: scale(25), height: scale(25), alignSelf: "center", alignContent: "center" }} source={require('../../Assets/images/reserved1.png')}></Image>
                            </View>
                            <Text style={{ color: '#303030', paddingLeft: SpacingSize.paddingLarge, alignSelf: "center", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeMedium)}}>Reserve a book</Text>
                        </View>

                        <View style={styles.rightarrbox}>
                            <Righticon name='right' style={{ color: "#C4C4C4", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge) }} />
                        </View>
                    </View>


                </View>



            </View>
        </ScrollView>
    )
}

export default BorrowbookrequestdeniedScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white"

    },
    Mainbox: {
        width: scale(328),
        backgroundColor: "#FFFFFF",
        padding: SpacingSize.paddingMedium,
        borderRadius: moderateScale(10),
        //borderWidth: 0.25

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
        height: scale(32),
        marginTop: SpacingSize.margingMedium,


    },
    box2: {

        width: scale(320),
        height: scale(100),
        marginTop: SpacingSize.margingMedium,


    },
    bottombox: {
        width: scale(325),
        height: scale(62),
        alignSelf: "center",
        justifyContent: "space-evenly",
        alignItems: 'center',
        borderRadius: moderateScale(8),
        flexDirection: "row",
        marginVertical: SpacingSize.margingMedium,
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",

        //elevation: 3,
        borderWidth: 0.25,





    },
    bottomboxwithtext: {
        flexDirection: "row",
        paddingRight: SpacingSize.paddingLarge,


    },
    bottomcirclebox: {
        backgroundColor: "#8ED2D8",
        width: scale(40),
        height: scale(40),
        borderRadius: moderateScale(25),
        justifyContent: "center",
        marginLeft: SpacingSize.marginExtraLarge

    },
    rightarrbox: {
        width: scale(22),
        height: scale(22), alignItems: "center",
        justifyContent: "center",
        marginRight: SpacingSize.marginExtraLarge

    },
})