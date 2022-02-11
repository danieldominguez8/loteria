import React, { useState } from 'react';
import { StyleSheet, Text, Button, View, requireNativeComponent, Image, TouchableHighlight } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const GameScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.fixToText}>
                <Button
                    title="Shuffle"
                    onPress={() => alert('Shuffle button pressed')}
                />

                <Button
                    title="Pause"
                    onPress={() => alert('Pause button pressed')}
                />
            </View>

            <View>
                <TouchableHighlight
                    style={{ backgroundColor: "red", resizeMode: "contain" }}
                    onPress={() => {
                    }}
                >
                    <Image
                        style={styles.ImageStyle}
                        source={require('../assets/01.png')}
                    />
                </TouchableHighlight>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: "5%",
    },
    textStyle: {
        color: 'black',
        fontSize: 50,
    },
    ImageStyle: {
        width: '100%',
        resizeMode: 'contain'
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
export default GameScreen