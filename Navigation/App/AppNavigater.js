import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Parent from "../../Screens/Auth/Parent";
import Teacher from "../../Screens/Auth/Teacher";

import { verticalScale, moderateScale, scale } from '../../Components/Constants';
import { createStackNavigator } from "@react-navigation/stack";
import SigninScreen from "../../Screens/Auth/SigninScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CompletedScreen from "../../Screens/App/CompletedScreen";
import IncompletedScreen from "../../Screens/App/IncompletedScreen";
import BookIssuedScreen from "../../Screens/App/BookIssuedScreen"
import HomeScreen from '../../../src/Screens/App/HomeScreen';
import SearchScreen from '../../../src/Screens/App/SearchScreen';
import NotificationScreen from '../../../src/Screens/App/NotificationScreen';
import ReportCardScreen from '../../../src/Screens/App/ReportCardScreen';
import ProfileScreen from '../../../src/Screens/App/ProfileScreen';
import React from 'react';
import { View, Text, Image } from 'react-native';
import HomeIcon from 'react-native-vector-icons/AntDesign'
import SearchIcon from 'react-native-vector-icons/AntDesign'
import NotificationIcon from 'react-native-vector-icons/MaterialIcons';
import ProfileIcon from 'react-native-vector-icons/FontAwesome';
import AssignmentsScreen from "../../Screens/App/AssignmentsScreen";
import BorrowbookScreen from "../../Screens/App/BorrowbookScreen";
import LibraryScreen from "../../Screens/App/LibraryScreen";
import BorrowScreen from "../../Screens/App/BorrowScreen";
import NewrequestScreen from "../../Screens/App/NewrequestScreen";
import BorrowBHScreen from "../../Screens/App/BorrowBHScreen";
import DashboardScreen from "../../Screens/App/DashboardScreen";
import NotificationdescriptionScreen from "../../Screens/App/NotificationdescriptionScreen";
import MondayScreen from "../../Screens/App/MondayScreen";
import TimetableScreen from "../../Screens/App/TimetableScreen";
import TuesdayScreen from "../../Screens/App/TuesdayScreen";
import WednesadyScreen from "../../Screens/App/WednesadyScreen";
import ThursdayScreen from "../../Screens/App/ThursdayScreen";
import FridayScreen from "../../Screens/App/FridayScreen";
import SaturdayScreen from "../../Screens/App/SaturdayScreen";
import OngoingScreen from "../../Screens/App/OngoingScreen";
import NewrequestreserveScreen from "../../Screens/App/NewrequestreserveScreen";
import ReserveScreen from "../../Screens/App/ReserveScreen";
import ReservebookScreen from "../../Screens/App/ReservebookScreen";
import ReservehistoryScreen from "../../Screens/App/ReservehistoryScreen";
import OngoingreserveScreen from "../../Screens/App/OngoingreserveScreen";
import AttendanceScreen from "../../Screens/App/AttendanceScreen";
import FeeScreen from "../../Screens/App/FeeScreen";
import FeesecondScreen from "../../Screens/App/FeesecondScreen";
import FeepaymentScreen from "../../Screens/App/FeepaymentScreen";
import EventcalenderScreen from "../../Screens/App/EventcalenderScreen";
import DailydairyScreen from "../../Screens/App/DailydairyScreen";
import DailychoosemonthScreen from "../../Screens/App/DailychoosemonthScreen";
import AtScreen from "../../Screens/App/AtScreen";
import AtchoosemonthScreen from "../../Screens/App/AtchoosemonthScreen";
import BookdropdownScreen from "../../Screens/App/BookdropdownScreen";
import BorrowbookrequestaccpetScreen from "../../Screens/App/BorrowbookrequestaccpetScreen";
import BorrowbookrequestdeniedScreen from "../../Screens/App/BorrowbookrequestdeniedScreen";
import BorrowBH2Screen from "../../Screens/App/BorrowBH2Screen";
import ReserverequestacceptedScreen from "../../Screens/App/ReserverequestacceptedScreen";
import ReserverequestdeniedScreen from "../../Screens/App/ReserverequestdeniedScreen";
import Reserveh2Screen from "../../Screens/App/Reserveh2Screen";
import ReservenewrequestScreen from "../../Screens/App/ReservenewrequestScreen";
import ReserveBookdropdownScreen from "../../Screens/App/ReserveBookdropdownScreen";
import FeeinfoScreen from "../../Screens/App/FeeinfoScreen";
import Constants, { SpacingSize } from "../../Components/Constants";









const Top = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const LibraryStack = createStackNavigator();
const BorrowBookStack = createStackNavigator();
const DashboardStack = createStackNavigator()


const HomeStackNav = ({ navigation }) => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: true }}>

      <HomeStack.Screen name={'DashboardScreen'} component={DashboardScreen} />
      <HomeStack.Screen name={'AssignmentsScreen'} component={AssignmentsScreen} />
      <HomeStack.Screen name={'HomeScreen'} component={HomeScreen} />
      <HomeStack.Screen name={'NotificationScreen'} component={NotificationScreen} />
      <HomeStack.Screen name={'LibraryScreen'} component={LibraryScreen} />
      <HomeStack.Screen name={'BorrowbookScreen'} component={BorrowbookScreen} />
      <HomeStack.Screen name={'NewrequestScreen'} component={NewrequestScreen} />
      <HomeStack.Screen name={'BorrowScreen'} component={BorrowScreen} />
      <HomeStack.Screen name={'BorrowBHScreen'} component={BorrowBHScreen} />
      <HomeStack.Screen name={'NotificationdescriptionScreen'} component={NotificationdescriptionScreen} />
      <HomeStack.Screen name={'TimetableScreen'} component={TimetableScreen} />
      <HomeStack.Screen name={'MondayScreen'} component={MondayScreen} />
      <HomeStack.Screen name={"OngoingScreen"} component={OngoingScreen} />
      <HomeStack.Screen name={'NewrequestreserveScreen'} component={NewrequestreserveScreen} />
      <HomeStack.Screen name={'OngoingreserveScreen'} component={OngoingreserveScreen} />
      <HomeStack.Screen name={'ReserveScreen'} component={ReserveScreen} />
      <HomeStack.Screen name={'ReservebookScreen'} component={ReservebookScreen} />
      <HomeStack.Screen name={'ReservehistoryScreen'} component={ReservehistoryScreen} />
      <HomeStack.Screen name={'AttendanceScreen'} component={AttendanceScreen} />
      <HomeStack.Screen name={'FeeScreen'} component={FeeScreen} />
      <HomeStack.Screen name={'FeesecondScreen'} component={FeesecondScreen} />
      <HomeStack.Screen name={'FeepaymentScreen'} component={FeepaymentScreen} />
      <HomeStack.Screen name={'EventcalenderScreen'} component={EventcalenderScreen} />
      <HomeStack.Screen name={'DailydairyScreen'} component={DailydairyScreen} />
      <HomeStack.Screen name={'DailychoosemonthScreen'} component={DailychoosemonthScreen} />
      <HomeStack.Screen name={"AtScreen"} component={AtScreen} />
      <HomeStack.Screen name={'AtchoosemonthScreen'} component={AtchoosemonthScreen} />
      <HomeStack.Screen name={'BookdropdownScreen'} component={BookdropdownScreen} />
      <HomeStack.Screen name={'BorrowbookrequestaccpetScreen'} component={BorrowbookrequestaccpetScreen} />
      <HomeStack.Screen name={'BorrowbookrequestdeniedScreen'} component={BorrowbookrequestdeniedScreen} />
      <HomeStack.Screen name={'BorrowBH2Screen'} component={BorrowBH2Screen} />
      <HomeStack.Screen name={'ReserverequestacceptedScreen'} component={ReserverequestacceptedScreen} />
      <HomeStack.Screen name={'ReserverequestdeniedScreen'} component={ReserverequestdeniedScreen} />
      <HomeStack.Screen name="Reserveh2Screen" component={Reserveh2Screen} />
      <HomeStack.Screen name="ReservenewrequestScreen" component={ReservenewrequestScreen} />
      <HomeStack.Screen name="ReserveBookdropdownScreen" component={ReserveBookdropdownScreen} />
      <HomeStack.Screen name="FeeinfoScreen" component={FeeinfoScreen} />
      



    </HomeStack.Navigator>
  )
}


const NotificationStackNav = ({ navigation }) => {
  return (
    <NotificationStack.Navigator screenOptions={{ headerShown: false }}>

      <NotificationStack.Screen name={'NotificationScreen'} component={NotificationScreen} />
      <NotificationStack.Screen name={'NotificationdescriptionScreen'} component={NotificationdescriptionScreen} />

      </NotificationStack.Navigator>
  )
}

{/*const LibraryStackNav = ({navigation}) => {
  return(
  <LibraryStack.Navigator screenOptions={{headerShown : true}}>

      <LibraryStack.Screen name={'Library'} component={LibraryScreen} />
      <LibraryStack.Screen name={'HomeScreen'} component={HomeScreen} />
      <LibraryStack.Screen name={'BorrowScreen'} component={BorrowScreen}/>
      <LibraryStack.Screen name={'BorrowbookScreen'} component={BorrowbookScreen}/>
      <LibraryStack.Screen name={'NewrequestScreen'} component={NewrequestScreen}/>
      <LibraryStack.Screen name={'BorrowBHScreen'} component={BorrowBHScreen}/>
      <LibraryStack.Screen name={"OngoingScreen"} component={OngoingScreen}/>
      <LibraryStack.Screen name={"BorrowBH2Screen"} component={BorrowBH2Screen}/>
      <LibraryStack.Screen name={'NewrequestreserveScreen'} component={NewrequestreserveScreen}/>
      <LibraryStack.Screen name={'OngoingreserveScreen'} component={OngoingreserveScreen}/>
      <LibraryStack.Screen name={'ReserveScreen'} component={ReserveScreen}/>
      <LibraryStack.Screen name={'ReservebookScreen'} component={ReservebookScreen}/>
      <LibraryStack.Screen name={'ReservehistoryScreen'} component={ReservehistoryScreen}/>
      

  </LibraryStack.Navigator>
  )
}*/}

const BorrowbookStackNav = ({ navigation }) => {
  return (
    <BorrowBookStack.Navigator>
      <BorrowBookStack.Screen name="BorrowbookScreen" component={BorrowbookScreen} options={{ headerShown: false }} />
      <BorrowBookStack.Screen name="NewrequestScreen" component={NewrequestScreen} options={{ headerShown: false }} />
      <BorrowBookStack.Screen name="BorrowBHScreen" component={BorrowBHScreen} options={{ headerShown: false }} />
      
    </BorrowBookStack.Navigator>
  )
}

export const AppNavigator = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen name="Home" component={HomeStackNav} options={{
        tabBarActiveTintColor: '#009572',
        tabBarInactiveTintColor: '#9b9b9b',
        unmountOnBlur: true,
        headerShown: false, tabBarIcon: (tabInfo) => {
          return (
            // <Image source={require('../../Assets/images/home.png')} 
            // style={{ height: 20, width: 18, tintColor: tabInfo.focused ? '#009572' : '#9b9b9b' }} />
            <HomeIcon name='home' size={20} style={{ color: 'black' }} />
          )
        }
      }} />
      <Bottom.Screen name="Search" component={SearchScreen} options={{
        tabBarActiveTintColor: '#009572',
        tabBarInactiveTintColor: '#9b9b9b',
        unmountOnBlur: true,
        headerShown: false, tabBarIcon: (tabInfo) => {
          return (
            // <Image source={require('../../Assets/images/home.png')} 
            // style={{ height: 20, width: 18, tintColor: tabInfo.focused ? '#009572' : '#9b9b9b' }} />
            <SearchIcon name='search1' size={20} style={{ color: 'black' }} />
          )
        }
      }} />
      <Bottom.Screen name="Notification" component={NotificationScreen} options={{
        tabBarActiveTintColor: '#009572',
        tabBarInactiveTintColor: '#9b9b9b',
        unmountOnBlur: true,
        headerShown: false, tabBarIcon: (tabInfo) => {
          return (
            // <Image source={require('../../Assets/images/home.png')} 
            // style={{ height: 20, width: 18, tintColor: tabInfo.focused ? '#009572' : '#9b9b9b' }} />
            <NotificationIcon name='notifications-none' size={20} style={{ color: 'black' }} />
          )
        }
      }} />
      <Bottom.Screen name="Report Card" component={ReportCardScreen} options={{
        tabBarActiveTintColor: '#009572',
        tabBarInactiveTintColor: '#9b9b9b',
        unmountOnBlur: true,
        headerShown: false, tabBarIcon: (tabInfo) => {
          return (
            <Image source={require('../../Assets/images/reportcard.png')}
              style={{ height: 20, width: 18, tintColor: tabInfo.focused ? '#00000' : '#000000' }} />
            // <HomeIcon name='home' size={20} style={{color: 'black'}}/>
          )
        }
      }} />
      <Bottom.Screen name="Profile" component={ProfileScreen} options={{
        tabBarActiveTintColor: '#009572',
        tabBarInactiveTintColor: '#9b9b9b',
        unmountOnBlur: true,
        headerShown: false, tabBarIcon: (tabInfo) => {
          return (
            // <Image source={require('../../Assets/images/home.png')} 
            // style={{ height: 20, width: 18, tintColor: tabInfo.focused ? '#009572' : '#9b9b9b' }} />
            <ProfileIcon name='user-o' size={20} style={{ color: 'black' }} />
          )
        }
      }} />
    </Bottom.Navigator>
  );
}

export const TopTabNavigater = () => {
  return (
    <Top.Navigator>
      <Top.Screen name='Completed' component={CompletedScreen} options={{
        tabBarLabel: 'Completed',
        tabBarLabelStyle: { textTransform: 'none', fontFamily: Constants.SecondaryFont, fontSize: moderateScale(SpacingSize.fontsizeExtraLarge) }
      }} />
      <Top.Screen name='Incompleted' component={IncompletedScreen} options={{
        tabBarLabel: 'In-Completed',
        tabBarLabelStyle: { textTransform: 'none', fontFamily: Constants.SecondaryFont, fontSize: moderateScale(SpacingSize.fontsizeExtraLarge) }
      }} />
    </Top.Navigator>
  )
}
export const TopTabBorrowbookNavigater = () => {
  return (
    <Top.Navigator>

      <Top.Screen name='Borrow Book' component={BorrowbookScreen} options={{
        tabBarLabel: 'Borrow Book',
        tabBarLabelStyle: { textTransform: 'none', fontFamily: Constants.SecondaryFont,fontSize:moderateScale(SpacingSize.fontsizeExtraLarge) }
      }} />
      <Top.Screen name='Reserve Book' component={ReservebookScreen} options={{
        tabBarLabel: 'Reserve Book',
        tabBarLabelStyle: { textTransform: 'none',fontFamily: Constants.SecondaryFont,fontSize:moderateScale(SpacingSize.fontsizeExtraLarge) }
      }} />

    </Top.Navigator>
  )
}
export const TopTabdaysNavigater = () => {
  return (

    <Top.Navigator>


      <Top.Screen name='MondayScreen' component={MondayScreen} options={{
        tabBarLabel: 'Mon',
        tabBarLabelStyle: { textTransform: 'none', fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge) }
      }} />

      <Top.Screen name='TuesdayScreen' component={TuesdayScreen} options={{
        tabBarLabel: 'Tue',
        tabBarLabelStyle: { textTransform: 'none', fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge) }
      }} />

      <Top.Screen name='WednesadyScreen' component={WednesadyScreen} options={{
        tabBarLabel: 'Wed',
        tabBarLabelStyle: { textTransform: 'none', fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge), }
      }} />

      <Top.Screen name='ThursdayScreen' component={ThursdayScreen} options={{
        tabBarLabel: 'Thu',
        tabBarLabelStyle: { textTransform: 'none', fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge), }
      }} />

      <Top.Screen name='FridayScreen' component={FridayScreen} options={{
        tabBarLabel: 'Fri',
        tabBarLabelStyle: { textTransform: 'none', fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge), }
      }} />

      <Top.Screen name='SaturdayScreen' component={SaturdayScreen} options={{
        tabBarLabel: 'Sat',
        tabBarLabelStyle: { textTransform: 'none', fontFamily: Constants.PrimaryFont, fontSize: moderateScale(SpacingSize.fontsizeLarge), }
      }} />



    </Top.Navigator>



  )
}


