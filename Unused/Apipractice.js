import React, { useState } from "react"
import axios from 'axios'
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import Constants from "../Components/Constants"

// API GET 

const APIPRACTICE = () => {

    const [getrequestdata,setGetRequestData] = useState()
    const [getpostdata,setPostData] = useState()

    const apiGetRequest = async () => {
        try {
        const response = await axios.get('https://osms.adef.tech/Parent/Signin',{params: {
            project_id : 'GUID - 32 digit ID'
        }})
        setGetRequestData(response.data)
    } catch (error) {
        console.log('',error);
    }

    // API POST

const apiPostRequest = async () => {
    try {
    const response = await axios.post('https://osms.adef.tech/Parent/Signin',{
        project_id : 'GUID -32 digit ID'
    })
    setPostData(response.data)
} catch (error) {
    console.log(error);

}
        
}
    }
    return(
        <FlatList>
        <View>
            <TouchableOpacity onPress={apiGetRequest}></TouchableOpacity>
            <Text>{getrequestdata}</Text>
        </View>
        </FlatList>
    )

}


export default APIPRACTICE
