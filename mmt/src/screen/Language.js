import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import string from '../component/Language';
import { tabNavigation } from '../navigation/Navigation';

class Language extends React.Component {
    Hindi() {
        string.setLanguage('hi')
        this.setState({});
    }
    English() {
        string.setLanguage('en')
        this.setState({});
    }

    render() {
        return (
            <View>
                <TouchableOpacity style={styles.homeBtn} onPress={() => { tabNavigation() }}>
                  <Text style={styles.homeText}>Home</Text>
                </TouchableOpacity>
                <Button onPress={() => { this.Hindi() }} title='Hindi' />
                <Button onPress={() => { this.English() }} title='English' />
                <Text style={styles.text}>{string.first}</Text>
                <Text style={styles.text}>{string.second}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeBtn: {
        alignItems: 'center',
        margin: 20
    },
    homeText: {
        color: 'blue',
        fontSize: 18
    },
    text: {
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 30,
        color: 'red',
        alignItems: 'center',
        fontWeight: "bold"
    },
})

export default Language;