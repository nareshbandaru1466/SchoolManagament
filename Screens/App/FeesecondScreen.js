import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Headers from '../../Components/Headers';
import Constants, { SpacingSize, moderateScale, scale } from '../../Components/Constants';
const FeesecondScreen = () => {
    navigation = useNavigation()
    return (
        <ScrollView>
            <View style={styles.container}>
                <Headers name={"Fee Info"} clr={"#0F4C75"} clricon={"#0F4C75"} fontw={700} background={"white"} />

                <Text style={{
                    color: "#0F4C75", fontFamily: Constants.SecondaryFont,
                    fontSize: moderateScale(SpacingSize.fontsizeExtraLarge), paddingBottom: SpacingSize.paddingLarge, paddingTop: SpacingSize.paddingLarge
                }}>Tution Fee(Term - 1)</Text>

                <View style={styles.twoboxs}>

                    <View style={styles.firstbox}>
                        <Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), }}>Fee</Text>
                        <Text style={{ color: "#0F4C75", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall) }}>₹ 15000.00</Text>
                    </View>
                    <View style={styles.firstbox}>
                        <Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), }}>Transport</Text>
                        <Text style={{ color: "#0F4C75", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall) }}>₹ 15000.00</Text>
                    </View>
                    <View style={styles.firstbox}>
                        <Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), }}>Concession</Text>
                        <Text style={{ color: "#0F4C75", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall) }}>₹ 15000.00</Text>
                    </View>
                    <View style={styles.firstbox}>
                        <Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), }}>Fee Payable</Text>
                        <Text style={{ color: "#0F4C75", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall) }}>₹ 15000.00</Text>
                    </View>
                    <View style={styles.firstbox4}>
                        <Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), }}>Fee Paid</Text>
                        <Text style={{ color: "#0F4C75", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall) }}>₹ 15000.00</Text>
                    </View>
                    <View style={styles.firstbox5}>
                        <Text style={{ color: "#0F4C75", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), }}>Due Date</Text>
                        <Text style={{ color: "#CD3737", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall) }}>12 Jan 2024</Text>
                    </View>
                </View>




                <Text style={{
                    color: "#0F4C75", fontFamily: Constants.SecondaryFont,
                    fontSize: moderateScale(SpacingSize.fontsizeExtraLarge), paddingBottom: SpacingSize.paddingLarge, paddingTop: SpacingSize.paddingLarge
                }}>Tution Fee(Term - 2)</Text>

                <View style={styles.twoboxs}>

                    <View style={styles.firstbox}>
                        <Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), }}>Fee</Text>
                        <Text style={{ color: "#0F4C75", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall) }}>₹ 15000.00</Text>
                    </View>
                    <View style={styles.firstbox}>
                        <Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), }}>Transport</Text>
                        <Text style={{ color: "#0F4C75", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall) }}>₹ 15000.00</Text>
                    </View>
                    <View style={styles.firstbox}>
                        <Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), }}>Concession</Text>
                        <Text style={{ color: "#0F4C75", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall) }}>₹ 15000.00</Text>
                    </View>
                    <View style={styles.firstbox}>
                        <Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), }}>Fee Payable</Text>
                        <Text style={{ color: "#0F4C75", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall) }}>₹ 15000.00</Text>
                    </View>
                    <View style={styles.firstbox4}>
                        <Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), }}>Fee Paid</Text>
                        <Text style={{ color: "#0F4C75", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall) }}>₹ 15000.00</Text>
                    </View>
                    <View style={styles.firstbox5}>
                        <Text style={{ color: "#0F4C75", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), }}>Due Date</Text>
                        <Text style={{ color: "#CD3737", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall) }}>12 Jan 2024</Text>
                    </View>
                </View>



                <Text style={{
                    color: "#0F4C75", fontFamily: Constants.SecondaryFont,
                    fontSize: moderateScale(SpacingSize.fontsizeExtraLarge), paddingBottom: SpacingSize.paddingLarge, paddingTop: SpacingSize.paddingLarge
                }}>Tution Fee(Term - 3)</Text>

                <View style={styles.twoboxs}>

                    <View style={styles.firstbox}>
                        <Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), }}>Fee</Text>
                        <Text style={{ color: "#0F4C75", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall) }}>₹ 15000.00</Text>
                    </View>
                    <View style={styles.firstbox}>
                        <Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), }}>Transport</Text>
                        <Text style={{ color: "#0F4C75", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall) }}>₹ 15000.00</Text>
                    </View>
                    <View style={styles.firstbox}>
                        <Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), }}>Concession</Text>
                        <Text style={{ color: "#0F4C75", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall) }}>₹ 15000.00</Text>
                    </View>
                    <View style={styles.firstbox}>
                        <Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), }}>Fee Payable</Text>
                        <Text style={{ color: "#0F4C75", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall) }}>₹ 15000.00</Text>
                    </View>
                    <View style={styles.firstbox4}>
                        <Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), }}>Fee Paid</Text>
                        <Text style={{ color: "#0F4C75", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall) }}>₹ 15000.00</Text>
                    </View>
                    <View style={styles.firstbox5}>
                        <Text style={{ color: "#0F4C75", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), }}>Due Date</Text>
                        <Text style={{ color: "#CD3737", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall) }}>12 Jan 2024</Text>
                    </View>
                </View>




                <View style={styles.paybox}>
                    <Text onTouchEnd={() => navigation.navigate('FeepaymentScreen')} style={{ color: "#FFFFFF", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge)}}>PAY NOW</Text>
                </View>

            </View>

        </ScrollView>
    )
}

export default FeesecondScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        //backgroundColor:"white"
    },
    firstbox: {
        width: scale(320),
        height: scale(25),
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        paddingHorizontal: SpacingSize.paddingMedium,
        paddingVertical: SpacingSize.paddingTiny,
       
    },
       
    firstbox4: {
        width: scale(320),
        height: scale(25),
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        paddingHorizontal: SpacingSize.paddingMedium,
        paddingVertical: SpacingSize.paddingTiny,
        marginBottom: SpacingSize.marginExtraLarge
    

    },
    firstbox5: {
        width: scale(320),
        height: scale(26),
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        paddingHorizontal: SpacingSize.paddingMedium,
        paddingVertical: SpacingSize.paddingTiny,
        marginTop: SpacingSize.marginExtraLarge
       

    },
    paybox: {
        width: scale(328),
        height: scale(62),
        backgroundColor: "#0F4C75",
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 8,
        marginTop:SpacingSize.marginLarge
    },
    twoboxs: {
        width: scale(328),
        height: scale(190),
        //alignSelf:"center"
        borderRadius: 8,
        borderWidth: 0.50,
        backgroundColor: "#FFFFFF"
    }
})