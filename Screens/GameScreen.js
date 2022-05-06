import React, { useState, useEffect } from 'react';
import { TouchableOpacity, ScrollView, Dimensions, StyleSheet, Text, Button, View, Image, TouchableHighlight, Alert, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { shuffle, deckImages } from '../assets/helpers';
import { one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, twentyone, twentytwo, twentythree, twentyfour, twentyfive, twentysix, twentyseven, twentyeight, twentynine, thirty, thirtyone, thirtytwo, thirtythree, thirtyfour, thirtyfive, thirtysix, thirtyseven, thirtyeight, thirtynine, forty, fortyone, fortytwo, fortythree, fortyfour, fortyfive, fortyseven, fortysix, fortyeight, fortynine, fifty, fiftyone, fiftytwo, fiftythree, fiftyfour } from '../assets/helpers';
import Sound from 'react-native-sound';
import SelectDropdown from 'react-native-select-dropdown';

const deck = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54'];
const deckSound = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, twentyone, twentytwo, twentythree, twentyfour, twentyfive, twentysix, twentyseven, twentyeight, twentynine, thirty, thirtyone, thirtytwo, thirtythree, thirtyfour, thirtyfive, thirtysix, thirtyseven, thirtyeight, thirtynine, forty, fortyone, fortytwo, fortythree, fortyfour, fortyfive, fortysix, fortyseven, fortyeight, fortynine, fifty, fiftyone, fiftytwo, fiftythree, fiftyfour];
const speed = [
    { title: '1 Seg.', delayAmount: 10 },
    { title: '2 Seg.', delayAmount: 20 },
    { title: '3 Seg.', delayAmount: 30 },
    { title: '4 Seg.', delayAmount: 40 },
    { title: '5 Seg.', delayAmount: 50 },
];
const GameScreen = () => {
    const [firstPass, setPass] = useState(true);
    const [playingDeck, setDeck] = useState(deck);
    const [timer, setTimer] = useState(0);
    const [count, setCount] = useState(0);
    const [images, setImages] = useState([]);
    const [isPaused, setPause] = useState(false);
    const [delay, setDelay] = useState(30);

    useEffect(() => {
        const interval = setInterval(() => {
            if (timer === delay && !isPaused) {
                playSound();
                nextCardAuto();
                setCount(count => count > 52 ? shuffleDeck() : count + 1);
            }
            setTimer(timer + 1);
            if (timer > delay) {
                setTimer(0);
            }
        }
            , 100);
        return () => clearInterval(interval);
    }, [timer]);

    shuffleDeck = () => {
        [setDeck(shuffle(deck)), setCount(0), setImages([]), setPause(false), setTimer(0)]
    }

    getCount = () => {
        return count;
    }
    playSound = () => {
        deckSound[playingDeck[count + 1] - 1]?.play();
    }

    nextCardAuto = () => {
        images.push(deckImages[playingDeck[count]])
    }
    nextCardPause = () => {
        images.push(deckImages[playingDeck[count - 1]])
    }

    displayCard = () => {
        if (isPaused) {
            return require('/Users/dannydominguez/loteria/assets/paused.png')
        } else {
            return deckImages[playingDeck[count]]
        }
    }
    if (firstPass) {
        shuffleDeck();
        setPass(false);
    }
    if (count == 0 && !isPaused && timer == 0) {
        deckSound[playingDeck[count] - 1]?.play();
    }

    return (
        < ImageBackground source={require('/Users/dannydominguez/loteria/assets/background.jpg')} style={styles.image} >
            <View style={styles.container}>
                <View style={styles.fixToText}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={
                                () => {
                                    [shuffleDeck()]
                                }
                            } >
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
                        defaultValueByIndex={1}
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

                <View>
                    <TouchableHighlight
                        onPress={
                            () => {
                                setPause(!isPaused);

                                if (isPaused) {
                                    setTimer(0);
                                    nextCardAuto();
                                    setCount(count => count > 52 ? shuffleDeck() : count + 1);
                                    playSound();
                                }
                            }
                        }
                    >
                        <Image
                            style={styles.ImageStyle}
                            source={displayCard()}
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
        width: Dimensions.get('window').width / 1.25,
        height: Dimensions.get('window').width * 1.57 / 1.25,
        marginBottom: "1%",
        marginTop: "1%",
        borderWidth: 8,
    },
    smallImageStyle: {
        width: Dimensions.get('window').width / 1.1 / 5,
        height: Dimensions.get('window').width * 1.57 / 1.1 / 5,
        borderColor: "black",
        borderWidth: 2,
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
        backgroundColor: 'blue',
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
        backgroundColor: 'blue',
        borderWidth: 2,
    },
    space: {
        width: "5%",
    },
    dropdown4BtnTxtStyle: { color: '#444', textAlign: 'left' },

    dropdown4RowStyle: {
        backgroundColor: 'blue',
        borderBottomColor: 'black',
    },

});

const maintainVisibleContentPosition = {
    autoscrollToTopThreshold: 0,
    minIndexForVisible: 0,
}
export default GameScreen