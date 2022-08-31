const EventEmitter = require("events")
const eventEmitter = new EventEmitter();

eventEmitter.on("tutorial", () => {
    console.log("tutorial event fas occured")
});
eventEmitter.on("names", () => {
    console.log("the name is Emmanuel")
})
eventEmitter.emit("tutorial")
eventEmitter.emit("names")
class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name
    }
    get name() {
        return this._name
    }
}
let pedro = new Person("Pedro")
let christina = new Person("chirstina")
christina.on("name", () => [
    console.log("the name is " + christina.name)
])
pedro.on("name", () => {
    console.log("my name is  " + pedro.name)
})
pedro.emit("name")
christina.emit("name")
    // pedro._name = "father figure"
    // pedro.emit("name")