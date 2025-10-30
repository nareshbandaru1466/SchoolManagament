import React,{useState} from 'react';
import { View, TouchableOpacity,Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Modal from 'react-native-modal';
import Constants from '../../Components/Constants';

const CalendarScreen =()=> {

const [showModal, setModal] = useState(false);
const [showcalendar,setShowCalendar] = useState(false)

const toggleCalendar = () => {
    setShowCalendar(!showcalendar)
    console.log('PRESSED');
}

return(
//     <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>

//         <TouchableOpacity onpress={toggleCalendar}
//         style={{ backgroundColor:'black',borderRadius:10,alignSelf:'center',justifyContent: 'flex-end',
//     padding:10,width:200,alignItems:"center"}}>
//     <Text style={{color:"white", fontSize:22}}>Show calendar</Text>
//     </TouchableOpacity>
//     <Modal onBackButtonPress={() => setShowCalendar(false)} isVisible={showcalendar == true ? true : false}  animationType='fade'>
//         <Calendar  style={{borderRadius:10, elevation:4, margin:40}}/>
//     </Modal>
//     {/* <TouchableOpacity onPress={toggleCalendar} style={{backgroundColor: 'blue',height: '20%'}}><Text>Press</Text></TouchableOpacity> */}
//  </View>
<View style={{flex: 1}}>

<TouchableOpacity style={{alignSelf: 'center', borderRadius: 35, width: Constants.Width / 1.4, 
height: Constants.Height / 15,borderColor: 'black', borderWidth: 1.5, alignItems: 'center', 
justifyContent: 'center'}} 
onPress={toggleCalendar}><Text style={{color: 'black'}}>Jan 1</Text></TouchableOpacity>
<Modal style={{ alignItems: 'flex-start', justifyContent: 'flex-start'}} 
backdropOpacity={0} onBackButtonPress={() => setShowCalendar(false)} isVisible={showcalendar == true ? true : false}  animationType='fade'>
<Calendar  style={{borderRadius:10, elevation:4, width:328, marginTop:50}}

hideArrows={true}
customHeaderTitle={true}


/>
</Modal>
{/* <TouchableOpacity onPress={toggleCalendar} style={{backgroundColor: 'blue',height: '20%'}}><Text>Press</Text></TouchableOpacity> */}
</View>
)
}

export default CalendarScreen

const styles = StyleSheet.create({});

