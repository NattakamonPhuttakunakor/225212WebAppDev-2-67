class Person {
  name: string;
  age: number;
  constructor(inName: string, inAge: number) {
    this.name = inName;
    this.age = inAge;
  }
  speak(wisdom: string) {
    // console.log(`Hello! My name is ${this.name} and I am ${this.age} years old. A bit of wisdom for you: ${wisdom}.`);
    console.log(`สวัสดี! ฉันชื่อ ${this.name} และฉันอายุ ${this.age} ปี ข้อคิดสำหรับคุณ: ${wisdom}.`);
  }
}

let p: Person = new Person("Xander", 36);
p.speak("มนุษย์ไม่ได้วิวัฒนาการไปจากเมือกตะกอนดั้งเดิมที่ก่อกำเนิดเขาแม้แต่นิ้วเดียว");
//p = "abc";
