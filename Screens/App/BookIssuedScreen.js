import React from "react";
import { FlatList, Text, View, StyleSheet, Image, SafeAreaView } from 'react-native';
import { TopTabNavigater } from "../../Navigation/App/AppNavigater";





const Item = ({ name }) => {
  return (
    <SafeAreaView>
    <TopTabNavigater /> 

      <View style={styles.item}>
    <View style={styles.box}>
        <Image source={require('../../Assets/images/school.png')} resizeMode='contain' style={{ width: 25, height: 25,}} />
        <Text style={{ color: 'black' }}>{name}</Text>
      </View>
      
        <Text style={{ color: 'black' }}>{'>'}</Text>
      

    </View>
    </SafeAreaView>
  );
}

export default function BookIssuedScreen() {

  const countries = [
    {
      id: '1',
      name: 'Text Books ',
    },
    {
      id: '2',
      name: 'Question Papers',


    },
    {
      id: '3',
      name: 'Novel',
    },

  ]
  const renderItem = ({ item }) => (<Item name={item.name} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={countries}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}

      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 2,
    backgroundColor: '#EFEFEF',
    flex: 1,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    flexDirection: "row",
    justifyContent:"space-between"
  },
  box:{
    flexDirection:"row"
  }
});