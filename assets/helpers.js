export const deck = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52'];


export function shuffle(deck) {
    for (let i = deck.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [deck[i - 1], deck[j]] = [deck[j], deck[i - 1]];
    }
    return deck;
}

export const deckImages = {
    '1': require('/Users/dannydominguez/loteria/assets/deck/01.png'),
    '2': require('/Users/dannydominguez/loteria/assets/deck/02.png'),
    '3': require('/Users/dannydominguez/loteria/assets/deck/03.png'),
    '4': require('/Users/dannydominguez/loteria/assets/deck/04.png'),
    '5': require('/Users/dannydominguez/loteria/assets/deck/05.png'),
    '6': require('/Users/dannydominguez/loteria/assets/deck/06.png'),
    '7': require('/Users/dannydominguez/loteria/assets/deck/07.png'),
    '8': require('/Users/dannydominguez/loteria/assets/deck/08.png'),
    '9': require('/Users/dannydominguez/loteria/assets/deck/09.png'),
    '10': require('/Users/dannydominguez/loteria/assets/deck/10.png'),
    '11': require('/Users/dannydominguez/loteria/assets/deck/11.png'),
    '12': require('/Users/dannydominguez/loteria/assets/deck/12.png'),
    '13': require('/Users/dannydominguez/loteria/assets/deck/13.png'),
    '14': require('/Users/dannydominguez/loteria/assets/deck/14.png'),
    '15': require('/Users/dannydominguez/loteria/assets/deck/15.png'),
    '16': require('/Users/dannydominguez/loteria/assets/deck/16.png'),
    '17': require('/Users/dannydominguez/loteria/assets/deck/17.png'),
    '18': require('/Users/dannydominguez/loteria/assets/deck/18.png'),
    '19': require('/Users/dannydominguez/loteria/assets/deck/19.png'),
    '20': require('/Users/dannydominguez/loteria/assets/deck/20.png'),
    '21': require('/Users/dannydominguez/loteria/assets/deck/21.png'),
    '22': require('/Users/dannydominguez/loteria/assets/deck/22.png'),
    '23': require('/Users/dannydominguez/loteria/assets/deck/23.png'),
    '24': require('/Users/dannydominguez/loteria/assets/deck/24.png'),
    '25': require('/Users/dannydominguez/loteria/assets/deck/25.png'),
    '26': require('/Users/dannydominguez/loteria/assets/deck/26.png'),
    '27': require('/Users/dannydominguez/loteria/assets/deck/27.png'),
    '28': require('/Users/dannydominguez/loteria/assets/deck/28.png'),
    '29': require('/Users/dannydominguez/loteria/assets/deck/29.png'),
    '30': require('/Users/dannydominguez/loteria/assets/deck/30.png'),
    '31': require('/Users/dannydominguez/loteria/assets/deck/31.png'),
    '32': require('/Users/dannydominguez/loteria/assets/deck/32.png'),
    '33': require('/Users/dannydominguez/loteria/assets/deck/33.png'),
    '34': require('/Users/dannydominguez/loteria/assets/deck/34.png'),
    '35': require('/Users/dannydominguez/loteria/assets/deck/35.png'),
    '36': require('/Users/dannydominguez/loteria/assets/deck/36.png'),
    '37': require('/Users/dannydominguez/loteria/assets/deck/37.png'),
    '38': require('/Users/dannydominguez/loteria/assets/deck/38.png'),
    '39': require('/Users/dannydominguez/loteria/assets/deck/39.png'),
    '40': require('/Users/dannydominguez/loteria/assets/deck/40.png'),
    '41': require('/Users/dannydominguez/loteria/assets/deck/41.png'),
    '42': require('/Users/dannydominguez/loteria/assets/deck/42.png'),
    '43': require('/Users/dannydominguez/loteria/assets/deck/43.png'),
    '44': require('/Users/dannydominguez/loteria/assets/deck/44.png'),
    '45': require('/Users/dannydominguez/loteria/assets/deck/45.png'),
    '46': require('/Users/dannydominguez/loteria/assets/deck/46.png'),
    '47': require('/Users/dannydominguez/loteria/assets/deck/47.png'),
    '48': require('/Users/dannydominguez/loteria/assets/deck/48.png'),
    '49': require('/Users/dannydominguez/loteria/assets/deck/49.png'),
    '50': require('/Users/dannydominguez/loteria/assets/deck/50.png'),
    '51': require('/Users/dannydominguez/loteria/assets/deck/51.png'),
    '52': require('/Users/dannydominguez/loteria/assets/deck/52.png')
}