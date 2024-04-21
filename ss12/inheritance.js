"use strict";
/**
     tính kế thừa
    là tính chất thể hiện bởi class con kế thừa class cha sẽ có các
    thuộc tính sử dụng lại đoạn code
    1.class con có kế kế thừa
 */
// khai báo class cha
class Parent {
    constructor(name, id, age) {
        this.name = name;
        this.id = id;
        this.age = age;
    }
    //khai báo cho class parent có phương thức showInfo
    showInfo() {
        return `xin chào ${this.name}`;
    }
    // phương thức thay đổi name
    setName(newName) {
        this.name = newName;
    }
}
// khởi tạo class con kế thừa class cha
// để kế thừa dùng từ khóa extends
class Chird extends Parent {
    constructor(name, id, age) {
        super(name, id, age); //phải đặt trên đầu của constructor
        this.name = name;
        this.id = id;
    }
    // ghi đè phương thức :override | overwrite
    showInfo() {
        return `${this.name} năm nay ${this.age}tuổi`;
    }
}
// khởi tạo đối tượng con
let chird1 = new Chird("huyền trang", 11, 20);
// khi class Chird kế thừa class Parent thì sẽ kế thừa các thuộc tính và phương thức của nó
// console.log("111111",chird1.showInfo());
chird1.setName("sơn tùng");
console.log("tên mới", chird1.name);
