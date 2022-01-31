import React from 'react';
import { StyleSheet, Text, Button, View, requireNativeComponent, Image } from 'react-native';

const GameScreen = () => {
    return (
        <View style={styles.mainView}>
            <Image source={require('/Users/dannydominguez/loteria/assets/02.png')} />
            <Button
                title="Pause"
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
export default GameScreen