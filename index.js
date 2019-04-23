class Fruit {
    constructor(name, color, flavor, origin = "Unknown Origin") {
        this.name = name
        this.color = color
        this.flavor = flavor
        this.origin = origin
    }

    shop() {
        console.log(
            `${this.name} has attribute of ${this.color}, is from ${this.origin}, and taste ${this.flavor}`
        )

    }

    getColor () {
        return this.color
    }

    getOrigin () {
        return this.origin
    }
}

// Adding object into array
const fruitsCollections = []
const myFruit = new Fruit("Lychee", "Red", "Sweet", "China")
const myFavoriteFruit = new Fruit ("Durian", "Yellow", "Sweet", "Indonesia")

fruitsCollections.push(myFruit, myFavoriteFruit)
console.log(fruitsCollections)

// Console.log template string
myFruit.shop()

// Access from object 
console.log(myFruit.getColor())
console.log(myFruit.getOrigin())


// ------------------------------------------------------------------------------->

// Extend 
class TropicalFruit extends Fruit {
constructor({ name, color, flavor, origin, continent, price}) {
    // Inherit object using super
    super(name, color, flavor, origin)
    this.continent = continent
    this.price = price
    }

    shoppingList() {
        console.log (
            `${this.name} has attribute of ${this.color}, is from ${this.origin}, in ${this.continent}, taste ${this.flavor}, and cost ${myTropicalFruit.getPrice()}`
        )
    }

    getContinent() {
        return this.continent
    }

    getPrice() {
        const formattedPrice = new Intl.NumberFormat('id-ID', {
            style: "currency", 
            currency: "IDR",
            minimumFractionDigits: 0
        }).format(this.price)

        return formattedPrice
    }
}

const myTropicalFruit = new TropicalFruit({
    name: "Pineapple",
    color: "Yellow", 
    flavor: ["Sweet", "Sour"],
    origin: ["Costa Rica", "Brazil", "Philippines"],
    continent: "South America",
    price: 14000 // IDR
})

console.log(myTropicalFruit)

myTropicalFruit.shoppingList()

console.log(myTropicalFruit.getContinent())

console.log(myTropicalFruit.getPrice())