console.log('Hello word'); //Show on Console 

// Create Variables : let ชื่อตัวแปร = ข้อมูล;
let x = 2;
let y = 3;
let z = x + y;
console.log(z)

// Data type
let age = 5; //int
let pi = 3.14; //float, double
let name = "Poom"; //string
let decide1 = true; //boolean 1
let decide2 = false;//boolean 0
let height = String(170); // Convert data int to String

console.log('ชื่อ ' + name + '\nอายุ ' + age + '\nสูง ' + height);

// Operators
plus = 3 + 2;
plus++ // ++ is plus 1
plus-- // ++ is minus 1
plus += // plus 1 keep result  in same variable
    plus -= // minus 1 keep result in same variable
    minus = 3 - 1;
multi = 3 * 2;
mod = 3 % 2; // หารเอาเศษ
div = 3 / 2; // หารเอาส่วน
exponent = 3 ** 2
console.log(plus, minus, multi, mod, div, exponent);
// <,>,<=,>=,===,!== 
// && and
// || or
// !p refuse หรือตรงกันข้าม

//Condition
score = 70;
if (score < 50) {
    console.log('ไม่ผ่าน F' + score);
} else if (score < 60) {
    console.log('ผ่าน D' + score);
} else {
    console.log('ได้ C ' + score);
}

//Loops
for (i = 1; i < 13; i++) { //(ต่าเนิ่มต้น;เงื่อนไข;ค่าเปลี่ยนแปลง){statement}
    if (i % 2 === 0) {
       //continue; // ข้ามการทำงาน
       break; //หยุดการทำงาน
    }
    console.log(i + '=' + i * i);
   
}
