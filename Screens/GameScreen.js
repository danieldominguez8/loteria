import React, { useState } from 'react';
import { ScrollView, Dimensions, StyleSheet, Text, Button, View, Image, TouchableHighlight } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { shuffle, deckImages } from '../assets/helpers';
const deck = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52'];


const GameScreen = () => {
    const [playingDeck, setDeck] = useState(deck);
    const [count, setCount] = useState(0);

    function shuffleDeck(count) {
        count == 0 ?
            alert('Already Shuffled') :
            [setDeck(shuffle(deck)), setCount(0), console.log(playingDeck), alert('shuffle')]
    }

    function gameOver(count) {
        [setDeck(shuffle(deck)), setCount(0), console.log(playingDeck), alert('Game Over')]
    }

    function nextCard(count) {
        [setCount(count + 1), console.log(count + 1)]
    }


    return (
        <View style={styles.container}>
            <View style={styles.fixToText}>
                <Button
                    title="Shuffle"
                    onPress={
                        () => {
                            shuffleDeck(count)
                        }
                    }
                />

                <Button
                    title="Pause"
                    onPress={() => alert('Pause button pressed')} r
                />
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
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <Image
                    style={styles.smallImageStyle}
                    source={deckImages[playingDeck[count]]}
                />
                <Image
                    style={styles.smallImageStyle}
                    source={deckImages[playingDeck[count]]}
                />
                <Image
                    style={styles.smallImageStyle}
                    source={deckImages[playingDeck[count]]}
                />
                <Image
                    style={styles.smallImageStyle}
                    source={deckImages[playingDeck[count]]}
                />
                <Image
                    style={styles.smallImageStyle}
                    source={deckImages[playingDeck[count]]}
                />
                <Image
                    style={styles.smallImageStyle}
                    source={deckImages[playingDeck[count]]}
                />
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
    },
    ImageStyle: {
        width: Dimensions.get('window').width / 1.2,
        height: Dimensions.get('window').width * 1.57 / 1.2,
    },
    smallImageStyle: {
        marginTop: "2%",
        width: Dimensions.get('window').width / 1.1 / 4,
        height: Dimensions.get('window').width * 1.57 / 1.1 / 4,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
export default GameScreen