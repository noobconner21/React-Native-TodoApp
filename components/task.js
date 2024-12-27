import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const task = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.left}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:'#FFF',
        padding:15,
        borderRadius:10,
        marginBottom:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginLeft:20,
        marginRight:20,
    },
    left:{
        flexDirection:'row',
        alignContent:'center',
        flexWrap:'wrap',
    },
    square:{
        width:24,
        height:24,
        backgroundColor:'#55BCF6',
        opacity:0.4,
        borderRadius:5,
        marginRight:15,
    },
    text:{
        maxWidth:'80%',


    },
    circular:{
        width:12,
        height:12,
        borderColor:'#55BCF6',
        borderWidth:2,
        borderRadius:5,

    },

});


export default task;