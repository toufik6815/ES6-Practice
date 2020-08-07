class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "JIC";
    }
}

const student1 = new Student(12, "Toufik");
const student2 = new Student(13, "Hasan");
console.log(student1.name, student2);