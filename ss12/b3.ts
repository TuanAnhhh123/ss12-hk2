class Person {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    displayInfo(): void {
        console.log("Name:", this.name);
    }
}

class Student extends Person {
    private id: number;

    constructor(name: string, id: number) {
        super(name);
        this.id = id;
    }

    displayInfo(): void {
        super.displayInfo();
        console.log("ID:", this.id);
    }
}

const student = new Student("Tuấn Anh", 12345);

student.displayInfo();
