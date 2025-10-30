import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Constants, { SpacingSize } from '../../Components/Constants';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';
import Headers from '../../Components/Headers';
import { verticalScale, moderateScale, scale } from '../../Components/Constants';

const AtchoosemonthScreen = ({ }) => {
    navigation = useNavigation()
    return (
        <ScrollView>
            <View style={styles.container}>
                <Headers name={"Attendance"} clr={"#0F4C75"} background={"white"} clricon={"#0F4C75"} fontw={700} />
                <View style={styles.choosebox}>
                    <Text style={{ color: "#C4C4C4", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeDoubleExtraLarge) }}>{'<'}</Text>
                    <Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge) }}>Dec, 2023</Text>
                    <Text style={{ color: "#C4C4C4", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeDoubleExtraLarge) }}>{'>'}</Text>
                </View>

                <Calendar style={{ borderRadius: 10, elevation: 4, width: scale(328), marginTop:SpacingSize.margingMedium}}

                    hideArrows={true}
                    customHeaderTitle={true}

                />

                <View style={styles.totalworkbox}>
                    <Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: scale(SpacingSize.fontsizeLarge) }}>December working days</Text>
                    <View style={styles.numbox}>
                        <Text style={{ color: "#C4C4C4", fontFamily: Constants.PrimaryFont, fontSize: scale(SpacingSize.fontsizeLarge) }}>09</Text>
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
                            }}>01</Text>

                        </View>
                    </View>
                    <View style={styles.total1box}>

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
                            }}>09</Text>

                        </View>
                    </View>
                </View>
                <View onTouchEnd={() => navigation.navigate('AtScreen')} style={styles.totalholidaysbox}>
                    <Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge) }}>Total holidays</Text>
                    <View style={styles.numbox}>
                        <Text style={{ color: "#C4C4C4", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge) }}>20</Text>
                    </View>
                </View></View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center"

    },
    choosebox: {
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
        width: 328,
        height: 157,
        backgroundColor: "#EBF9FB",
        borderRadius: 10,
        marginTop: 15,
        borderWidth: 1,
    },
    box1: {
        width: 150,
        height: 32,
        //backgroundColor: "green",
        alignItems: "flex-start",
        justifyContent: "center",
        margin: 5
    },
    firstmainbox: {
        width: 300,
        height: 60,
        //backgroundColor: "green",
        flexDirection: "row"

    },
    Mainbox: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
    },
    box2: {
        width: 150,
        height: 41,
        //backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
        marginBottom: 5,
        marginTop: 10
    },
    circlebox: {
        width: 75,
        height: 75,
        backgroundColor: "blue",

    },
    inbox3: {
        width: 18,
        height: 8,
        backgroundColor: "#9283EF",
        borderRadius: 5

    },
    topbox3: {
        width: 81,
        height: 30,
        //backgroundColor:"green",
        flexDirection: "row",


    },
    box3: {
        width: 100,
        height: 31,
        //backgroundColor: "blue",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 5,
        marginRight: 10
    },
    withintwoboxs: {
        width: 220,
        height: 50,
        //backgroundColor: "green",
        flexDirection: "row",
        margin: 5,
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
        height: scale(60),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        borderRadius: 18,
        justifyContent: "space-evenly",
        marginTop: 15,
        backgroundColor: "#36C142",
    },
    calbox: {
        width: scale(328),
        //backgroundColor: "red",
        marginBottom: 10,
        marginTop: 10

    },
})
export default AtchoosemonthScreen;