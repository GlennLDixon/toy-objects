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
        brand: "Hansbro Gaming",
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

for (const toy of toys) {
    console.log(`I want this ${toy.name} toy`)
}