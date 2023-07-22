import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Timer = ({time}) => {

    const formatearTime=`${Math.floor(time/60).toString().padStart(2,'0')}: ${(time % 60).toString().padStart(2,'0')}`


  return (
    <View style={styles.container}  >
      <Text  style={styles.timestilo}  >{formatearTime} </Text>
    </View>
  )
}

export default Timer

const styles = StyleSheet.create({

    container: {
        flex: 0.4,
        backgroundColor: '#F2F2F2',
        padding: 15,
        borderRadius:15,
    },

    timestilo: {
        fontSize: 80,
        fontWeight: 'bold',
        textAlign:'center',
        color: 'black'

    }


})