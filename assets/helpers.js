import Sound from 'react-native-sound';
Sound.setCategory('Playback');
export function shuffle(deck) {
    for (let i = deck.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [deck[i - 1], deck[j]] = [deck[j], deck[i - 1]];
    }
    return deck;
}
export const deck = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54'];
export const speed = [
    { title: '1 SEG.', delayAmount: 10 },
    { title: '2 SEG.', delayAmount: 20 },
    { title: '3 SEG.', delayAmount: 30 },
    { title: '4 SEG.', delayAmount: 40 },
    { title: '5 SEG.', delayAmount: 50 },
    { title: '6 SEG.', delayAmount: 60 },
    { title: '7 SEG.', delayAmount: 70 },
];

export const deckImages = {
    '1': require('/Users/dangy/loteria/assets/deck/01.png'),
    '2': require('/Users/dangy/loteria/assets/deck/02.png'),
    '3': require('/Users/dangy/loteria/assets/deck/03.png'),
    '4': require('/Users/dangy/loteria/assets/deck/04.png'),
    '5': require('/Users/dangy/loteria/assets/deck/05.png'),
    '6': require('/Users/dangy/loteria/assets/deck/06.png'),
    '7': require('/Users/dangy/loteria/assets/deck/07.png'),
    '8': require('/Users/dangy/loteria/assets/deck/08.png'),
    '9': require('/Users/dangy/loteria/assets/deck/09.png'),
    '10': require('/Users/dangy/loteria/assets/deck/10.png'),
    '11': require('/Users/dangy/loteria/assets/deck/11.png'),
    '12': require('/Users/dangy/loteria/assets/deck/12.png'),
    '13': require('/Users/dangy/loteria/assets/deck/13.png'),
    '14': require('/Users/dangy/loteria/assets/deck/14.png'),
    '15': require('/Users/dangy/loteria/assets/deck/15.png'),
    '16': require('/Users/dangy/loteria/assets/deck/16.png'),
    '17': require('/Users/dangy/loteria/assets/deck/17.png'),
    '18': require('/Users/dangy/loteria/assets/deck/18.png'),
    '19': require('/Users/dangy/loteria/assets/deck/19.png'),
    '20': require('/Users/dangy/loteria/assets/deck/20.png'),
    '21': require('/Users/dangy/loteria/assets/deck/21.png'),
    '22': require('/Users/dangy/loteria/assets/deck/22.png'),
    '23': require('/Users/dangy/loteria/assets/deck/23.png'),
    '24': require('/Users/dangy/loteria/assets/deck/24.png'),
    '25': require('/Users/dangy/loteria/assets/deck/25.png'),
    '26': require('/Users/dangy/loteria/assets/deck/26.png'),
    '27': require('/Users/dangy/loteria/assets/deck/27.png'),
    '28': require('/Users/dangy/loteria/assets/deck/28.png'),
    '29': require('/Users/dangy/loteria/assets/deck/29.png'),
    '30': require('/Users/dangy/loteria/assets/deck/30.png'),
    '31': require('/Users/dangy/loteria/assets/deck/31.png'),
    '32': require('/Users/dangy/loteria/assets/deck/32.png'),
    '33': require('/Users/dangy/loteria/assets/deck/33.png'),
    '34': require('/Users/dangy/loteria/assets/deck/34.png'),
    '35': require('/Users/dangy/loteria/assets/deck/35.png'),
    '36': require('/Users/dangy/loteria/assets/deck/36.png'),
    '37': require('/Users/dangy/loteria/assets/deck/37.png'),
    '38': require('/Users/dangy/loteria/assets/deck/38.png'),
    '39': require('/Users/dangy/loteria/assets/deck/39.png'),
    '40': require('/Users/dangy/loteria/assets/deck/40.png'),
    '41': require('/Users/dangy/loteria/assets/deck/41.png'),
    '42': require('/Users/dangy/loteria/assets/deck/42.png'),
    '43': require('/Users/dangy/loteria/assets/deck/43.png'),
    '44': require('/Users/dangy/loteria/assets/deck/44.png'),
    '45': require('/Users/dangy/loteria/assets/deck/45.png'),
    '46': require('/Users/dangy/loteria/assets/deck/46.png'),
    '47': require('/Users/dangy/loteria/assets/deck/47.png'),
    '48': require('/Users/dangy/loteria/assets/deck/48.png'),
    '49': require('/Users/dangy/loteria/assets/deck/49.png'),
    '50': require('/Users/dangy/loteria/assets/deck/50.png'),
    '51': require('/Users/dangy/loteria/assets/deck/51.png'),
    '52': require('/Users/dangy/loteria/assets/deck/52.png'),
    '53': require('/Users/dangy/loteria/assets/deck/53.png'),
    '54': require('/Users/dangy/loteria/assets/deck/54.png'),
}
export const zero = new Sound('0.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const one = new Sound('1.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const two = new Sound('2.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const three = new Sound('3.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const four = new Sound('4.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});

export const five = new Sound('5.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const six = new Sound('6.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const seven = new Sound('7.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const eight = new Sound('8.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});

export const nine = new Sound('9.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const ten = new Sound('10.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const eleven = new Sound('11.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const twelve = new Sound('12.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const thirteen = new Sound('13.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const fourteen = new Sound('14.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});

export const fifteen = new Sound('15.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const sixteen = new Sound('16.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const seventeen = new Sound('17.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const eighteen = new Sound('18.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});

export const nineteen = new Sound('19.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});

export const twenty = new Sound('20.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const twentyone = new Sound('21.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const twentytwo = new Sound('22.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const twentythree = new Sound('23.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const twentyfour = new Sound('24.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});

export const twentyfive = new Sound('25.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const twentysix = new Sound('26.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const twentyseven = new Sound('27.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const twentyeight = new Sound('28.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});

export const twentynine = new Sound('29.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});

export const thirty = new Sound('30.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const thirtyone = new Sound('31.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const thirtytwo = new Sound('32.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const thirtythree = new Sound('33.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const thirtyfour = new Sound('34.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});

export const thirtyfive = new Sound('35.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const thirtysix = new Sound('36.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const thirtyseven = new Sound('37.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const thirtyeight = new Sound('38.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});

export const thirtynine = new Sound('39.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});

export const forty = new Sound('40.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const fortyone = new Sound('41.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const fortytwo = new Sound('42.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const fortythree = new Sound('43.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const fortyfour = new Sound('44.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});

export const fortyfive = new Sound('45.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const fortysix = new Sound('46.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const fortyseven = new Sound('47.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const fortyeight = new Sound('48.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});

export const fortynine = new Sound('50.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        return;
    }
});

export const fifty = new Sound('elPescado.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        return;
    }
});
export const fiftyone = new Sound('51.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});
export const fiftytwo = new Sound('52.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});

export const fiftythree = new Sound('53.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});

export const fiftyfour = new Sound('54.m4a', Sound.MAIN_BUNDLE, (error) => {
    if (error) {

        return;
    }
});


