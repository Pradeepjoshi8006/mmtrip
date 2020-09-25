import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, AsyncStorage, Alert } from 'react-native';
import { authStack } from '../../navigation/Navigation';
import { phoneAuth } from '../../navigation/Navigation';
import { fire } from '../../config/Fire';
import { tabNavigation } from '../../navigation/Navigation';

const Login = (props) => {
  const [useremail, setUserEmail] = useState('');
  const [userpassword, setUserPassword] = useState('');

  const validation = async () => {
    const emailRegister = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    try {
      if (useremail == '' || userpassword == '') {
        alert('Please fill the details')
      }
      else if (emailRegister.test(useremail) !== true) {
        alert('Please enter valid email address!!')
      }
      else {
        let response = await fire.auth().signInWithEmailAndPassword(useremail, userpassword)
        if (response && response.user) {
          let user = fire.auth().currentUser.uid;
          let useremail = fire.auth().currentUser.email
          if (user) {
            console.log(user);
            console.log(useremail);
            tabNavigation();
          }
        }
        else {
          Alert.alert("Your Email or Password is incorrect.....!!!!")
        }
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.screen}>Sign In</Text>
      <TextInput
        value={useremail}
        placeholder='Enter Email'
        onChangeText={useremail => setUserEmail(useremail)}
        style={styles.textField}
      />
      <TextInput
        value={userpassword}
        placeholder='Enter Password'
        secureTextEntry={true}
        onChangeText={userpassword => setUserPassword(userpassword)}
        style={styles.textField}
      />
      <TouchableOpacity style={styles.buttton} onPress={validation}>
        <Text style={styles.text}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.pressBtn}
        onPress={() => { phoneAuth() }}>
        <Text style={styles.text}>Login with OTP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.pressBtn}
        onPress={() => { authStack() }}>
        <Text style={styles.text}>Don't have an account?  Register</Text>
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
    width: '90%',
    backgroundColor: "white",
    padding: 14,
    marginBottom: 20,
    borderRadius: 30,
  },
  pressBtn: {
    backgroundColor: "red",
    width: '70%',
    borderRadius: 10,
    fontWeight: 'bold',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    height: 55,
  },
  buttton: {
    backgroundColor: "red",
    width: '50%',
    borderRadius: 10,
    fontWeight: 'bold',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    height: 55,
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

export default Login;