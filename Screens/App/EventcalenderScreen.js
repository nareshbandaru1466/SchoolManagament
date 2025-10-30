import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React ,{useState ,  useEffect}from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Culturaldata, Examsdata, Holidaysdata } from '../../Utility/StaticData'
import Headers from '../../Components/Headers'
import Lefticon from 'react-native-vector-icons/AntDesign'
import Righticon from 'react-native-vector-icons/AntDesign'
import Downicon from 'react-native-vector-icons/AntDesign'
import { Calendar } from 'react-native-calendars'
import Constants, { SpacingSize } from '../../Components/Constants'
import { verticalScale, moderateScale, scale } from '../../Components/Constants'
import axios from 'axios'


const EventcalenderScreen = () => {
    
    const [getrequestdata,setGetRequestData] = useState()


    const apiGetRequest = async () => {
        const SchoolID = null;
        const Academic_ID = null;
        try {
        const response = await axios.get(`https://osms.adef.tech/api/Event/List_event?SchoolID=${SchoolID}&Academic_ID=${Academic_ID}`)
        // const response = await axios.get('https://osms.adef.tech/api/Event/List_event',{params:{
        setGetRequestData(response.data)
    } catch (error) {
        console.log('',error);
    }
    }


    useEffect(()=>{
        apiGetRequest()
    },[])

    return (
        <ScrollView>
            <View style={styles.container}>
                <Headers name={"Event Calendar"} clr={"#0F4C75"} background={"white"} clricon={"#0F4C75"} fontw={700} />


                <View style={styles.choosebox}>
                    <Text style={{ color: "#C4C4C4", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeDoubleExtraLarge) }}>{'<'}</Text>
                    <Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge) }}>12 Dec, 2023</Text>
                    <Text style={{ color: "#C4C4C4", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeDoubleExtraLarge) }}>{'>'}</Text>
                </View>

                <View style={styles.secondbox}>


                    <View style={styles.threeboxs1}>



                        <View style={styles.secondbox1}>
                            <View style={styles.statisticbox}>
                                <Image style={styles.statistic}
                                    source={require('../../Assets/images/akar-icons_statistic-up.png')} />
                            </View>
                            <Text style={{ fontSize: SpacingSize.fontsizeLarge, color: "#0F4C75", paddingLeft: SpacingSize.paddingSmall, fontFamily: Constants.PrimaryFont }}>Weekly Report</Text>

                        </View>


                        <View style={styles.statusbox}>
                            <Image style={styles.barchart}
                                source={require('../../Assets/images/barchart.png')} />
                        </View>

                        <View style={styles.secondbox1}>
                            <View style={styles.statisticbox}>
                                <Image style={styles.statistic}
                                    source={require('../../Assets/images/akar-icons_statistic-up.png')} />
                            </View>
                            <Text style={{ fontSize: SpacingSize.fontsizeSmall, color: "#0F4C75", paddingLeft: SpacingSize.paddingSmall, fontFamily: Constants.PrimaryFont }}>Show more</Text>

                        </View>
                    </View>

                    <View style={styles.eventbox}>
                        <Text style={{ color: "#303030", fontSize: SpacingSize.fontsizeLarge, fontWeight: 400, marginLeft: SpacingSize.marginLarge, fontFamily: Constants.PrimaryFont }}>1 events</Text>
                        <Text style={{ color: "#303030", fontSize: SpacingSize.fontsizeMedium, fontWeight: 400, marginLeft: SpacingSize.marginLarge, fontFamily: Constants.PrimaryFont }}>Next 7 days</Text>

                    </View>

                </View>

                <Calendar style={{ borderRadius: 10, elevation: 4, width: scale(328), }}

                    hideArrows={true}
                    customHeaderTitle={true}

                />







                <View style={styles.threebox}>


                    <View style={styles.twosbox}>
                        <View style={styles.pinkbox}></View>
                        <Text style={{ fontSize: moderateScale(SpacingSize.fontsizeSmall), color: "#303030", marginRight: SpacingSize.marginLarge, fontFamily: Constants.PrimaryFont }}>Exams</Text>
                    </View>


                    <View style={styles.twosbox2}>
                        <View style={styles.yellowbox}></View>
                        <Text style={{ fontSize: moderateScale(SpacingSize.fontsizeSmall), color: "#303030", marginRight: SpacingSize.marginLarge, fontFamily: Constants.PrimaryFont }}>Holidays</Text>
                    </View>

                    <View style={styles.twosbox3}>
                        <View style={styles.greenbox}></View>
                        <Text style={{ fontSize: moderateScale(SpacingSize.fontsizeSmall), color: "#303030", marginRight: SpacingSize.marginLarge, fontFamily: Constants.PrimaryFont }}>Cultural Events</Text>
                    </View>

                </View>

                <View style={styles.Examsbox}>
                    <Text style={{ color: "#FFFFFF", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge), marginLeft: SpacingSize.marginTiny }}>Exams (Dec Month)</Text>
                    <View style={styles.downbox}>
                        <Text style={{ color: "#FFFFFF", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), alignSelf: "center", marginRight: SpacingSize.marginTiny }}>Add comment</Text>
                        <Downicon name='down' style={{ color: "#FFFFFF", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), alignSelf: "center", marginRight: SpacingSize.marginTiny }} />
                    </View>
                </View>
                <FlatList
                    contentContainerStyle={styles.container}
                    data={Examsdata}
                    renderItem={({ item, index }) => (

                        <View style={styles.flatlistbox}><Text style={{ color: '#0F4C75', fontSize: moderateScale(SpacingSize.fontsizeSmall), fontFamily: Constants.PrimaryFont }}>{item.date}</Text>
                            <Text style={{ color: '#0F4C75', fontSize: moderateScale(SpacingSize.fontsizeSmall), fontFamily: Constants.PrimaryFont }}>{item.subject}</Text>
                        </View>



                    )}

                />
                <View style={styles.holidaysbox}>
                    <Text style={{ color: "#FFFFFF", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge), marginLeft: SpacingSize.marginTiny }}>Holidays (Dec Month)</Text>
                    <View style={styles.downbox}>
                        <Text style={{ color: "#FFFFFF", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), alignSelf: "center", marginRight: SpacingSize.marginTiny }}>Add comment</Text>
                        <Downicon name='down' style={{ color: "#FFFFFF", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), alignSelf: "center", marginRight: SpacingSize.marginTiny }} />
                    </View>
                </View>

                <FlatList
                    contentContainerStyle={styles.container}
                    data={Holidaysdata}
                    renderItem={({ item, index }) => (

                        <View style={styles.flatlistbox}><Text style={{ color: '#0F4C75', fontSize: moderateScale(SpacingSize.fontsizeSmall), fontFamily: Constants.PrimaryFont }}>{item.date}</Text>
                            <Text style={{ color: '#0F4C75', fontSize: moderateScale(SpacingSize.fontsizeSmall), fontFamily: Constants.PrimaryFont }}>{item.special}</Text>
                        </View>



                    )}

                />
                <View style={styles.culturalbox}>
                    <Text style={{ color: "#FFFFFF", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge), marginLeft: SpacingSize.marginTiny }}>Cultural Events(Dec Month)</Text>
                    <View style={styles.downbox}>
                        <Text style={{ color: "#FFFFFF", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), alignSelf: "center", marginRight: SpacingSize.marginTiny }}>Add comment</Text>
                        <Downicon name='down' style={{ color: "#FFFFFF", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeSmall), alignSelf: "center", marginRight: SpacingSize.marginTiny }} />
                    </View>
                </View>

                <FlatList
                    contentContainerStyle={styles.container}
                    data={Culturaldata}
                    renderItem={({ item, index }) => (

                        <View style={styles.flatlistbox}><Text style={{ color: '#0F4C75', fontSize: moderateScale(SpacingSize.fontsizeSmall), fontFamily: Constants.PrimaryFont, marginBottom: 5 }}>{item.date}</Text>
                            <Text style={{ color: '#0F4C75', fontSize: moderateScale(SpacingSize.fontsizeSmall), fontFamily: Constants.PrimaryFont }}>{item.event}</Text>
                        </View>



                    )}

                />
            </View>
        </ScrollView>
    )
}

export default EventcalenderScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        //backgroundColor:"white"

    }, choosebox: {
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
    leftarrbox: {
        width: 22,
        height: 22
    },
    rightarrbox: {
        width: 22,
        height: 22
    },
    textsbox: {
        width: 200,
        height: 32,
        justifyContent: "center,",
        alignItems: "center"
    },

    secondbox: {
        width: scale(328),
        height: scale(218),
        backgroundColor: "#F4D4FF",
        borderRadius: moderateScale(10),
        marginTop: SpacingSize.marginSmall,
        shadowRadius: 10,
        elevation: 3,
        flexDirection: "row",
        alignItems: "center",
        marginBottom:SpacingSize.marginLarge 
    },
    threeboxs1: {
        margin: SpacingSize.marginTiny,
        width: scale(200),
        Height: scale(218),
        justifyContent: "space-between",
        //backgroundColor: "red"
    },

    statistic: {
        width: scale(12),
        height: scale(12),
    },
    secondbox1: {
        width: scale(200),
        height: scale(32),
        //backgroundColor: "green",
        flexDirection: "row",
        alignItems: "center",


    },
    statisticbox: {
        width: scale(16),
        height: scale(16),
    },
    secondbox2: {
        width: 114,
        height: 24,
        //backgroundColor:"green",
        paddingLeft: 5
    },
    secondtwoboxs: {
        width: 300,
        height: 120,
        //backgroundColor: "green",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"

    },
    statusbox: {
        width: scale(320),
        height: scale(110),
        borderBottomColor: "black",
        borderBottomWidth: 0.5,
        //backgroundColor: "red",

    },
    eventbox: {

        // backgroundColor: "pink",
        margin: SpacingSize.marginTiny,
        padding: SpacingSize.paddingSmall,
        width: Constants.Width / 3.2,
        height: Constants.Height / 7.3,
        justifyContent: "center",
    },
    barchart: {

        alignSelf: "center",
        width: scale(200),
        height: scale(110),
        resizeMode: "cover",
        // backgroundColor:"green",
        //transform: [{ scale: 2 }],
        alignSelf: "flex-start"

    },
    calbox: {
        width: 328,

        //backgroundColor: "red",
        marginRight: SpacingSize.margingMedium
    },
    pinkbox: {
        width: scale(18),
        height: scale(8),
        backgroundColor: "#EB4C92",
        borderRadius: 4,
        marginRight: SpacingSize.marginSmall
    },
    twosbox: {
        width: scale(100),
        height: scale(30),
        flexDirection: "row",
        //backgroundColor:"blue",
        alignItems: "center",

        marginRight: SpacingSize.margingMedium
    },
    threebox: {
        width: scale(328),
        height: scale(30),
        flexDirection: "row",
        justifyContent: "space-evenly",
        //backgroundColor:"red"
    },
    yellowbox: {
        width: scale(18),
        height: scale(8),
        backgroundColor: "#F4AA65",
        borderRadius: 4,
        marginRight: SpacingSize.marginSmall
    },
    greenbox: {
        width: scale(18),
        height: scale(8),
        backgroundColor: "#36C142",
        borderRadius: 4,
        marginRight: SpacingSize.marginSmall
    },
    twosbox2: {
        width: scale(100),
        height: scale(30),
        flexDirection: "row",
        //backgroundColor:"red",
        alignItems: "center",

        marginRight: SpacingSize.margingMedium
    },
    twosbox3: {
        width: scale(110),
        height: scale(30),
        flexDirection: "row",
        //backgroundColor:"red",
        alignItems: "center",

        marginRight: SpacingSize.margingMedium
    },
    Examsbox: {
        width: scale(328),
        height: scale(32),
        backgroundColor: "#EB4C92",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    flatlistbox: {
        backgroundColor: '#FFFFFF',
        width: scale(328),
        height: scale(40),
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center"


    },
    holidaysbox: {
        width: scale(328),
        height: scale(32),
        backgroundColor: "#FF9B06",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: SpacingSize.marginLarge
    },
    culturalbox: {
        width: scale(328),
        height: scale(32),
        backgroundColor: "#36C142",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    downbox: {
        flexDirection: "row",
    },
})