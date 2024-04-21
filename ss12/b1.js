"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log("Name:", this.name);
        console.log("Company:", this.company);
        console.log("Phone:", this.phone);
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
}
const employee = new Employee("Tuấn Anh", "ABC ABC.", "123-456-7890");
employee.printInfo();
const manager = new Manager("Minh Thu", "XYZ ABC.", "987-654-3210", 10);
manager.printInfo();
