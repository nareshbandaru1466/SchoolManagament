import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Constants, { SpacingSize } from '../../Components/Constants';
import { verticalScale, moderateScale, scale } from '../../Components/Constants';

const DashboardScreen = ({ }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={{ color: '#303030', fontSize: moderateScale(SpacingSize.fontsizeExtraLarge), fontFamily: Constants.SecondaryFont, width: scale(328) }}>Hi Username !</Text>
          <Text style={{ color: '#303030', fontSize: moderateScale(SpacingSize.fontsizeMedium), fontFamily: Constants.PrimaryFont, width: scale(328) }}>Let's get started for class 7th </Text>
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



        <Text style={{
          color: '#303030', fontSize: moderateScale(SpacingSize.fontsizeExtraLarge),
          fontFamily: Constants.SecondaryFont, width: scale(328), marginBottom: SpacingSize.margingMedium,
          marginTop: SpacingSize.margingMedium
        }}>Categories</Text>

        <View style={styles.categorybox}>

          <View style={styles.Mainbox}>
            <MonthBox month='Daily Dairy' image={require('../../Assets/images/read.png')} backgroundColor={'#B9E3BF'} navi={'DailydairyScreen'} />
            <MonthBox month='Assignment' image={require('../../Assets/images/reading-book.png')} backgroundColor={"#FAE8B4"} navi={'AssignmentsScreen'} />
            <MonthBox month='Attendance' image={require('../../Assets/images/schedule(2).png')} backgroundColor={'#EBF9FB'} navi={"AttendanceScreen"} />
            <MonthBox month='Time Table' image={require('../../Assets/images/schedule(1).png')} backgroundColor={'#9283EF'} navi={'TimetableScreen'} />
            <MonthBox month='Library' image={require('../../Assets/images/book.png')} backgroundColor={'#8ED2DB'} navi={'LibraryScreen'} />
            <MonthBox month='Events' image={require('../../Assets/images/calendar1.png')} backgroundColor={'#F5ADB7'} navi={"EventcalenderScreen"} />
            <MonthBox month='Fee Info' image={require('../../Assets/images/charge.png')} backgroundColor={'#EBF9FB'} navi={"FeeScreen"} />
            <MonthBox month='Notifications' image={require('../../Assets/images/email1.png')} backgroundColor={'#B9E3BF'} navi={'NotificationScreen'} />
            <MonthBox month='Report Cards' image={require('../../Assets/images/report-card.png')} backgroundColor={'#FAE8B4'} />
            <MonthBox month='Transport Req' image={require('../../Assets/images/specification2.png')} backgroundColor={'#8ED2DB'} />
            <MonthBox month='Queries' image={require('../../Assets/images/ask-for-help.png')} backgroundColor={'#EBF9FB'} />
            <MonthBox month='Certifications' image={require('../../Assets/images/certificate1.png')} backgroundColor={'#F4D4FF'} />
          </View>

        </View>
        <Text style={{
          color: "#0F4C75", fontSize: moderateScale(SpacingSize.fontsizeExtraLarge), fontFamily: Constants.SecondaryFont, width: scale(328), marginBottom: SpacingSize.margingMedium, marginTop: SpacingSize.margingMedium
        }}>Other Options</Text>

        <View style={styles.online}>
          <Text style={{ color: "#303030", fontSize: moderateScale(SpacingSize.fontsizeMedium), fontFamily: Constants.PrimaryFont }}>Online Classes</Text>
          <Text style={{ color: "#303030", fontSize: moderateScale(SpacingSize.fontsizeMedium), fontFamily: Constants.PrimaryFont }}>{'>'}</Text>
        </View>
        <View style={styles.online}>
          <Text style={{ color: "#303030", fontSize: moderateScale(SpacingSize.fontsizeMedium), fontFamily: Constants.PrimaryFont }}>Courses</Text>
          <Text style={{ color: "#303030", fontSize: moderateScale(SpacingSize.fontsizeMedium), fontFamily: Constants.PrimaryFont }}>{'>'}</Text>
        </View>
        <View style={styles.online}>
          <Text style={{ color: "#303030", fontSize: moderateScale(SpacingSize.fontsizeMedium), fontFamily: Constants.PrimaryFont }}>Online Exams</Text>
          <Text style={{ color: "#303030", fontSize: moderateScale(SpacingSize.fontsizeMedium), fontFamily: Constants.PrimaryFont }}>{'>'}</Text>
        </View>
        <View style={styles.online}>
          <Text style={{ color: "#303030", fontSize: moderateScale(SpacingSize.fontsizeMedium), fontFamily: Constants.PrimaryFont }}>Communication</Text>
          <Text style={{ color: "#303030", fontSize: moderateScale(SpacingSize.fontsizeMedium), fontFamily: Constants.PrimaryFont }}>{'>'}</Text>
        </View>
        <View style={styles.online}>
          <Text style={{ color: "#303030", fontSize: moderateScale(SpacingSize.fontsizeMedium), fontFamily: Constants.PrimaryFont }}>Finance</Text>
          <Text style={{ color: "#303030", fontSize: moderateScale(SpacingSize.fontsizeMedium), fontFamily: Constants.PrimaryFont }}>{'>'}</Text>
        </View>
        <View style={styles.online}>
          <Text style={{ color: "#303030", fontSize: moderateScale(SpacingSize.fontsizeMedium), fontFamily: Constants.PrimaryFont }}>Certifications</Text>
          <Text style={{ color: "#303030", fontSize: moderateScale(SpacingSize.fontsizeMedium), fontFamily: Constants.PrimaryFont }}>{'>'}</Text>
        </View>

        <Text style={{
          color: "#969696", fontSize: moderateScale(SpacingSize.fontsizeDoubleExtraLarge), width: scale(328),

          fontFamily: Constants.SecondaryFont, marginBottom: SpacingSize.margingMedium, marginTop: SpacingSize.margingMedium
        }}>Hyderabad Public School</Text>
        <Text style={{
          color: "#969696", fontSize: moderateScale(SpacingSize.fontsizeMedium), width: scale(328), fontFamily: Constants.SecondaryFont, marginBottom: SpacingSize.margingMedium, marginTop: SpacingSize.margingMedium
        }}>Schools are organized spaces purposed for teaching and learning. The classrooms where teachers teach and students learn are of central importance.</Text>


      </View>

    </ScrollView>

  );
};
const MonthBox = ({ month, image, backgroundColor, navi }) => {
  navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate(`${navi}`)}>
      <View style={{
        width: scale(100),
        height: scale(100),
        backgroundColor: `${backgroundColor}`,
        borderRadius: 4,
        shadowColor: '#000',
        marginBottom: 20,
        shadowRadius: 10,
        elevation: 3,
        justifyContent: "center"
      }}>


        <View style={styles.leftcirclebox}>
          <Image style={styles.img} source={image} />
        </View>
        <Text style={{ color: '#303030', alignSelf: "center", marginTop: SpacingSize.marginSmall, fontFamily: Constants.PrimaryFont, fontSize: moderateScale(12) }}>{month}</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#FAFAFA",
    alignItems: "center"


  },
  threeboxs: {
    margin: SpacingSize.marginTiny,
    width: scale(200),
    Height: scale(140),
    justifyContent: "space-between",
    //backgroundColor:"red"


  },
  threeboxs1: {
    margin: SpacingSize.marginTiny,
    width: scale(200),
    Height: scale(218),
    justifyContent: "space-between",
    //backgroundColor: "red"


  },

  firstbox: {
    width: scale(328),
    height: verticalScale(157),
    backgroundColor: "#EBF9FB",
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
  box1: {
    width: scale(106),
    height: scale(32),
    //backgroundColor: "green",
    justifyContent: "center",
    marginBottom: SpacingSize.fontsizeMedium,
  },
  withintwoboxs: {
    width: scale(180),
    height: scale(32),
    //backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: SpacingSize.margingMedium


  },
  box2: {
    width: scale(130),
    height: scale(35),
    flexDirection: "row",
    //backgroundColor: "red",
    justifyContent: "center",
    marginBottom: SpacingSize.fontsizeMedium



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
  Mainbox: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    shadowRadius: 10,
    elevation: 3,
  },
  inbox3: {
    width: scale(18),
    height: scale(8),
    backgroundColor: "#9283EF",
    borderRadius: 5

  },
  inbox4: {
    width: scale(18),
    height: scale(8),
    backgroundColor: "#F4AA65",
    borderRadius: 5

  },
  box3: {
    width: scale(81),
    height: scale(30),
    //backgroundColor: "blue",
    flexDirection: "row",
    alignItems: "center",

  },
  box4: {
    width: scale(81),
    height: scale(30),
    //backgroundColor: "blue",
    flexDirection: "row",
    alignItems: "center",
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
    alignItems: "center"
  },
  statistic: {
    width: scale(12),
    height: scale(12),
  },
  statisticbox: {
    width: scale(16),
    height: scale(16),
  },
  statistic1: {
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

  statusbox: {
    width:scale(320),
    height:scale(110),
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
    width:scale(200),
    height:scale(110),
    resizeMode:"cover",
    // backgroundColor:"green",
    //transform: [{ scale: 2 }],
    alignSelf:"flex-start"
   
  },
  leftcirclebox: {
    //backgroundColor: "red",
    width: scale(40),
    height: scale(40),
    alignSelf: "center",
  },
  img: {
    width: scale(40),
    height: scale(40),

  },
  categorybox: {
    width: scale(328),
    //backgroundColor:"red",

  },
  online: {
    width: scale(328),
    height: scale(30),
    flexDirection: "row",
    justifyContent: "space-between"
  }

})
export default DashboardScreen;