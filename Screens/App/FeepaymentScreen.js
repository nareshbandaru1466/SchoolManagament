import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headers from '../../Components/Headers'
import Constants, { SpacingSize, moderateScale, scale } from '../../Components/Constants'
const FeepaymentScreen = () => {
    return (
        <View style={styles.container}>
            <Headers name={"Payment"} background={"#0F4C75"} clr={"#FAFAFA"} clricon={"#FAFAFA"} />




            <Text style={{
                color: "#0F4C75", fontFamily: Constants.SecondaryFont,
                fontSize: moderateScale(SpacingSize.fontsizeExtraLarge), marginBottom: SpacingSize.margingMedium, width: scale(328)
            }}>Pay with UPI</Text>
            <View style={styles.uplbox}>
                <View style={styles.numbox}>
                    <Text style={{ color: "#6E6E6E", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeMedium) }}>
                        UPI ID. eg - 89XXXXXX50@ybl
                    </Text>
                </View>
                <View style={styles.verbox}>

                    <Text style={{ color: "#6E6E6E", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeMedium) }}>
                        Verify
                    </Text>
                    <View />
                </View>
            </View>



            <View>
                <Text style={{
                    color: "#000000", fontFamily: "Poppins-Regular", fontSize: 16, alignSelf: "center", marginBottom: 30,
                    marginTop: 10
                }}>OR</Text>
            </View>

            <Text style={{
                color: "#0F4C75", fontFamily: Constants.SecondaryFont,
                fontSize: moderateScale(SpacingSize.fontsizeExtraLarge), marginBottom: SpacingSize.margingMedium, width: scale(328)
            }}>Enter your mobile number</Text>
            <View style={styles.mobliebox}>
                <View style={styles.numbox}>
                    <Text style={{ color: "#6E6E6E", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeMedium) }}> +91 00000 00000
                    </Text>
                </View>
                <View style={styles.verbox}>
                    <Text style={{ color: "#6E6E6E", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeMedium) }}>
                        Verify
                    </Text>
                    <View />
                </View>

            </View>
            <View style={styles.textbox}>
                <Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall) }}>
                    By generating OTP, you are agreeing to PhonePe’s</Text>
                <Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), marginBottom: SpacingSize.margingMedium, fontWeight: 700 }}>Terms & Conditions.</Text>
            </View>

            <View style={styles.otpbox}>
                <Text onTouchEnd={() => navigation.navigate('FeepaymentScreen')} style={{ color: "#FFFFFF", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeExtraLarge), }}>SEND OTP</Text>
            </View>
        </View>

    )
}

export default FeepaymentScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center"

    },
    uplbox: {
        width: scale(328),
        height: scale(46),
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 8,
        borderColor: "#0F4C75",
        borderWidth: 1,
        paddingHorizontal: SpacingSize.paddingLarge,
        paddingVertical: SpacingSize.paddingLarge,
        marginBottom: SpacingSize.marginExtraLarge,
        //backgroundColor: "pink"


    },
    mobliebox: {
        width: scale(328),
        height: scale(46),
        //backgroundColor:"red",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 8,
        borderColor: "#0F4C75",
        borderWidth: 1,
        marginTop: SpacingSize.margingMedium,
        paddingHorizontal: SpacingSize.paddingLarge,
        paddingVertical: SpacingSize.paddingMedium,
    },
    otpbox: {

        backgroundColor: '#D9D9D9',
        width: scale(328),
        height: scale(46),
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 8
    },
    textbox: {
        width: scale(328),
        height: scale(46),
    },
    verbox: {
        width: scale(41),
        height: scale(22),
        justifyContent: "center",
        alignSelf: "center"

    },
    numbox: {
        width: scale(250),
        height: scale(22),
        justifyContent: "center",
        alignSelf: "center"

    }
})