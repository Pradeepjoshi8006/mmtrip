import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Navigation } from 'react-native-navigation';
import ChooseImage from '../../config/ChooseImage';
import { fire, database } from '../../config/Fire';

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');
    const [phoneno, setPhoneNo] = useState('');

    const validation = (error) => {
        const emailRegister = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        try {
            if (email == '' || password == '' || username == '') {
                Alert.alert('Please fill the details')
            }
            else if (emailRegister.test(email) !== true) {
                alert('Please enter valid email address!!')
            }
            else {
                error.preventDefault();
                fire.auth().createUserWithEmailAndPassword(email, password)
                    .then((userInfo) => {
                        database.ref('userData/' + userInfo.user.uid).set({
                            username: username,
                            phoneno: phoneno,
                            uri: '',
                        })
                        console.log(userInfo)
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                Alert.alert("You are Sucessfully Registered!!!!")
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.screen}>Sign Up</Text>
            <TextInput
                value={username}
                placeholder='Enter Name'
                onChangeText={username => setUserName(username)}
                style={styles.textField}
            />
            <TextInput
                value={email}
                placeholder='Enter Email'
                onChangeText={email => setEmail(email)}
                style={styles.textField}
            />
            <TextInput
                value={phoneno}
                placeholder='Enter Mobile No'
                onChangeText={phoneno => setPhoneNo(phoneno)}
                style={styles.textField}
            />
            <TextInput
                value={password}
                placeholder='Enter Password'
                secureTextEntry={true}
                onChangeText={password => setPassword(password)}
                style={styles.textField}
            />
            <TouchableOpacity style={styles.buttton} onPress={validation}>
                <Text style={styles.text}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pressBtn}
                onPress={() => {
                    Navigation.pop(props.componentId,
                        {
                            component: {
                                name: 'Login',
                            }
                        }
                    )
                }}>
                <Text style={styles.text}>Move To Login Page</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    textField: {
        width: '80%',
        backgroundColor: "white",
        padding: 14,
        marginBottom: 15,
        borderRadius: 30,
    },
    buttton: {
        backgroundColor: "red",
        width: '45%',
        borderRadius: 10,
        fontWeight: 'bold',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        height: 55,
    },
    pressBtn: {
        width: "60%",
        backgroundColor: "red",
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    screen: {
        color: 'white',
        fontSize: 38,
        fontWeight: 'bold',
        marginBottom: 50,
        marginRight: '50%',
    },
    text: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export default Signup;