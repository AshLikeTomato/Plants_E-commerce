import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';



export default function LoginScreen() {
    return(
        <View >
            <Text >Planto E-commerce</Text>
            <Text> Buy and sell your babies never easy like this!</Text>
            <TouchableOpacity onPress={()=>console.log("Login")}>
                <Text>Get started </Text>
            </TouchableOpacity>
        </View>
    )
}
