import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/task';


export default function App() {
  return (
    <View style={styles.container}>

      {/* Todo section */}

      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
      </View>
      <View style={styles.item}>

        <Task text={'Task1'}/>
        <Task text={'Task2'}/>

      </View>

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}>

        <TextInput style={styles.input} placeholder='Write a Task'/>
        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
        
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold'
  },
  item:{
    marginTop:30,
  },

  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    paddingHorizontal:20,
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    width:250,
    height:50,
    backgroundColor:'#ffffff',
    borderRadius:50,
    borderColor:'#C0C0C0',
    borderWidth:1,

  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#ffffff',
    borderRadius:50,
    borderColor:'#C0C0C0',
    // alignItems:'center',
    justifyContent:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,

  },
  addText:{
    textAlign:'center',
  },
});
