const toys = [
    {
        id: 1,
        name: "Connect Four",
        brand: "Hasbro Gaming",
        inStock: true,
        quantity: 7,
        price: 10.99,
        minAge: 6,
        maxAge: 99,
        players: 2,
        category: "Strategy"
    },
    {
        id: 2,
        name: "UNO",
        brand: "Mattel",
        inStock: true,
        quantity: 4,
        price: 4.99,
        minAge: 2,
        maxAge: 10,
        players: 7 + "+",
        category: "Card"
    },
    {
        id: 3,
        name: "Monopoly",
        brand: "Hasbro Gaming",
        inStock: false,
        quantity: 0,
        price: 15.97,
        minAge: 8,
        maxAge: 99,
        minPlayers: 2,
        maxPlayers: 6,
        category: "Board"
    }
]

const whatDoYouMeme = {
    id: 4,
    name: "What Do You Meme",
    brand: "What Do You Meme",
    inStock: true,
    quantity: 3,
    price: 29.99,
    age: "Adult",
    players: 3 + "+",
    category: "Card"
}

const bopIt = {
    id: 3,
    name: "Bop It",
    brand: "Hasbro Gaming",
    inStock: false,
    quantity: 5,
    price: 14.92,
    minAge: 8 + "+",
    players: 2,
    category: "Strategy"
}

toys.push(whatDoYouMeme)
toys.push(bopIt)

const toyToFind = 2; 

for (const toy of toys) {
    console.log(toy.price = toy.price * 0.5)
    if(toy.id === toyToFind) {
        console.log(`The ${toy.name} is ${toy.price}, we have ${toy.quantity} left instock`)
    }
    // if (toy.quantity > 0) {
    //     console.log(`There is ${toy.quantity} ${toy.name} in stock for the price of ${toy.price}`)
    // } else {
    //     console.log(`Sorry but ${toy.name} is currently out of stock`)
    // }
}