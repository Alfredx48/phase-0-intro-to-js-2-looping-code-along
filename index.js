function writeCards(names, event) { 
    let cards = []
    for (let i = 0; i < names.length; i++) {   
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)

    }
    return cards
    
}

function countDown() {
    let countDown = 0;
    while (countDown <= 10) {
        console.log(countDown++)
 
    }
}