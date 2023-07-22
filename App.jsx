import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Cabeza from './src/components/Cabeza';
import Timer from './src/components/Timer';

const colors = ['#F7DC6F', '#A2D9CE', '#D7BDE2'];

const App = () => {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60); //25 por 60 me da la cantidad de segundos.
  const [currentTime, setCurrentTime] = useState('POMO' | 'SHORT' | 'BREAK');
  const [isActive, setIsActive] = useState(false);

const iniciarParar=()=>{
  setIsActive(!isActive); 
}



  return (
    <View style={[styles.container, {backgroundColor: colors[currentTime]}]}>
      <Text style={styles.textoPrincipal}>Pomodoro</Text>

      <Cabeza
        setTime={setTime}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
      />

      <Timer time={time} />
      <TouchableOpacity  onPress={iniciarParar}  style={styles.boton}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          {' '}
          {isActive ? 'PARAR' : 'INICIAR'}{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 15,
  },

  textoPrincipal: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },

  bar: {
    backgroundColor: 'green',
  },

  boton: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 15,
    marginTop: 15,
    borderRadius: 10,
  },
});
