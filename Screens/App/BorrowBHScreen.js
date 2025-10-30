import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Headers from "../../Components/Headers";
import Constants, { SpacingSize, moderateScale, scale } from "../../Components/Constants";


const BorrowBHScreen = () => {
    navigation = useNavigation()
    return (

        <View style={styles.container}>
            
            <Headers name={"Borrow Book (History)"} clr={"#0F4C75"} background={"white"} clricon={"#0F4C75"} fontw={700} />
            <View style={styles.Mainbox}>
                <MonthBox month='January' />
                <MonthBox month='February' />
                <MonthBox month='March' />
                <MonthBox month='April' />
                <MonthBox month='May' />
                <MonthBox month='June' />
                <MonthBox month='July' />
                <MonthBox month='August' />
                <MonthBox month='September' />
                <MonthBox month='October' />
                <MonthBox month='November' />
                <MonthBox month='December' />

            </View>
        </View>

    );
};

const MonthBox = ({ month }) => {
    return (
        <TouchableOpacity>
            <View style={styles.leftbox}>

                <View onTouchEnd={() => navigation.navigate('BorrowBH2Screen')} style={styles.leftboxwithtext}>
                    <View style={styles.leftcirclebox}>
                        <Image style={{
                            width:scale(25), height: scale(25), alignSelf: "center",
                            alignContent: "center"
                        }} source={require('../../Assets/images/occupation1.png')}></Image>

                    </View>
                    <Text style={{ color: 'black', paddingLeft:SpacingSize.paddingLarge, alignSelf: "center", fontFamily:Constants.PrimaryFont, fontSize:moderateScale(SpacingSize.fontsizeMedium) }}>{month}</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
     backgroundColor:"white"
        //backgroundColor: "pink",
        
    },
    Mainbox: {
        width: scale(328),
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "space-evenly",
        // backgroundColor: "green",
        flexWrap: 'wrap',


    },
    leftbox: {
        width:scale(158),
        height:scale(62),
        backgroundColor: "#FFFFFF",
        borderRadius:moderateScale(15),
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        marginBottom:SpacingSize.marginExtraLarge,

        borderWidth: 0.50,
        justifyContent:"center",
        alignContent:"center"

    },
    leftcirclebox: {
        //backgroundColor: "#B9E3BF",
        width:scale(40),
        height: scale(40),
        justifyContent: "space-between",
        borderRadius:moderateScale(25),
        justifyContent: "center",
        alignSelf:"center",
       
        marginLeft:SpacingSize.marginLarge

    },
    leftboxwithtext: {
        flexDirection: "row",
        //backgroundColor:"red",
        width:scale(150),
        height: scale(42),
        //justifyContent:"space-betwee",
        alignSelf: "center",


    },
    


})

export default BorrowBHScreen;