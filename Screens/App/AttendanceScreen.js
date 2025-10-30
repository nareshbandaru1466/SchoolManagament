import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Headers from '../../Components/Headers';
import Constants, { SpacingSize, } from '../../Components/Constants';
import { verticalScale, moderateScale, scale } from '../../Components/Constants';

const AttendanceScreen = ({ }) => {
    navigation = useNavigation()
    return (

        <View style={styles.container}>
            <Headers name={"Attendance"} clr={"#0F4C75"} background={"white"} clricon={"#0F4C75"} fontw={700} />
            <View onTouchEnd={() => navigation.navigate('AtchoosemonthScreen')} style={styles.choosebox}>

                <Text style={{ color: "#C4C4C4", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeDoubleExtraLarge) }}>{'<'}</Text>

                <Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge) }}>Choose the month</Text>
                <Text style={{ color: "#C4C4C4", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeDoubleExtraLarge) }}>{'>'}</Text>
            </View>
            <View style={styles.firstbox}>
                <View style={styles.threeboxs}>
                    <View style={styles.box1}>
                        <Text style={{ fontSize: moderateScale(SpacingSize.fontsizeExtraLarge), color: "#0F4C75", fontFamily: Constants.SecondaryFont }}>Your Activity</Text>
                    </View>

                    <View>

                        <View style={styles.box2}>
                            <Text style={{ color: 'black', fontSize: moderateScale(SpacingSize.fontsizeDoubleExtraLarge), fontFamily: Constants.SecondaryFont, fontWeight: 400, alignSelf: "flex-end" }}>201</Text>
                            <Text style={{ color: 'black', fontSize: moderateScale(SpacingSize.fontsizeMedium), fontFamily: Constants.PrimaryFont, alignSelf: "flex-end" }}>  Days</Text>
                        </View>



                        <View style={styles.withintwoboxs}>
                            <View style={styles.box3}>
                                <View style={styles.inbox3}></View>
                                <Text style={{ color: 'black', marginLeft: SpacingSize.margingMedium, fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeMedium) }}>Present</Text>
                            </View>

                            <View style={styles.box4}>
                                <View style={styles.inbox4}></View>
                                <Text style={{ color: 'black', marginLeft: SpacingSize.margingMedium, fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeMedium) }}>Absent</Text>
                            </View>
                        </View>

                    </View>
                </View>

                <View style={styles.perbox}>

                    <Image style={styles.pertbox} source={require('../../Assets/images/Ellipse179.png')} />

                </View>

            </View>
            <View style={styles.totalworkbox}>
                <Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: scale(SpacingSize.fontsizeLarge) }}>Total working days</Text>
                <View style={styles.numbox}>
                    <Text style={{ color: "#C4C4C4", fontFamily: Constants.PrimaryFont, fontSize: scale(SpacingSize.fontsizeLarge) }}>288</Text>
                </View>
            </View>
            <View onTouchEnd={() => navigation.navigate('AtScreen')} style={styles.totaltwobox}>
                <View onTouchEnd={() => navigation.navigate("AttendancelistScreen")} style={styles.totalbox}>
                    <View onTouchEnd={() => navigation.navigate("AttendancelistScreen")} style={styles.abbox}><Text style={{
                        color: "#FFFFFF",
                        fontFamily: Constants.PrimaryFont,
                        fontSize: moderateScale(16),
                        marginLeft: SpacingSize.margingMedium

                    }}>Total Absent</Text>
                    </View>

                    <View style={styles.num1box}>
                        <Text style={{
                            color: "#FFFFFF", fontFamily: Constants.SecondaryFont,
                            fontSize: moderateScale(72), alignSelf: "flex-end"
                        }}>95</Text>

                    </View>
                </View>
                <View onTouchEnd={() => navigation.navigate('AtScreen')} style={styles.total1box}>

                    <View style={styles.prbox}><Text style={{
                        color: "#FFFFFF",
                        fontFamily: Constants.PrimaryFont,
                        fontSize: moderateScale(16),
                        marginLeft: SpacingSize.margingMedium
                    }}>Total Present</Text>
                    </View>

                    <View style={styles.num2box}>
                        <Text style={{
                            color: "#FFFFFF", fontFamily: Constants.SecondaryFont,
                            fontSize: moderateScale(72), alignSelf: "flex-end"
                        }}>217</Text>

                    </View>
                </View>
            </View>
            <View onTouchEnd={() => navigation.navigate('AtScreen')} style={styles.totalholidaysbox}>
                <Text style={{ color: "#FFFFFF", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge) }}>Total holidays</Text>
                <View style={styles.numbox1}>
                    <Text style={{ color: "#C4C4C4", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge) }}>20</Text>
                </View>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFAFA",
        alignItems: "center"
    },
    choosebox: {
        //width: Constants.Width / 1.2,
        //height: Constants.Height / 14,
        width: scale(328),
        height: scale(60),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0.25,
        borderColor: "#000000",
        borderRadius: 48,
        justifyContent: "space-evenly",
        marginTop: SpacingSize.margingMedium

    },
    firstbox: {
        width: scale(328),
        height: verticalScale(157),
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        marginTop: SpacingSize.marginLarge,
        flexDirection: "row",
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        justifyContent: "center",
        alignItems: "center",
        elevation: 3,
    },
    threeboxs: {
        margin: SpacingSize.marginTiny,
        width: scale(200),
        Height: scale(140),
        justifyContent: "space-between"
    },
    box1: {
        width: scale(106),
        height: scale(32),
        //backgroundColor: "green",
        justifyContent: "center",
        marginBottom: SpacingSize.fontsizeMedium,
    },
    box2: {
        width: scale(130),
        height: scale(35),
        flexDirection: "row",
        //backgroundColor: "red",
        justifyContent: "center",
        marginBottom: SpacingSize.fontsizeMedium
    },
    inbox4: {
        width: scale(18),
        height: scale(8),
        backgroundColor: "#F4AA65",
        borderRadius: 5
    },
    inbox3: {
        width: Constants.Width / 20,
    height: Constants.Height / 100,
    backgroundColor: "#9283EF",
    borderRadius: 5
    },
    perbox: {
        padding: SpacingSize.paddingSmall,
        height: scale(130),
        width: scale(110),
        justifyContent: "center"
    },

    pertbox: {
        height: scale(120),
        width: scale(100),
        resizeMode: "contain",
        //backgroundColor: "red",
        alignSelf: "center"
    },
    box3: {
        width: scale(81),
        height: scale(30),
        //backgroundColor: "blue",
        flexDirection: "row",
        alignItems: "center",
        marginRight: 10
    },
    box4: {
        width: scale(81),
        height: scale(30),
        //backgroundColor: "blue",
        flexDirection: "row",
        alignItems: "center",
    },
    withintwoboxs: {
        width: scale(180),
        height: scale(32),
        //backgroundColor: "green",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: SpacingSize.margingMedium

    },
    totalworkbox: {
        width: scale(328),
        height: scale(64),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0.25,
        borderColor: "#000000",
        borderRadius: 18,
        justifyContent: "space-evenly",
        marginTop: SpacingSize.margingMedium
    },
    numbox: {
        width: scale(43),
        height: scale(31),
        backgroundColor: "#6D5FDF",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,

    },
    numbox1: {
        width: scale(43),
        height: scale(31),
        backgroundColor: "#006700",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,

    },
    totalbox: {
        width: scale(156),
        height: verticalScale(156),
        backgroundColor: "#FF9B06",
        borderRadius: 18,
        flexDirection: "column",

    },
    abbox: {
        width: scale(150),
        height: verticalScale(24),
        //backgroundColor:"red",
        marginTop: SpacingSize.margingMedium,
        marginLeft: SpacingSize.marginTiny
    },
    num1box: {
        width: scale(120),
        height: verticalScale(106),
        //backgroundColor:"red",
        justifyContent: "flex-end",
        alignSelf: "flex-end",
        marginRight: SpacingSize.marginTiny,
        marginTop: SpacingSize.marginTiny
    },
    totaltwobox: {
        width: scale(328),
        height: verticalScale(157),
        flexDirection: "row",
        justifyContent: "space-between",
        //backgroundColor:"pink",
        marginTop: SpacingSize.margingMedium
    },
    prbox: {
        width: scale(150),
        height: verticalScale(24),
        //backgroundColor:"red",
        marginTop: SpacingSize.margingMedium,
        marginLeft: SpacingSize.marginTiny

    },
    num2box: {
        width: scale(120),
        height: verticalScale(106),
        //backgroundColor:"red",
        justifyContent: "flex-end",
        alignSelf: "flex-end",
        marginRight: SpacingSize.marginTiny,
        marginTop: SpacingSize.marginTiny

    },
    total1box: {
        width: scale(156),
        height: verticalScale(156),
        backgroundColor: "#9283EF",
        borderRadius: 18,
        flexDirection: "column",
    },
    totalholidaysbox: {
        width: scale(328),
        height: verticalScale(64),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#000000",
        borderRadius: 18,
        justifyContent: "space-evenly",
        marginTop: 15,
        backgroundColor: "#36C142",
    },
})
export default AttendanceScreen;