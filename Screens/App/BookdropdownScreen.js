import React, { useState, useMemo } from 'react';
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'
import Modal from 'react-native-modal'
import RadioButtonRN from 'radio-buttons-react-native'
import { Image } from 'react-native-animatable';
import { Calendar } from 'react-native-calendars'
import Headers from '../../Components/Headers';
import Constants, { SpacingSize, moderateScale, scale } from '../../Components/Constants';



const BookdropdownScreen = ({ navigation }) => {

  navigation = useNavigation()

  const data = useMemo(() => ([
    { id: 1, label: 'Text Books', value: '1' },
    { id: 2, label: 'Question Papers', value: '2' },
    { id: 3, label: 'Novel', value: '3' },
  ]
  ), []);

  const data1 = useMemo(() => (
    [
      { Id: 1, label: 'Telugu', value: '1' },
      { Id: 2, label: 'Hindi', value: '2' },
      { Id: 3, label: 'English', value: '3' },
      { Id: 4, label: 'Mathematics', value: '4' },
      { Id: 5, label: 'Social Studies', value: '5' },
      { Id: 6, label: 'Biology', value: '6' },
      { Id: 7, label: 'Chemistry', value: '7' },
      { Id: 8, label: 'Physics', value: '8' },
    ]
  ))

  const [value, setValue] = useState(null);
  const [valueone, setValueOne] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [modalvisible, setModalVisible] = useState(false)
  const [subjectmodalvisible, setSubjectModalVisible] = useState(false)
  const [calendarmodalvisible, setCalendarModalVisible] = useState(false)
  const [requestmodalvisible, setRequestModalVisible] = useState(false)
  const [count, setcount] = useState(0);
  const [booktype, setBookType] = useState('Select Book Type')
  const [subject, setSubject] = useState('Choose a Subject')
  const [request, SetRequest] = useState('Request')
  const [studentclass, setStudentClass] = useState('10th Class')

  const [selected, setSelected] = useState('Pickup a Date');

  console.log(count);
  console.log(selected);
  console.log(booktype);
  console.log(subject);

  //console.log('selecteddate', selected);
  function incrementCount() {
    setcount(count + 1);
  }
  function decrementCount() {
    setcount(count - 1);
  }


  const closeModal = () => {
    setModalVisible(false)
  }

  return (



    <View style={styles.container}>
      <Headers name={"Borrow Book"} clr={"#0F4C75"} background={"white"} clricon={"#0F4C75"} fontw={700} />


      <View style={styles.defalutbox}>
        <Text style={{ color: "#2D2D2D", fontSize: moderateScale(SpacingSize.fontsizeMedium), fontFamily: Constants.PrimaryFont, paddingLeft: SpacingSize.paddingLarge, }}>{studentclass}</Text>
      </View>
      {/* {renderLabel()} */}
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.boxs}>
          <Text style={{ fontSize: moderateScale(SpacingSize.fontsizeMedium), color: "#2D2D2D", paddingLeft: SpacingSize.paddingLarge, fontFamily: Constants.PrimaryFont }}>
            {booktype}</Text>

        </View>
      </TouchableOpacity>
      <Modal
        isVisible={modalvisible}
        scrollHorizontal={false}
        backdropOpacity={0}
        animationIn={'slideInUp'}
        animationInTiming={1000}
        animationOut={'slideOutDown'}
        animationOutTiming={1500}
        onBackButtonPress={closeModal}
      >

        {/*<View style={{ flex: 0.3, backgroundColor: '#FFFFFF', }}>
          <Text style={{ color: "#0F4C75", fontSize: moderateScale(SpacingSize.fontsizeExtraLarge), paddingLeft: SpacingSize.paddingLarge, fontFamily: Constants.PrimaryFont, marginBottom: SpacingSize.marginSmall }}>Choose a Book Type</Text>
          <View style={{}}>
            <RadioButtonRN

              data={data}
              selectedBtn={(e) => { console.log(e), closeModal(), setBookType(e.label) }}
              style={styles.radioStyling}
              box={false}
              activeColor={'#0F4C75'}
              circleSize={moderateScale(SpacingSize.fontsizeLarge)}
              deactiveColor={"#0F4C75"}
              textStyle={{ fontSize: moderateScale(SpacingSize.fontsizeLarge), fontFamily: Constants.PrimaryFont, color: "#000000", }}
              animationTypes={['zoomin']}
              duration={200}
            // boxActiveBgColor={Colors.blue}

            />

          </View>
        </View>

      </Modal>

      <TouchableOpacity onPress={() => setSubjectModalVisible(true)}>
        <View style={styles.boxs2}>
          <Text style={{ fontSize: moderateScale(SpacingSize.fontsizeMedium), color: "#2D2D2D", paddingLeft: SpacingSize.paddingLarge, fontFamily: Constants.PrimaryFont, }}>{subject}</Text>

        </View>
      </TouchableOpacity>
      <Modal
        isVisible={subjectmodalvisible}
        scrollHorizontal={false}
        backdropOpacity={0}
        animationIn={'slideInUp'}
        animationInTiming={1000}
        animationOut={'slideOutDown'}
        animationOutTiming={1500}
        onBackButtonPress={() => setSubjectModalVisible(false)}
  >*/}

        <View style={{ flex: 0.3, backgroundColor: 'white' }}>
          <Text style={{ color: "#0F4C75", fontSize: moderateScale(SpacingSize.fontsizeExtraLarge), paddingLeft: SpacingSize.paddingLarge, fontFamily: Constants.PrimaryFont, marginBottom: SpacingSize.marginSmall }}>Choose a subject</Text>
          <View style={{}}>
            <RadioButtonRN

              data={data1}
              selectedBtn={(e) => { console.log('==================>', e.label), setSubjectModalVisible(false), setSubject(e.label) }}
              style={styles.radioStyling2}
              box={false}
              activeColor={'#0F4C75'}
              circleSize={moderateScale(SpacingSize.fontsizeLarge)}
              deactiveColor={"#0F4C75"}
              textStyle={{ fontSize: moderateScale(SpacingSize.fontsizeLarge), fontFamily: Constants.PrimaryFont, color: '#000000' }}
              animationTypes={['zoomin']}
              duration={200}
            // boxActiveBgColor={Colors.blue}

            />

          </View>
        </View>

      </Modal>

      <View style={styles.twobox}>



        <TouchableOpacity onPress={() => setCalendarModalVisible(true)}>
          <View style={styles.rightbox2}><Text style={{
            alignSelf: "center",
            color: "#2D2D2D", fontSize: moderateScale(SpacingSize.fontsizeMedium), fontFamily: Constants.PrimaryFont
          }}>{selected}</Text>
          </View>
          <Modal
            isVisible={calendarmodalvisible}
            scrollHorizontal={false}
            backdropOpacity={0}
            animationIn={'slideInUp'}
            animationInTiming={1000}
            animationOut={'slideOutDown'}
            animationOutTiming={1500}
            onBackButtonPress={
              () => setCalendarModalVisible(false)}
          >
            <View style={{ flex: 0.2, backgroundColor: '#FFFFFF' }}>
              <Text style={{ color: "#0F4C75", fontSize: moderateScale(SpacingSize.fontsizeExtraLarge), fontFamily: Constants.SecondaryFont, marginBottom: SpacingSize.margingMedium }}>Pick a from date</Text>
              <View style={styles.calbox}>

                <Calendar style={{ borderRadius: moderateScale(10), elevation: 4, width: scale(328), }}

                  onDayPress={day => {
                    setSelected(day.dateString), setCalendarModalVisible(false)
                  }}
                //hideArrows={true}
                //customHeaderTitle={true}

                />
              </View>



            </View>
          </Modal>


        </TouchableOpacity>

        <View style={styles.leftbox}>
        <TouchableOpacity onPress={() => setCalendarModalVisible(true)}>
          <View style={styles.rightbox2}><Text style={{
            alignSelf: "center",
            color: "#2D2D2D", fontSize: moderateScale(SpacingSize.fontsizeMedium), fontFamily: Constants.PrimaryFont
          }}>{selected}</Text>
          </View>
          <Modal
            isVisible={calendarmodalvisible}
            scrollHorizontal={false}
            backdropOpacity={0}
            animationIn={'slideInUp'}
            animationInTiming={1000}
            animationOut={'slideOutDown'}
            animationOutTiming={1500}
            onBackButtonPress={
              () => setCalendarModalVisible(false)}
          >
            <View style={{ flex: 0.2, backgroundColor: '#FFFFFF' }}>
              <Text style={{ color: "#0F4C75", fontSize: moderateScale(SpacingSize.fontsizeExtraLarge), fontFamily: Constants.SecondaryFont, marginBottom: SpacingSize.margingMedium }}>Pick a from date</Text>
              <View style={styles.calbox}>

                <Calendar style={{ borderRadius: moderateScale(10), elevation: 4, width: scale(328), }}

                  onDayPress={day => {
                    setSelected(day.dateString), setCalendarModalVisible(false) 
                    
                  }}
                 
                //hideArrows={true}
                //customHeaderTitle={true}

                />
              </View>



            </View>
          </Modal>


        </TouchableOpacity>


         {/* <TouchableOpacity disabled={count <= 0 ? true : false} onPress={decrementCount}>
            <Text style={{
              color: "#2D2D2D", fontSize: moderateScale(SpacingSize.fontsizeExtraLarge), justifyContent: "center",
              fontWeight: 700
            }}>-</Text></TouchableOpacity>

          <Text style={styles.conutLable}>{count} Days</Text>

          <TouchableOpacity onPress={incrementCount}>
            <Text style={{ color: "#2D2D2D", fontSize: moderateScale(SpacingSize.fontsizeExtraLarge), 
          justifyContent: "center", fontWeight: 700 }}>+</Text></TouchableOpacity>*/}
        </View>
      </View>



      <TouchableOpacity onPress={() => setRequestModalVisible(true)}>
        {/* <TouchableOpacity disabled={booktype && subject !== 'Choose a Subject' ? false : true}  onPress={() => setRequestModalVisible(true)}> */}

        <View style={styles.bottombox2}>
          <Text style={{
            color: '#FFFFFF', alignSelf: "center", fontFamily: Constants.PrimaryFont,
            fontSize: moderateScale(SpacingSize.fontsizeMedium)
          }}>{request}</Text>

        </View>
      </TouchableOpacity>

      <Modal
        isVisible={requestmodalvisible}
        scrollHorizontal={false}
        backdropOpacity={0}
        animationIn={'slideInUp'}
        animationInTiming={1000}
        animationOut={'slideOutDown'}
        animationOutTiming={1500}
        onBackButtonPress={() => setRequestModalVisible(false)}
      >

        <View style={{ backgroundColor: '#FFFFFF' }}>

          <Text style={{
            color: "#0F4C75", fontFamily: Constants.SecondaryFont,
            fontSize: moderateScale(SpacingSize.fontsizeExtraLarge),
            marginBottom: SpacingSize.marginSmall
          }}>Borrow Book Request Created</Text>


          <View styles={styles.picbox}>
            <Image style={styles.pic1box} source={require('../../Assets/images/Rectangle984.png')}></Image>

            <View style={styles.box1}>
              <View><Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge), }}>Admission no:</Text></View>
              <Text style={{ fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge), color: "#303030", marginLeft: SpacingSize.marginSmall }}>1234567</Text>
            </View>
            <View style={styles.box1}>
              <View><Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge), }}>Class:</Text></View>

              <Text style={{ fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge), color: "#303030", marginLeft: SpacingSize.marginSmall }}> {studentclass}</Text>
            </View>
            <View style={styles.box1}>
              <View><Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge), }}>Book Type :</Text></View>

              <Text style={{ fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge), color: "#303030", marginLeft: SpacingSize.marginSmall }}>{booktype}</Text>
            </View>
            <View style={styles.box1}>
              <View><Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge), }}>Subject:</Text></View>

              <Text style={{ fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge), color: "#303030", marginLeft: SpacingSize.marginSmall }}> {subject}</Text>
            </View>
            <View style={styles.box1}>
              <View><Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge), }}>Pick up date :</Text></View>

              <Text style={{ fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge), color: "#303030", marginLeft: SpacingSize.marginSmall }}> {selected}</Text>
            </View>
            <View style={styles.box1}>
              <View><Text style={{ color: "#303030", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge), }}>Days limitation:</Text></View>

              <Text style={{ fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge), color: "#303030", marginLeft: SpacingSize.marginSmall }}> {count} Days </Text>
            </View>


            <Text style={{ fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge), color: "#F0695D", }}>Note :"IF the book is available to pick up Please pick on (Jan 12 2024) 9 am - 4pm ",</Text>



            <View style={styles.onbox}>

              <View style={styles.rightbox}>
                <View style={styles.redbox}></View>
                <View style={styles.rightboxwithtext}>
                  <View style={styles.righcricletbox}>
                    <Image style={{ width: scale(24), height: scale(24), alignSelf: "center", alignContent: "center" }} source={require('../../Assets/images/occupation1.png')}></Image>

                  </View>
                  <Text onTouchEnd={() => navigation.navigate('OngoingScreen')}
                    style={{ color: 'black', paddingLeft: SpacingSize.paddingMedium, alignSelf: "center", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeMedium) }}>On Going</Text>
                </View>
              </View>

              <View onTouchEnd={() => navigation.navigate('NewrequestScreen')} style={styles.bottombox}>

                <View style={styles.bottomboxwithtext}>
                  <View style={styles.bottomcirclebox}><Image style={{ width: scale(24), height: scale(24), alignSelf: "center", alignContent: "center", }} source={require('../../Assets/images/reserved1.png')}></Image>
                  </View>
                  <Text style={{ color: '#FFFFFF', paddingLeft: SpacingSize.paddingMedium, alignSelf: "center", fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeMedium) }}>New Request</Text>
                </View>

                {/*<Text style={{ color: '#FFFFFF', alignSelf: "center", paddingRight: "1%" }}>{'>'}</Text>*/}


              </View>


            </View>
          </View>
        </View>

      </Modal>


    </View>


  )
}

export default BookdropdownScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center"
  },

  defalutbox: {
    width: scale(328),
    height: scale(58),
    backgroundColor: "#F2F9FA",
    justifyContent: "center",
    borderRadius: moderateScale(8),
    padding: SpacingSize.paddingMedium,
    borderWidth: 0.25,
    margin: SpacingSize.margingMedium,
    borderColor: "#0F4C75"

  },
  bottombox2: {
    width: scale(328),
    height: scale(62),
    alignSelf: "center",
    justifyContent: "space-evenly",
    alignItems: 'center',
    flexDirection: "row",
    marginVertical: SpacingSize.marginSmall,
    borderRadius: moderateScale(8),
    backgroundColor: "#0F4C75",
    shadowRadius: 10,
    elevation: 3,
    //borderWidth:0.25,
  },
  twobox: {
    width: scale(328),
    height: scale(58),
    flexDirection: "row",
    //backgroundColor:"red",
    justifyContent: "space-between"
  },
  rightbox2: {
    width: scale(158),
    height: scale(58),
    //backgroundColor:"pink",
    borderRadius: moderateScale(8),
    borderWidth: 0.25,
    justifyContent: "center"
  },
  leftbox: {
    width: scale(158),
    height: scale(58),
    //backgroundColor:"pink",
    borderRadius: moderateScale(8),
    borderWidth: 0.25,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",

  },
  radioStyling: {


    justifyContent: "center",
  },

  conutLable: {

    fontSize: moderateScale(SpacingSize.fontsizeExtraLarge),
    fontFamily: Constants.PrimaryFont,
    color: "#2D2D2D",
    alignItems: "center",
    justifyContent: "center",


  },
  boxs: {
    width: scale(328),
    height: scale(58),
    borderRadius: moderateScale(8),
    borderWidth: moderateScale(0.25),
    marginBottom: SpacingSize.margingMedium,

    justifyContent: "center"
  },
  boxs2: {
    width: scale(328),
    height: scale(58),
    borderRadius: moderateScale(8),
    borderWidth: moderateScale(0.25),
    marginBottom: SpacingSize.margingMedium,
    justifyContent: "center"
  },
  radioStyling2: {
    justifyContent: "center",

  },

  calbox: {
    width: scale(328),

    //backgroundColor: "red",
    marginBottom: SpacingSize.margingMedium,
    alignSelf: "center"

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
  },
  rightbox: {
    width: scale(158),
    height: scale(62),
    backgroundColor: "#B9E3BF",
    borderRadius: moderateScale(8),
    elevation: 3,
    justifyContent: "center",
    paddingBottom: SpacingSize.paddingMedium,


  },
  redbox: {
    width: scale(10),
    height: scale(10),
    backgroundColor: "red",
    alignSelf: "flex-end",
    borderRadius: moderateScale(25),
    marginRight: SpacingSize.marginSmall
  },
  rightboxwithtext: {
    //backgroundColor:"pink",
    alignSelf: "center",
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: "center",
    width: scale(110),
    height: scale(25),

  },
  righcricletbox: {
    backgroundColor: "#8ED2D8",
    width: scale(42),
    height: scale(42),
    borderRadius: moderateScale(25),
    justifyContent: "center"

  },
  bottombox: {
    width: scale(158),
    height: scale(62),
    alignSelf: "center",
    alignItems: 'center',
    flexDirection: "row",
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
    justifyContent: "center",
    marginLeft: SpacingSize.marginSmall

  },
  bottomboxwithtext: {
    flexDirection: "row",
    paddingLeft: SpacingSize.paddingMedium,
  },
  onbox: {
    flexDirection: "row",
    width: scale(328),
    height: scale(62),
    //backgroundColor: "red",
    marginBottom: SpacingSize.marginSmall,
    justifyContent: "space-between"
  }
})

{/* <Dropdown

style={[styles.dropdown, isFocus && { borderColor: '#0F4C75' }]}
placeholderStyle={styles.placeholderStyle}
selectedTextStyle={styles.selectedTextStyle}
inputSearchStyle={styles.inputSearchStyle}
iconStyle={styles.iconStyle}
data={data}
search
maxHeight={300}
labelField="label"
valueField="value"
placeholder={!isFocus ? 'Select' : '...'}
searchPlaceholder="Search..."
value={value}
onFocus={() => { setIsFocus(true), setModalVisible(true) }}
onBlur={() => setIsFocus(false)}
onChange={item => {
  setValue(item.value);
  setIsFocus(false);
}}
/*renderLeftIcon={() => (
<AntDesign
  style={styles.icon}
  color={isFocus ? 'blue' : 'black'}
  name="Safety"
  size={20}
/>
)}*/
  /> */
}