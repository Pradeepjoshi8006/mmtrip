import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Tripideas =()=>{
    return(
        <View>
             <View style={styles.header}>
          <Text style={styles.text}> TRIP IDEAS </Text>
          </View>
            <Text>Hello Tripideas!!!</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: 'maroon',
        justifyContent: 'space-between',
        marginTop: 5,
        height: 45
      },
      text:{
          textAlign:'center',
          justifyContent:'center',
          color:'white',
          fontSize:30,
          alignItems:'center',
          fontWeight: "bold"
      }

})

export default Tripideas;