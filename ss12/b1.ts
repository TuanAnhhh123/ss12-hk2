class Employee {
    public name: string;
    protected company: string;
    private phone: string;

    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    printInfo(): void {
        console.log("Name:", this.name);
        console.log("Company:", this.company);
        console.log("Phone:", this.phone);
    }
}

class Manager extends Employee {
    public teamSize: number;

    constructor(name: string, company: string, phone: string, teamSize: number) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }

}


const employee = new Employee("Tuấn Anh", "ABC ABC.", "123-456-7890");
employee.printInfo();

const manager = new Manager("Minh Thu", "XYZ ABC.", "987-654-3210", 10);
manager.printInfo();
