import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TopTabNavigater } from '../../Navigation/App/AppNavigater'
import Headers from '../../Components/Headers'

const AssignmentsScreen = () => {
  return (
    <View style={{flex:1}}>
      <Headers name={"Assignments"} clr={"#0F4C75"} background={"white"} clricon={"#0F4C75"} fontw={700} />
        <TopTabNavigater />
    </View>
  )
}

export default AssignmentsScreen

const styles = StyleSheet.create({})