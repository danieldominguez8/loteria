import React, { useState, useEffect } from 'react';
import { TouchableOpacity, ScrollView, Dimensions, StyleSheet, Text, Button, View, Image, TouchableHighlight, Alert, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { shuffle, deckImages, deck, speed } from '../assets/helpers';
import { zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, twentyone, twentytwo, twentythree, twentyfour, twentyfive, twentysix, twentyseven, twentyeight, twentynine, thirty, thirtyone, thirtytwo, thirtythree, thirtyfour, thirtyfive, thirtysix, thirtyseven, thirtyeight, thirtynine, forty, fortyone, fortytwo, fortythree, fortyfour, fortyfive, fortyseven, fortysix, fortyeight, fortynine, fifty, fiftyone, fiftytwo, fiftythree, fiftyfour } from '../assets/helpers';
import Sound from 'react-native-sound';
import SelectDropdown from 'react-native-select-dropdown';
import KeepAwake from '@sayem314/react-native-keep-awake';
const deckSound = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, twentyone, twentytwo, twentythree, twentyfour, twentyfive, twentysix, twentyseven, twentyeight, twentynine, thirty, thirtyone, thirtytwo, thirtythree, thirtyfour, thirtyfive, thirtysix, thirtyseven, thirtyeight, thirtynine, forty, fortyone, fortytwo, fortythree, fortyfour, fortyfive, fortysix, fortyseven, fortyeight, fortynine, fifty, fiftyone, fiftytwo, fiftythree, fiftyfour];

const GameScreen = () => {
    const [firstPass, setFirst] = useState(true);
    const [firstSound, setFirstSound] = useState(true);
    const [shuffled, setShuffle] = useState(false);
    const [playingDeck, setDeck] = useState(deck);
    const [timer, setTimer] = useState(-20);
    const [count, setCount] = useState(0);
    const [images, setImages] = useState([]);
    const [isPaused, setPause] = useState(false);
    const [delay, setDelay] = useState(40);
    const handleShufflePress = () => {
        shuffleDeck();
    };
    const handlePauseToggle = () => {
        setPause(!isPaused);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            if (!shuffled) {
                shuffleDeck();
                setShuffle(true);
            }
            if (firstPass) {
                zero?.play();
                setFirst(false);
            }
            if (firstSound && timer == 0 && !isPaused) {
                deckSound[playingDeck[count] - 1]?.play();
                setFirstSound(false);
            }
            if (!firstPass && timer === delay && !isPaused) {
                playSound();
                nextCardAuto();
                setTimer(0);
                setCount(count => count > 52 ? shuffleDeck() : setCount(count + 1));
            }
            if (!isPaused && timer < delay) {
                setTimer(timer + 1);
            }
            if (!isPaused && timer > delay) {
                setTimer(0);
            }
        }
            , 100);
        return () => clearInterval(interval);
    }, [timer, isPaused]);

    shuffleDeck = () => {
        [setDeck(shuffle(deck)), setCount(0), setImages([]), setPause(false), setTimer(-20), setFirst(true), setFirstSound(true)]
    }
    playSound = () => {
        deckSound[playingDeck[count + 1] - 1]?.play();
    }
    nextCardAuto = () => {
        setImages(prevImages => [...prevImages, deckImages[playingDeck[count]]]);
    }
    
    nextCardPause = () => {
        setImages(prevImages => [...prevImages, deckImages[playingDeck[count - 1]]]);
    }
    displayCard = () => {
        if (isPaused) {
            return require('/Users/chakra/loteria/assets/paused.png')
        } else {
            return deckImages[playingDeck[count]]
        }
    }

    return (
        < ImageBackground source={require('/Users/chakra/loteria/assets/background.png')} style={styles.image} >
            <KeepAwake />
            <View style={styles.container}>
                <View style={styles.fixToText}>
                    <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={handleShufflePress}>
                        <Text style={styles.textStyle}>BARAJEAR</Text>
                    </TouchableOpacity>

                    </View>
                    <View style={styles.space} />
                    <SelectDropdown

                        buttonStyle={styles.dropdown4BtnStyle}
                        buttonTextStyle={styles.textStyle}
                        dropdownIconPosition={'right'}
                        dropdownStyle={styles.dropdown4DropdownStyle}
                        rowStyle={styles.dropdown4RowStyle}
                        rowTextStyle={styles.textStyle}
                        data={speed}
                        defaultValueByIndex={3}
                        onSelect={(selectedItem, index) => {
                            setDelay(selectedItem.delayAmount);
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem.title;
                        }}
                        rowTextForSelection={(item, index) => {
                            return item.title;
                        }}
                    />

                </View>

                <View style={styles.container}>
                    <TouchableHighlight onPress={handlePauseToggle}>
                        <Image style={styles.ImageStyle} source={displayCard()} />
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
                    {images.map((img, index) => (
                        <Image
                            key={index} // Adding a key here
                            style={styles.smallImageStyle}
                            source={img}
                        />
                    ))}
                </ScrollView>
            </View>
        </ImageBackground >
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    textStyle: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'AvenirNextCondensed-Heavy',
    },
    ImageStyle: {
        width: Dimensions.get('window').width / 1.15,
        height: Dimensions.get('window').width * 1.57 / 1.15,
        marginBottom: "0%",
        marginTop: "0%",
        borderWidth: 0,
    },
    smallImageStyle: {
        width: Dimensions.get('window').width / 1.1 / 5,
        height: Dimensions.get('window').width * 1.57 / 1.1 / 5,
        borderColor: "black",
        borderWidth: 0,
        marginRight: 5
    },
    fixToText: {
        marginTop: "1%",
        flexDirection: 'row',
        paddingHorizontal: 30,
    },
    buttonContainer: {
        height: "100%",
        width: "45%",
        backgroundColor: 'lightskyblue',
        borderRadius: 15,
        borderWidth: 2,
        alignItems: "center",
    },
    image: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dropdown4BtnStyle: {
        width: '40%',
        height: '100%',
        backgroundColor: 'lightskyblue',
        borderWidth: 2,
    },
    space: {
        width: "5%",
    },
    dropdown4RowStyle: {
        backgroundColor: 'lightskyblue',
        borderBottomColor: 'black',
    },

});

const maintainVisibleContentPosition = {
    autoscrollToTopThreshold: 0,
    minIndexForVisible: 0,
}
export default GameScreen