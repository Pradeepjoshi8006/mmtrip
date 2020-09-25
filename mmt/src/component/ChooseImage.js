import React, { Component } from 'react';
import ImagePicker from 'react-native-image-picker';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default class ChooseImage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: '',
            uri: ''
        }
    }

    chooseImage = () => {
        let options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            }
        }
        ImagePicker.showImagePicker(options, (response) => {
            const source = { uri: response.uri };
            this.setState({
                filePath: response,
                fileData: response.data,
            })
        })
    }
    renderFileData() {
        (this.state.fileData)
        return <Image source={{ uri: 'data:image/jpeg;base64,' + this.state.fileData }}
            style={styles.images} />
    }

    render() {
        return (
            <View>
                <View style={styles.ImageSections}>
                    <View>
                        {this.renderFileData()}
                        <Text style={{ textAlign: 'center' }}></Text>
                    </View>
                </View>
                <View style={styles.btnParentSection}>
                    <TouchableOpacity onPress={this.chooseImage} style={styles.btnSection}>
                        <Text style={styles.btnText}>Choose Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    ImageSections: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 6,
        paddingVertical: 4,
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 1,
        height: 150,
        width: 150,
        marginLeft: 50,
        marginTop: 10,
        borderRadius: 100,
        backgroundColor: 'white',
    },
    images: {
        height: 150,
        width: 150,
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 3
    },
    btnParentSection: {
        alignItems: 'center',
        marginTop: 5
    },
    btnSection: {
        width: 125,
        height: 20,
        backgroundColor: 'maroon',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        marginBottom: 10
    },
    btnText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    }
});