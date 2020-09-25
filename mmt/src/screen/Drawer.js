import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { fire, database } from '../config/Fire';
import Icon from 'react-native-vector-icons/Ionicons';
import ChooseImage from '../component/ChooseImage';
import Modal from 'react-native-modal';
import { RNNDrawer } from 'react-native-navigation-drawer-extension';
import { language, logout, updateProfile } from '../navigation/Navigation';

const Drawer = () => {
  const [email, setEmail] = useState('');
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const [phoneno, setData] = useState('');

  const profile = () => {
    setEmail(fire.auth().currentUser.email)
    const userInfo = fire.auth().currentUser.uid;
    console.log(userInfo);
    database.ref('userData/' + userInfo).on('value', snapshot => {
      var username = (snapshot.val() && snapshot.val().username)
      var phoneno = (snapshot.val() && snapshot.val().phoneno)
      setName(username)
      setData(phoneno)
      console.log(username);
    })
  };
  const openModel = () => {
    setModal(true);
  };

  return (
    <View>
      <ChooseImage />
      <View>
        <Text style={styles.textProfile}>Welcome  {email}</Text>
        <Text style={styles.textProfile}>{name}</Text>
        <Text style={styles.textProfile}>{phoneno}</Text>
      </View>
      <View>
        <Icon.Button
          name='image-outline' size={35} color='white' backgroundColor='maroon'
          onPress={profile}>View Profile
       </Icon.Button>
      </View>
      <View>
      <TouchableOpacity
          onPress={() => {
            updateProfile(), RNNDrawer.dismissDrawer();
          }}>
          <Text style={styles.textUpdate}>Update Profile
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Icon.Button
          name='settings-outline' size={35} color='white' backgroundColor='maroon'
          onPress={() => openModel(true)}>Settings
       </Icon.Button>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            logout(), RNNDrawer.dismissDrawer();
          }}>
          <Text style={styles.textLogout}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Modal
          visible={modal}
          style={styles.modal}>
          <View>
            <TouchableOpacity
              onPress={() => {
                language(), setModal(false), RNNDrawer.dismissDrawer();
              }}>
              <Text style={styles.modalText}> Language English </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                language(), setModal(false), RNNDrawer.dismissDrawer();
              }}>
              <Text style={styles.modalText}> Language Hindi </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  items: {
    flexDirection: 'row',
    backgroundColor: 'maroon',
    justifyContent: 'space-between',
    marginTop: 5,
    height: 45,
  },
  textLogout: {
    fontSize: 20,
    color: 'white',
    flexDirection: 'row',
    backgroundColor: 'orange',
    borderRadius: 10,
    height: 48,
    alignItems: 'center',
    fontWeight: "bold",
    textAlign: 'center'
  },
  textUpdate: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'orange',
    borderRadius: 10,
    fontWeight:'bold',
    height: 48,
    alignItems: 'center',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 30,
    alignItems: 'center',
    fontWeight: "bold"
  },
  button: {
    color: 'red',
    fontSize: 20,
    alignItems: 'center',
    fontWeight: "bold",
    textAlign: 'center'
  },
  modal: {
    top: 114,
    alignSelf: 'flex-end',
    flex: 0.43,
    padding: 10,
    backgroundColor: 'green',
    flex: 0,
    marginTop: 150
  },
  modalText: {
    fontSize: 18,
    color: 'white',
    margin: 4
  },
  textProfile: {
    color: 'red',
    fontSize: 15,
    alignItems: 'center',
    fontWeight: "bold",
    textAlign: 'center'
  },
  textName: {
    color: 'purple',
    fontSize: 20,
    alignItems: 'center',
    fontWeight: "bold",
    textAlign: 'center'
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'maroon',
    justifyContent: 'space-between',
    marginTop: 5,
    height: 45,
    marginRight: 45
  },
  image: {
    height: 150,
    width: 150,
    marginTop: 10,
    marginLeft: 30,
    justifyContent: 'center',
    borderRadius: 100
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Drawer;