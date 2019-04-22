class Fruits {
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
const myFruits = new Fruits("Lychee", "Red", "Sweet", "China")
const myFavoriteFruits = new Fruits ("Durian", "Yellow", "Sweet", "Indonesia")

fruitsCollections.push(myFruits, myFavoriteFruits)
console.log(fruitsCollections)

// Console.log template string
myFruits.shop()

// Access from object 
console.log(myFruits.getColor())
console.log(myFruits.getOrigin())


// ------------------------------------------------------------------------------->

// Extend 
class TropicalFruits extends Fruits {
constructor({ name, color, flavor, origin, continent, price}) {
    // Inherit object using super
    super(name, color, flavor, origin)
    this.continent = continent
    this.price = price
    }

    shoppingList() {
        console.log (
            `${this.name} has attribute of ${this.color}, is from ${this.origin}, in ${this.continent}, taste ${this.flavor}, and cost ${myTropicalFruits.getPrice()}`
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

const myTropicalFruits = new TropicalFruits({
    name: "Pineapple",
    color: "Yellow", 
    flavor: ["Sweet", "Sour"],
    origin: ["Costa Rica", "Brazil", "Philippines"],
    continent: "South America",
    price: 14000 // IDR
})

console.log(myTropicalFruits)

myTropicalFruits.shoppingList()

console.log(myTropicalFruits.getContinent())

console.log(myTropicalFruits.getPrice())