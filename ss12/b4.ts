class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: string;

    constructor(name: string, speed: number, id: string) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }

    slowDown(decrement: number): void {
        this.speed -= decrement;
    }

    speedUp(increment: number): void {
        this.speed += increment;
    }

    showSpeed(): void {
        console.log("Current Speed:", this.speed);
    }
}

class Bicycle extends Vehicle {
    private gear: number;

    constructor(name: string, speed: number, id: string, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }

    showSpeed(): void {
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
