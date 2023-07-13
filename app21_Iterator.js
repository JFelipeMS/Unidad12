//clase agregada
class Aggregator {
    constructor() {
        this.collection = []
    }
    addItem(item){
        this.collection.push(item)
    }
    createIterator() {
        return new Iterator(this.collection)
    }
}
//Iterador
class Iterator {
    constructor(collection){
        this.collection = collection
        this.index = 0
    }
    next() {
        return this.collection[this.index++]
    }
    hasNext() {
        return this.index < this.collection.length
    }
    fisrt(){
        this.index = 0
    }
}


//Uso del Iterator
const miagreggator = new Aggregator();
miagreggator.addItem("Ana")
miagreggator.addItem("Luis")
miagreggator.addItem("Maria")
miagreggator.addItem("José")

const miiterator = miagreggator.createIterator()
while (miiterator.hasNext()){
    let item = miiterator.next()
    console.log(item)
}
var item = miiterator.next()
console.log(item)
miiterator.fisrt()
var item = miiterator.next()
console.log(item)