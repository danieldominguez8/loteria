import React, { useState } from 'react';
import { TouchableOpacity, ScrollView, Dimensions, StyleSheet, Text, Button, View, Image, TouchableHighlight, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { shuffle, deckImages } from '../assets/helpers';
const deck = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52'];


const GameScreen = () => {
    const [playingDeck, setDeck] = useState(deck);
    const [count, setCount] = useState(0);
    const [images, setImages] = useState([]);
    function shuffleDeck(count) {
        if (count != 0)
            [setDeck(shuffle(deck)), setCount(0), setImages([]), console.log(playingDeck)]
    }

    function gameOver(count) {
        [setDeck(shuffle(deck)), setCount(0), setImages([]), console.log(playingDeck)]
    }

    function nextCard(count) {
        [setCount(count + 1), console.log(count + 1), images.push(deckImages[playingDeck[count]])]
    }

    return (
        <View style={styles.container}>
            <View style={styles.fixToText}>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Shuffle"
                        onPress={
                            () => {
                                shuffleDeck(count)
                            }
                        } s
                    />
                </View>


                {/* <Button
                    title="Pause"
                    onPress={() => alert('Pause button pressed')} r
                /> */}
            </View>

            <View>
                <TouchableHighlight
                    style={
                        styles.ImageStyle
                    }
                    onPress={
                        () => {
                            count > 50 ?
                                gameOver(count) :
                                nextCard(count)
                        }
                    }
                >
                    <Image
                        style={styles.ImageStyle}
                        source={deckImages[playingDeck[count]]}
                    />
                </TouchableHighlight>
            </View>
            <ScrollView
                ref={(scroll) => { this.scroll = scroll; }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                onContentSizeChange={() => {
                    this.scroll.scrollToEnd({ animated: true, index: -1 }, 200);
                }}
            >
                {images.map(img => <Image
                    style={styles.smallImageStyle} source={img} />)}
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    textStyle: {
        color: 'black',
        fontSize: 50,
        fontFamily: 'Arial'
    },
    ImageStyle: {
        width: Dimensions.get('window').width / 1.2,
        height: Dimensions.get('window').width * 1.57 / 1.2,
        marginBottom: "3%",
        marginTop: "1%",
    },
    smallImageStyle: {
        width: Dimensions.get('window').width / 1.1 / 4,
        height: Dimensions.get('window').width * 1.57 / 1.1 / 4,

    },
    fixToText: {
        marginTop: "1%",
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonContainer: {
        backgroundColor: 'yellow',
        borderRadius: 75,
        borderWidth: 1,
    }
});

const maintainVisibleContentPosition = {
    autoscrollToTopThreshold: 0,
    minIndexForVisible: 0,
}
export default GameScreen