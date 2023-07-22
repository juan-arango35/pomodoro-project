import {StyleSheet, Text, View, Button, StatusBar} from 'react-native';
import React, { useState } from 'react';
import Cabeza from './src/components/Cabeza';


const colors = ['#F7DC6F', '#A2D9CE', '#D7BDE2'];

const App = () => {
  const [isWorking, setIsWorking] = useState(false) ; 
  const [time, setTime] = useState(25 * 60)//25 por 60 me da la cantidad de segundos.
  const [currentTime, setCurrentTime] = useState('POMO' | 'SHORT' | 'BREAK')


  return (
    <View style={[styles.container, {backgroundColor: colors[currentTime]}]}>
      <Text style={styles.textoPrincipal}>Pomodoro</Text>
      <Text style={styles.textoPrincipal}>{time}</Text>
      
      <Cabeza setTime={setTime} currentTime={currentTime} setCurrentTime={setCurrentTime} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    
  },

  textoPrincipal: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },

  bar: {
    backgroundColor: 'green',
  },
});
