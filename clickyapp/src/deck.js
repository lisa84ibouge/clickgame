function shuffle(array) {
    const _array = array.slice(0)
    for (let i = 0; i < array.length - 1; i++) {
        let randomIndex = Math.floor(Math.random() * (i + 1))
        let temp = _array[i]
        _array[i] = _array[randomIndex]
        _array[randomIndex] = temp
//        _array[i] = _array[randomIndex]
//        _array[randomIndex] = temp
    }

    return _array
}

export default function initializeDeck(flags) {
console.log('flags:', flags);
    let id = 0
    const cards = flags
    .reduce((acc, type) => {
        acc.push({
            id: id++, 
            type
        })

        acc.push({
            id: id++,
            type
        })
        return acc
    }, [])
    var shuffled_cards = shuffle(cards);
    console.log('cards:', shuffled_cards);
    return shuffled_cards;

//    return shuffle(cards)
}