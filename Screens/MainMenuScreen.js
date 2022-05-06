import React from 'react';
import { ImageBackground, StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native';


const MainMenuScreen = ({ navigation }) => {

    function navigate() {
        navigation.navigate('Game');
    }
    return (
        <View style={styles.mainView}>

            <ImageBackground source={require('/Users/dannydominguez/loteria/loteriaApple/assets/background.jpg')} style={styles.image}>
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>LOTERIA</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={navigate}>
                        <Text style={styles.buttonTextStyle}>JUGAR</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textStyle: {
        color: 'white',
        fontSize: 70,
        fontFamily: 'AvenirNextCondensed-Heavy'
    },
    buttonTextStyle: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'AvenirNextCondensed-Heavy',
    },
    image: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        backgroundColor: 'blue',
        width: '80%',
        height: '15%',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    buttonContainer: {
        backgroundColor: 'blue',
        width: '32.5%',
        height: '7%',
        borderRadius: 90,
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "2%"
    }
});
export default MainMenuScreen