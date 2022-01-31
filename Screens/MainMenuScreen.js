import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

const MainMenuScreen = ({ navigation }) => {

    function navigate() {
        navigation.navigate('Game');
    }
    return (
        <View style={styles.mainView}>
            <Text style={styles.textStyle}>Loteria</Text>
            <Button
                title="Begin Game"
                onPress={navigate}
            />
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
        color: 'black',
        fontSize: 50,
    }
});
export default MainMenuScreen