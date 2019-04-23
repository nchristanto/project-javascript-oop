class Fruit {
    constructor(name = "Unknown", color, flavors, origins = "Unknown origins" ) {
        this.name = name
        this.color = color
        this.flavors = flavors
        this.origins = origins
    }

    getOrigins() {
        return this.origins.join(', ')
    }

    getFlavors() {
        return this.flavors.join(', ')
    }

    showDetail() {
        console.log(
            `${this.name} has the following attributes: color is ${this.color}, is originated from ${this.getOrigins()}, and taste ${this.getFlavors}`
        )

    }

    getColor () {
        return this.color
    }

}

// Adding object into array
const fruitsCollection = []
const myFruit = new Fruit("Lychee", "Red", ["Sweet", "Sour"], ["China", "Taiwan"])
const myFavoriteFruit = new Fruit ("Durian", "Yellow", ["Sweet"], ["Indonesia", "Malaysia"])

fruitsCollection.push(myFruit, myFavoriteFruit)
console.log(fruitsCollection)

// Console.log template string
myFruit.showDetail()

// Access from object 
console.log(myFruit.getColor())
console.log(myFruit.getOrigins())


// ------------------------------------------------------------------------------->

// Extend 
class TropicalFruit extends Fruit {
constructor({ name, color, flavors, origins, continent, price}) {
    // Inherit object using super
    super(name, color, flavors, origins)
    this.continent = continent
    this.price = price
    }

    showDetails() {
        console.log (
            `${this.name} has the following attributes: color is ${this.color}, is originated from ${this.getOrigins()} in ${this.continent}, and taste ${this.getFlavors()}`
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
    flavors: ["Sweet", "Sour"],
    origins: ["Costa Rica", "Brazil", "Philippines"],
    continent: "South America",
    price: 14000 // IDR
})

console.log(myTropicalFruit)

myTropicalFruit.showDetails()

console.log(myTropicalFruit.getContinent())

console.log(myTropicalFruit.getPrice())
