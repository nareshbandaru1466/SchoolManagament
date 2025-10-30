import { Image, SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View ,FlatList} from 'react-native'
import React from 'react'
import { AppNavigator} from './src/Navigation/App/AppNavigater'
import { NavigationContainer } from '@react-navigation/native'
import { AuthNavigator } from './src/Navigation/Auth/AuthNavigater'
import parent from '../osmsparent/src/Screens/Auth/Parent'
import  SigninScreen from './src/Screens/Auth/SigninScreen'
import { BorrowScreen} from'./src/Screens/App/BorrowScreen'
import Library from './src/Screens/App/LibraryScreen'
import BookIssuedScreen from './src/Screens/App/BookIssuedScreen'
import AssignmentsScreen from './src/Screens/App/AssignmentsScreen'
import { TopTabNavigater } from './src/Navigation/App/AppNavigater'
import BorrowbookScreen from './src/Screens/App/BorrowbookScreen'
import NewrequestScreen from './src/Screens/App/NewrequestScreen'
import DailydairyScreen from './src/Screens/App/DailydairyScreen'
import DailychoosemonthScreen from './src/Screens/App/DailychoosemonthScreen'
import BorrowbookrequestaccpetScreen from './src/Screens/App/BorrowbookrequestaccpetScreen'
import calendarScreen from './src/Screens/App/CalendarScreen'
import CalendarScreen from './src/Screens/App/CalendarScreen'
import Calendartest from './src/Screens/App/Calendartest'
import FeeinfoScreen from './src/Screens/App/FeeinfoScreen'
import Parent from '../osmsparent/src/Screens/Auth/Parent'






const App = () => {
  return (
  <NavigationContainer>  
  <AppNavigator/>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})