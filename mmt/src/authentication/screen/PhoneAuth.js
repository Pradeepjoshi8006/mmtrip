import React, { Component } from 'react'
import {StyleSheet,SafeAreaView,TouchableOpacity,View,Text,TextInput} from 'react-native'
import fire from '../../config/Fire';

reVerifier=()=>{
  window.recaptchaVerifier = new fire.auth().RecaptchaVerifier(this.handleSendCode(),
  {
    size: "invisible",
    callback: function (response) {
      console.log("Captcha Resolved");
      this.handleSendCode();
    },
    defaultCountry: "IN",
  }
);
 }
class PhoneAuth extends Component {
  state = {
    phone: '',
    confirmResult: null,
    verificationCode: '',
    userId: '',
    recaptchaVerifier:''
  }

  validatePhoneNumber = () => {
    var number = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/
    return number.test(this.state.phone)
  }
  
 recaptchaVerifier=()=>{
  window.recaptchaVerifier = new fire.auth().RecaptchaVerifier(this.handleSendCode(),
  {
    size: "invisible",
    callback: function (response) {
      console.log("Captcha Resolved");
      this.handleSendCode();
    },
    defaultCountry: "IN",
  }
);
let data=window.recaptchaVerifier;
return(data);
 }
  handleSendCode = () => {
    let appVerifier = this.recaptchaVerifier();
    if (this.validatePhoneNumber()) {
      fire.auth().signInWithPhoneNumber(this.state.phone, appVerifier)
        .then(confirmResult => {
          this.setState({ confirmResult })
        })
        .catch(error => {
          alert(error.message)
          console.log(error)
        })
    } else {
      alert('Invalid Phone Number')
    }
  }
  changePhoneNumber = () => {
    this.setState({ confirmResult: null, verificationCode: '' })
  }

  renderConfirmationCodeView = () => {
    return (
      <View style={styles.verificationView}>
        <TextInput
          style={styles.textInput}
          placeholder='Verification code'
          placeholderTextColor='#eee'
          value={this.state.verificationCode}
          keyboardType='numeric'
          onChangeText={verificationCode => {
            this.setState({ verificationCode })
          }}
          maxLength={6}
        />
        <TouchableOpacity
          style={[styles.themeButton, { marginTop: 20 }]}
          onPress={this.handleVerifyCode}>
          <Text style={styles.themeButtonTitle}>Verify Code</Text>
        </TouchableOpacity>
      </View>
    )
  }

  handleVerifyCode = () => {
    const { confirmResult, verificationCode } = this.state
    if (verificationCode.length == 6) {
      confirmResult.confirm(verificationCode)
        .then(user => {
          this.setState({ userId: user.uid })
          alert(`Verified! ${user.uid}`)
        })
        .catch(error => {
          alert(error.message)
          console.log(error)
        })
    } else {
      alert('Please enter a 6 digit OTP code.')
    }
  }
  
  
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: 'black' }]}>
        <View style={styles.page}>
          <TextInput
            style={styles.textInput}
            placeholder='Phone Number with country code'
            placeholderTextColor='#eee'
            keyboardType='phone-pad'
            value={this.state.phone}
            onChangeText={phone => {
              this.setState({ phone })
            }}
            maxLength={15}
            editable={this.state.confirmResult ? false : true}
          />
        
          <TouchableOpacity
            style={[styles.themeButton, { marginTop: 20 }]}
            onPress={
              this.state.confirmResult ? this.changePhoneNumber : this.handleSendCode}>
            <Text style={styles.themeButtonTitle}>
              {this.state.confirmResult ? 'Change Phone Number' : 'Send Code'}
            </Text>
          </TouchableOpacity>
          {this.state.confirmResult ? this.renderConfirmationCodeView() : null}
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa'
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    marginTop: 10,
    width: '90%',
    height: 40,
    borderColor: '#555',
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 10,
    color: '#fff',
    fontSize: 16
  },
  themeButton: {
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderColor: '#555',
    borderWidth: 2,
    borderRadius: 5
  },
  themeButtonTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  verificationView: {
    width: '100%',
    alignItems: 'center',
    marginTop: 50
  }
})
export default PhoneAuth;