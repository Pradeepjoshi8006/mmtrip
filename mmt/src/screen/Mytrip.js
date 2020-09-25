import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Mytrip = () => {
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.text}> MY TRIPS </Text>
            </View>
            <Text>Hello Mytrip!!!</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: 'maroon',
        justifyContent: 'space-between',
        marginTop: 5,
        height: 45
    },
    text: {
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 30,
        alignItems: 'center',
        fontWeight: "bold"
    }
})

export default Mytrip;