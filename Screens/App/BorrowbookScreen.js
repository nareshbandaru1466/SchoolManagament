import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Constants, { SpacingSize, moderateScale, scale } from "../../Components/Constants";
import Righticon from 'react-native-vector-icons/AntDesign';
import Headers from "../../Components/Headers";


const BorrowbookScreen = () => {
    navigation = useNavigation()
    return (
        <View style={styles.container}>


            <View style={styles.topbox}>
                <View style={styles.leftbox}>

                    <View style={styles.leftboxwithtext}>
                        <View style={styles.leftcirclebox}>
                            <Image style={{ width: scale(25), height: scale(25), alignSelf: "center", alignContent: "center" }} source={require('../../Assets/images/occupation1.png')}></Image>
                        </View>
                        <Text onTouchEnd={() => navigation.navigate('BorrowBHScreen')}
                            style={{
                                color: '#303030', paddingLeft: SpacingSize.paddingMedium, alignSelf: "center",
                                fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeMedium)
                            }}>History</Text>
                    </View>
                </View>


                <View style={styles.rightbox}>
                    <View style={styles.redbox}></View>
                    <View style={styles.rightboxwithtext}>
                        <View style={styles.righcricletbox}>
                            <Image style={{ width: scale(25), height: scale(25), alignSelf: "center", alignContent: "center" }} source={require('../../Assets/images/occupation1.png')}></Image>

                        </View>
                        <Text onTouchEnd={() => navigation.navigate('OngoingScreen')}
                            style={{ color: 'black', paddingLeft: SpacingSize.paddingMedium, alignSelf: "center", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeMedium) }}>On Going</Text>
                    </View>
                </View>
            </View>





            <View onTouchEnd={() => navigation.navigate('NewrequestScreen')} style={styles.bottombox}>

                <View style={styles.bottomboxwithtext}>
                    <View style={styles.bottomcirclebox}><Image style={{ width: scale(25), height: scale(25), alignSelf: "center", alignContent: "center" }} source={require('../../Assets/images/reserved1.png')}></Image>
                    </View>
                    <Text style={{ color: '#FFFFFF', alignSelf: "center", paddingLeft: SpacingSize.paddingMedium, alignSelf: "center", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeMedium) }}>New Request</Text>
                </View>

                <View style={styles.rightarrbox}>
                    <Righticon name='right' style={{ color: "#C4C4C4", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge) }} />
                </View>
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

        padding: 1
    },
    topbox: {
        //backgroundColor: "blue",
        width: scale(328),
        height: scale(62),
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "space-between",
        margin: SpacingSize.marginSmall,


    },
    leftbox: {
        width: scale(158),
        height: scale(62),
        backgroundColor: "#FAE8B4",
        borderRadius: moderateScale(8),
        shadowRadius: 10,
        elevation: 3,
        //borderWidth:0.25
        justifyContent: "center"

    },
    rightbox: {

        width: scale(158),
        height: scale(62),
        backgroundColor: "#B9E3BF",
        borderRadius: moderateScale(8),
        shadowColor: '#000',
        shadowRadius: 8,
        //borderWidth:0.25,
        elevation: 3,
        justifyContent: "center",
        paddingBottom: SpacingSize.paddingMedium






    },
    bottombox: {
        width: scale(328),
        height: scale(62),
        alignSelf: "center",
        justifyContent: "space-evenly",
        alignItems: 'center',
        flexDirection: "row",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: moderateScale(8),
        backgroundColor: "#0F4C75",
        shadowRadius: 10,
        elevation: 3,
        //borderWidth:0.25,





    },
    bottomcirclebox: {
        backgroundColor: "#8ED2D8",
        width: scale(40),
        height: scale(40),
        borderRadius: moderateScale(25),
        justifyContent: "center"

    },
    bottomboxwithtext: {
        flexDirection: "row",
        paddingRight: "30%",


    },
    leftcirclebox: {
        backgroundColor: "#B9E3BF",
        width: scale(40),
        height: scale(40),
        justifyContent: "space-between",
        borderRadius: moderateScale(25),
        justifyContent: "center"

    },
    leftboxwithtext: {
        //backgroundColor:"pink",
        alignSelf: "center",
        justifyContent: "space-evenly",
        alignItems: 'center',
        flexDirection: "row",
        marginRight: SpacingSize.marginExtraLarge


    },
    righcricletbox: {
        backgroundColor: "#8ED2D8",
        width: scale(42),
        height: scale(42),
        justifyContent: "space-between",
        borderRadius: moderateScale(25),
        justifyContent: "center"

    },
    rightboxwithtext: {
        //backgroundColor:"pink",
        alignSelf: "center",
        justifyContent: "space-evenly",
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "center",
        width: scale(110),
        height: scale(25),
        marginRight: SpacingSize.marginLarge

    },

    redbox: {
        width: scale(10),
        height: scale(10),
        backgroundColor: "red",
        alignSelf: "flex-end",
        borderRadius: moderateScale(25),
        marginRight: SpacingSize.margingMedium
    },
    rightarrbox: {
        width: scale(22),
        height: scale(22),
        alignItems: "center",
        justifyContent: "center"
    },

})

export default BorrowbookScreen;

