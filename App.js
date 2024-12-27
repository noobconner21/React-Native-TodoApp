import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
  }
});
