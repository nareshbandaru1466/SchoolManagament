import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TopTabBorrowbookNavigater } from '../../Navigation/App/AppNavigater'
import Headers from '../../Components/Headers'

const BorrowScreen = () => {
  return (
    <View style={{flex:1}}>
      <Headers name={"Borrow Book"} clr={"#0F4C75"} background={"white"} clricon={"#0F4C75"} fontw={700} />
      <TopTabBorrowbookNavigater/>
    </View>
  )
}

export default BorrowScreen

const styles = StyleSheet.create({})