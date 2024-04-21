"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(decrement) {
        this.speed -= decrement;
    }
    speedUp(increment) {
        this.speed += increment;
    }
    showSpeed() {
        console.log("Current Speed:", this.speed);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showSpeed() {
        super.showSpeed();
        console.log("Current Gear:", this.gear);
    }
}
const bicycle = new Bicycle("Giant", 20, "B123", 3);
console.log("Initial state:");
bicycle.showSpeed();
bicycle.speedUp(10);
console.log("\nAfter speeding up:");
bicycle.showSpeed();
bicycle.slowDown(5);
console.log("\nAfter slowing down:");
bicycle.showSpeed();
