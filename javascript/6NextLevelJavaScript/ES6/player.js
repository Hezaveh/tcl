class Player {
    constructor(name, country){
        this.name = name
        this.country = country
    }

    introduction(){
        console.log(`${this.name} was born in ${this.country}`)
    }
}

class TennisPlayer extends Player {
    constructor(name, country, age){
        super(name, country)
        this.age = age
    }
    playTennis(){
        console.log(`${this.name} is ${this.ageage} years old and knows how to play Tennis`)
    }
}


const messi = new Player("Messi", "Argentina")

messi.introduction()
console.log(messi.name)

const roger = new TennisPlayer("Roger Federer", "Spain", 38)

roger.playTennis()
roger.introduction()
console.log(roger.name)
