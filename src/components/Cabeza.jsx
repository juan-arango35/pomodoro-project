import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const options = ['Pomodoro', 'Short Break', 'Long Break'];

const Cabeza = ({setTime, currentTime, setCurrentTime}) => {
  const handlePress = index => {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  };

  return (
    <View style={{flexDirection: 'row'}}>
      {options.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(index)}
          style={[
            styles.itemStyle,
             currentTime !== index && {borderColor: 'transparent'},
             ]}>
          <Text style={{fontWeight: 'bold' , color: 'blue'}}  > {item} </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Cabeza;

const styles = StyleSheet.create({
  itemStyle: {
    width: '33%',
    borderWidth: 3,
    padding: 5,
    borderRadius: 10,
    borderColor: 'white',
    marginVertical: 20
  },
});
