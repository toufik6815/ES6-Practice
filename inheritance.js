class Parent {
    constructor(){
        this.fatherName = "Abdul";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }

    // getFullName(){
    //     return this.name + " " + this.fatherName;
    // }
}

const baby1 = new Child("ALO");
const baby2 = new Child("Dim");
// console.log(baby1.getFullName());
console.log(baby2);