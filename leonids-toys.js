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
    name: "Bop It",
    brand: "Hasbro Gaming",
    inStock: false,
    quantity: 5,
    price: 14.92,
    minAge: 8 + "+",
    players: 2,
    category: "Strategy"
}

const toyToFind = 2; 

const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    // lastIndex is storing the amount of elements stored in the toys array which in this instance are objects
    const currentLastToy = toys[lastIndex]
    // now we are storing the objects inside of the currentLastToy variable
    const maxId = currentLastToy.id
    // with maxId we are not storing the id's of each object using dotNotation to access the objects that are now stored in the currentLastToy array.
    const idForNewToy = maxId + 1
    // since we have the id's stored in maxId, we now create a new variable called idForNewToy that will store the id of the object but now are incrementing the id number by 1
    
    toyObject.id = idForNewToy
    toys.push(toyObject)
}

addToyToInventory(whatDoYouMeme)
addToyToInventory(bopIt)

for (const toy of toys) {
    // console.log(`The ${toy.name} is ${toy.price}, we have ${toy.quantity} left instock`)
    // console.log(toy.price = toy.price * 0.5)
    if(toy.id === toyToFind) {
        console.log(`The ${toy.name} is ${toy.price}, we have ${toy.quantity} left instock`)
    }
    if (toy.quantity > 0) {
        console.log(`There is ${toy.quantity} ${toy.name} in stock for the price of ${toy.price}`)
    } else {
        console.log(`Sorry but ${toy.name} is currently out of stock`)
    }
}

// console.log(toys)