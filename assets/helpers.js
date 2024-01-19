import Sound from 'react-native-sound';
Sound.setCategory('Playback');

export const zero = '0.mp3';
export const one = '1.mp3';
export const two = '2.mp3';
export const three = '3.mp3';
export const four = '4.mp3';
export const five = '5.mp3';
export const six = '6.mp3';
export const seven = '7.mp3';
export const eight = '8.mp3';
export const nine = '9.mp3';
export const ten = '10.mp3';
export const eleven = '11.mp3';
export const twelve = '12.mp3';
export const thirteen = '13.mp3';
export const fourteen = '14.mp3';
export const fifteen = '15.mp3';
export const sixteen = '16.mp3';
export const seventeen = '17.mp3';
export const eighteen = '18.mp3';
export const nineteen = '19.mp3';
export const twenty = '20.mp3';
export const twentyone = '21.mp3';
export const twentytwo = '22.mp3';
export const twentythree = '23.mp3';
export const twentyfour = '24.mp3';
export const twentyfive = '25.mp3';
export const twentysix = '26.mp3';
export const twentyseven = '27.mp3';
export const twentyeight = '28.mp3';
export const twentynine = '29.mp3';
export const thirty = '30.mp3';
export const thirtyone = '31.mp3';
export const thirtytwo = '32.mp3';
export const thirtythree = '33.mp3';
export const thirtyfour = '34.mp3';
export const thirtyfive = '35.mp3';
export const thirtysix = '36.mp3';
export const thirtyseven = '37.mp3';
export const thirtyeight = '38.mp3';
export const thirtynine = '39.mp3';
export const forty = '40.mp3';
export const fortyone = '41.mp3';
export const fortytwo = '42.mp3';
export const fortythree = '43.mp3';
export const fortyfour = '44.mp3';
export const fortyfive = '45.mp3';
export const fortysix = '46.mp3';
export const fortyseven = '47.mp3';
export const fortyeight = '48.mp3';
export const fortynine = '49.mp3';
export const fifty = 'elPescado.mp3'; // Special case
export const fiftyone = '51.mp3';
export const fiftytwo = '52.mp3';
export const fiftythree = '53.mp3';
export const fiftyfour = '54.mp3';

export function shuffle(deck) {
    for (let i = deck.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [deck[i - 1], deck[j]] = [deck[j], deck[i - 1]];
    }
    return deck;
}
export const deck = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54'];
export const speed = [
    { title: '3 SEG.', delayAmount: 35 },
    { title: '4 SEG.', delayAmount: 45 },
    { title: '5 SEG.', delayAmount: 55 },
    { title: '6 SEG.', delayAmount: 65 },
    { title: '7 SEG.', delayAmount: 75 },
    { title: '8 SEG.', delayAmount: 85 },
    { title: '9 SEG.', delayAmount: 95 },
    { title: '10 SEG.', delayAmount: 105 },
];

export const deckImages = {
    '1': require('../assets/deck/01.png'),
    '2': require('../assets/deck/02.png'),
    '3': require('../assets/deck/03.png'),
    '4': require('../assets/deck/04.png'),
    '5': require('../assets/deck/05.png'),
    '6': require('../assets/deck/06.png'),
    '7': require('../assets/deck/07.png'),
    '8': require('../assets/deck/08.png'),
    '9': require('../assets/deck/09.png'),
    '10': require('../assets/deck/10.png'),
    '11': require('../assets/deck/11.png'),
    '12': require('../assets/deck/12.png'),
    '13': require('../assets/deck/13.png'),
    '14': require('../assets/deck/14.png'),
    '15': require('../assets/deck/15.png'),
    '16': require('../assets/deck/16.png'),
    '17': require('../assets/deck/17.png'),
    '18': require('../assets/deck/18.png'),
    '19': require('../assets/deck/19.png'),
    '20': require('../assets/deck/20.png'),
    '21': require('../assets/deck/21.png'),
    '22': require('../assets/deck/22.png'),
    '23': require('../assets/deck/23.png'),
    '24': require('../assets/deck/24.png'),
    '25': require('../assets/deck/25.png'),
    '26': require('../assets/deck/26.png'),
    '27': require('../assets/deck/27.png'),
    '28': require('../assets/deck/28.png'),
    '29': require('../assets/deck/29.png'),
    '30': require('../assets/deck/30.png'),
    '31': require('../assets/deck/31.png'),
    '32': require('../assets/deck/32.png'),
    '33': require('../assets/deck/33.png'),
    '34': require('../assets/deck/34.png'),
    '35': require('../assets/deck/35.png'),
    '36': require('../assets/deck/36.png'),
    '37': require('../assets/deck/37.png'),
    '38': require('../assets/deck/38.png'),
    '39': require('../assets/deck/39.png'),
    '40': require('../assets/deck/40.png'),
    '41': require('../assets/deck/41.png'),
    '42': require('../assets/deck/42.png'),
    '43': require('../assets/deck/43.png'),
    '44': require('../assets/deck/44.png'),
    '45': require('../assets/deck/45.png'),
    '46': require('../assets/deck/46.png'),
    '47': require('../assets/deck/47.png'),
    '48': require('../assets/deck/48.png'),
    '49': require('../assets/deck/49.png'),
    '50': require('../assets/deck/50.png'),
    '51': require('../assets/deck/51.png'),
    '52': require('../assets/deck/52.png'),
    '53': require('../assets/deck/53.png'),
    '54': require('../assets/deck/54.png'),
}



