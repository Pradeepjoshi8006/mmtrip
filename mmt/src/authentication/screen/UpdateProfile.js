import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button, Alert} from 'react-native';
import { tabNavigation } from '../../navigation/Navigation';
import { fire, database } from '../../config/Fire';

const UpdateProfile = () =>{
    const[fetchName, setFetchName] = useState('');
    const[changeName, setChangeName] = useState('');
    const[fetchMobileNo, setFetchMobileNo] = useState('');
    const[changeMobileNo, setChangeMobileNo] = useState('');

    useEffect(() => {
        const response =  fire.auth().currentUser.uid
        console.log(response);    
        database.ref('userData/'+response ).on('value', snapshot => {
           let data = snapshot.val();
           let items = Object.values(data);
           console.log('res'+items);
           setFetchName(data.username);
           setFetchMobileNo(data.phoneno)
         });   
    },[]);

    const profile =()=>{        
        const response =  fire.auth().currentUser.uid
        console.log(response);    
        database.ref('userData/'+response )
        .update({
          username: changeName,
          phoneno: changeMobileNo
        })
        .then(() =>Alert.alert('Details Updated!!!'));
   }

    return(
        <View>
        <TouchableOpacity style={styles.homeBtn} onPress={()=>{tabNavigation()}}>
            <Text style={styles.homeText}>Home</Text>
        </TouchableOpacity> 
        <View style={styles.information}>
        <View style={styles.informationTextView}> 
        <Text style={styles.informationText}>Name: </Text>
        </View>
        <View style={styles.informationInputView}>
        <TextInput
        style = {styles.textField}
        placeholder = {fetchName}
        value = {changeName}
        onChangeText = {changeName => setChangeName(changeName)}
        />
        </View>
        </View>

        <View style={styles.information}>
        <View style={styles.informationTextView}>
        <Text style={styles.informationText}>MobileNo: </Text>
        </View>
        <View style={styles.informationInputView}>
        <TextInput
        style = {styles.textField}
        placeholder = {fetchMobileNo}
        value = {changeMobileNo}
        onChangeText = {changeMobileNo => setChangeMobileNo(changeMobileNo)}
        />
        </View>
        </View>
        <Button
        onPress = {profile} title ='Update Details'
        />
        </View>
    );
}

const styles = StyleSheet.create({
    homeBtn:{
        alignItems:'center',
        margin:20
    },
    homeText:{
        color:'blue',
        fontSize:18
    },
    information:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        margin:10
    },
    informationTextView:{
        flex:1
    },
    informationText:{
        fontSize:20
    },
    informationInputView:{
        flex:4
    },
    textField:{
        height:50, 
        borderColor:'black',
        backgroundColor: 'orange',
        borderRadius:10,
        fontSize:20,
    }
}); 

export default UpdateProfile;