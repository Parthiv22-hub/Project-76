import React, { Component } from 'react';
import { Text,View,TouchableOpacity,StyleSheet,TextInput } from 'react-native';

export default class HomeScreen extends Component{
    
    render()
    {
        return(
            <View style ={{
                flex:1,
                justifyContent:"center",
                alignItems:"center"
            }}>
                <Text> HomeScreen </Text>
            </View>
        )
    }
}