// variable
var nameOfSchool = "FPT University";
var age = 19;


/* built-in function
1. Alert
2. Console
3. Confirm
4. Prompt
5. Set timeout
6. Set interval
*/


/* Giới thiệu về toán tử trong Javascript
1. Toán tử số học - Arithmetic
2. Toán tử gán - Assignment
3. Toán tử so sánh - Comparison
4. Toán tử logic - Logical
*/


/* Toán tử số học 
   +   Cộng
   -   Trừ
   *   Nhân
   **  Luỹ thừa
   /   Chia
   %   Chia lấy số dư
   ++  Tăng 1 giá trị số
   --  Giảm 1 giá trị số
*/

/**  Toán tử gán
  Toán tử                    Ví dụ                    Tương đương
    =                        x = y                    x = y
    +=                       x += y                   x = x + y
    -=                       x -= y                   x = x - y
    *=                       x *= y                   x = x * y
    /=                       x /= y                   x = x / y
    **=                      x **= y                  x = x ** y
*/



/* Đây là 2 toán tử nghe qua thì rất dễ hiểu, nhưng để hiểu nguyên lý về cách hoạt động của nó chúng ta sẽ phải mất thêm một chút thời gian đó. Để hoàn thành bài học về 2 toán tử này, chúng ta sẽ cùng trải qua một số bài học sau nhé.

Ok, bắt đầu thôi!
Toán tử ++
Toán tử ++ giúp tăng giá trị của một biến mang giá trị số lên 1. Có 2 cách để sử dụng toán tử ++ là:

Dùng làm hậu tố: variable++ (toán tử nằm sau biến)
Dùng làm tiền tố: ++variable (toán tử nằm trước biến)
#1 Sử dụng ++ làm hậu tố
Ở đây, chúng ta sẽ xét ví dụ sử dụng toán tử ++ làm hậu tố trước (vì trong thực tế, chúng ta thường dùng kiểu hậu tố nhiều hơn):  */
var number = 1;

number++; // dùng làm hậu tố, ++ ở phía sau biến
console.log(number); // 2

number++;
console.log(number); // 3
/* Sau mỗi khi sử dụng toán tử ++, giá trị của biến number được tăng lên 1. Có vẻ khá dễ dàng để hiểu cách hoạt động của nó phải không?

Tuy nhiên, hãy xem xét thêm ví dụ sau: */
var number = 1;

console.log(number++); // 1
console.log(number); // 2

console.log(number++); // 2
console.log(number); // 3
/*👉 Toán tử ++ khi dùng là hậu tố sẽ tăng giá trị của biến lên 1 và trả về giá trị trước khi tăng. */
/* 
#2 Sử dụng ++ làm tiền tố
Ở ví dụ này, chúng ta sử dụng ++ làm tiền tố. Tuy nhiên, kết quả trông sẽ không khác gì khi dùng ++ làm hậu tố:

var number = 1;

++number; // dùng làm tiền tố, ++ ở phía trước biến
console.log(number); // 2

++number;
console.log(number); // 3
Nhưng khi xem xét kỹ hơn, các bạn sẽ nhìn ra điểm khác: */
var number = 1;


/* 👉 Toán tử ++ khi dùng là tiền tố sẽ tăng giá trị của biến lên 1 và trả về giá trị sau khi tăng. */
console.log("Note");
// Prefix & Postfix

/** Postfix
 // Việc 1: a copy , a copy = 6
 // Việc 2: Trừ 1 của a, a = a - 1 ==> a = 5
 // Việc 3: Trả về a copy
 */
var a = 9;
var output = a++;
console.log(output);
console.log(a);
/* Muốn trả về giá trị của a thì phải console.log(a) */
var number = 5;
var output = number++ + --number;
console.log(output);
/* number++ thì sẽ giữ nguyên là 5 , --number là trừ đi 1 giá trị sau đó của number , tức là (5 + 1) - 1 = 5 
=> 5 + 5 = 10 
*/ 
var output = ++number * 2 - number-- * 2
console.log(output);
// 6 * 2 - 6 * 2 = 0

/**
 * Toán tử chuỗi - String operator
 */
var firstName = "Ha" ;
var lastName  = "Truong";
console.log(firstName + ' '+ lastName);

var name = "Truong";
lastName = "Ha";
name += " "+ lastName
console.log(name);

/* Toán tử                        Ý nghĩa
==                                Bằng
!=                                Không bằng
>                                 Lớn hơn
<                                 Nhỏ hơn
>=                                Lớn hơn hoặc bằng
<=                                Nhỏ hơn hoặc bằng
*/
var a = 3
var b = 3
var c = "jBoy"
var d = "jBoy"
if (d = c){
    console.log("Dung")
} else {
    console.log("Sai")
}
var isSuccess = a <= b;
console.log(isSuccess);

/**
 * If - else
 */
if (undefined) {
    console.log("Dieu Kien Dung")
} else {
    console.log("Dieu Kien Sai")
}
/**   Value
 * 0
 * false
 * '' - ""
 *  undefined
 * NaN
 * null
 */
// Nếu đưa giá trị Value vào thì hầu hết là ̣(false), trử true là (true)

var number = 46;
var soDu = number % 2;
var isSuccess = soDu =! 1;
console.log(isSuccess);

/* Toán tử logic
 1. && - And
 2. || - Or
 3. ! - Not
 */

 /* Kiểu dữ liệu trong Javascript
 1. Dữ liệu nguyên thuỷ - Primitive data
    - Number        
    - String 
    - Boolean
    - Underfined
    - Null
    - Symbol

 2. Dữ liệu phức tạp - Complex Data
    - Function
    - Object
*/

// Number type
var a = 1 ;
var b = 2 ;
var c = 1.5 ;

// String type
var fullName = "Ha Truong";

// Boolean 
var isSuccess = true ;
var isSuccess = false ;

// Underfined
var ages; // không gán giá trị
console.log(ages);

// Null


// Symbol
var id = Symbol('id');  // unique
var id2 = Symbol('id2'); // unique
console.log(id == id2);

// Function
var myFunction = function(){
    alert('Hi, hello everyone')
}

// Object types
var myObject = {
    name: 'Ha Truong',
    age: 19,
    address: 'Ha Noi',
    myFunction: function() {

    }
};


console.log(myObject);

var myArray = ["Ha Truong" , "Vietnam", "FPT"];
console.log(myArray);

// Toán tử so sánh - P2
/**
 * ===
 * !==
 * 
 */
var a = 3 ;
var b = 5 ;

var result = a < b || a > b 
if (result){
    console.log("True");
} else{
    console.log("False");
}

/* Hàm (function) trong Javascript

1. Hàm ?
  - Một khối mã
  - Làm một việc cụ thể

2. Loại hàm
  - Built-in
  - Tự định nghĩa

3. Tính chất
  - Không thực thi khi định nghĩa
  - Sẽ thực thi khi được gọi
  - Có thể nhận tham số
  - Có thể trả về 1 giá trị

4. Tạo hàm đầu tiên
*/

function autoAlert() {
    console.log("result", result);
    alert("Hàm này đã được thực thi");
   
}
var c = 50;
var d = 100;
var result = c < d && c + 100 > d & " " ;


/* 
1. Tham số?
    - Định nghĩa?
    - Kiểu dữ liệu?
    - Tính private?
    - 1 tham số
    - Nhiều tham số

2. Truyền tham số
    - 1 tham số
    - Nhiều tham số

3. Arguments?
    - Đối tượng arguments
    - Giới thiệu vòng for - of

    */

function logger() {
    var plus = ""
    for (var param of arguments) {
        plus += param ;
    
    }
    console.log(plus);
}
logger("message1- ", "message2- ", "message3- ", "message4 ");

// Return trong hàm - Javascript cơ bản


function plus(a, b) {
    return a / b;
}
result = plus(4 , 4);
console.log(result);

/* Một số điều cần biết về function
1. Khi function đặt trùng tên
2. Khai báo biến trong hàm
3. Định nghĩa hàm trong hàm
*/

function function1 () {
    function function2 () {
        function function3 (a, b) {
            console.log(a + b);
        }
        function3(7, 8);
    }
    function2();
}
function1();

/* Các loại function
  1. Declaration function
  2. Expression function
  3. Arrow function
  */

// Declaration function

showMessage();
function showMessage() {
    console.log('Declaration function');
}
// Declaration function có thể được gọi trước khi định nghĩa
// Expression function thì không
var showMessage2 = function Message2()  {
    console.log('Expression function')
}
showMessage2();

/* CHUỖI TRONG JAVASCRIPT

1. Tạo chuỗi
    - Các cách tạo chuỗi
    - Nên dùng cách nào? Lý do?
    - Kiểm tra data type
2. Một số case sử dụng backslash (\)
3. Xem độ dài chuỗi
4. Chú ý độ dài khi viết code
5. Template string ES6
*/

//Nên dùng cách cơ bản nhất để tạo chuỗi
var fullName = "Ha Truong"

//Kiểm tra data type
console.log(typeof fullName);

/** Một số case sử dụng backslash
 * Khi muốn thêm dấu ngoặc kép vào trong một string
 * Khi muốn thêm dấu backslash ở cuối string
 */

// Khi muốn thêm dấu ngoặc kép vào trong một string: \ + ' = ' ; \ + " = "
var introduction = '\'jBoy \' is Ha Truong'
console.log(introduction);

// Khi muốn thêm dấu backslash : \ + \ = \
var introduction = 'jBoy is Ha \\ Truong \\'
console.log(introduction);
 
// Xem độ dài chuỗi
console.log(introduction.length);

//Template string ES6
var firstName = "Truong";
var lastName = "Ha";
var fullName = `jBoy is ${lastName} ${firstName}`
console.log(fullName);

//** LÀM VIỆC VỚI CHUỖI 
var myString = "Welcome to, JS , JS , JS , JS"

// 1. Length

// 2. Find index
console.log(myString.indexOf('JS')) // 12
console.log(myString.indexOf('JS', 14)) // 17
console.log(myString.lastIndexOf('JS')) //27
console.log(myString.search('JS')) // 12
console.log(myString.search('JS', 14))  // 12

//3. Cut string 
console.log(myString.slice(8 , 10)); // to
console.log(myString.slice(0, 10)); // Welcome to
console.log(myString.slice(-2, 0)); // JS (at last) cắt từ phải sang trái

// 4. Replace
console.log(myString.replace('JS', 'Javascript'));
console.log(myString.replace(/JS/g, 'Javascript'));

// 5. Convert to upper case
console.log(myString.toUpperCase());

//6. Convert to lower case
console.log(myString.toLowerCase());

// 7. Trim (Loại bỏ khoảng trống) 
var myString1 = "    We love Javascript!       "
console.log(myString1.length) // 30 ;
console.log(myString1);
var trim = myString1.trim();
console.log(trim);
console.log(trim.length) // 19 ;

// 8. Split (Cắt tạo thành array từ những điểm chung trong chuỗi)

var cities = 'New York, Hanoi, Bangkok' ;
console.log(cities.split(', '));
console.log(cities.split(''));

// 9. Get a character by index
var myString2 = "Ha Truong";
console.log(myString2.charAt(6));
console.log(myString2[4]);

var myString3 = "I want to earn money by JS JS C C JS"


/* 
Kiểu số (Number) trong Javascript

1. Tạo giá trị Number
    - Các cách tạo
    - Dùng cách nào? Tại sao?
    - Kiểm tra data type

2. Làm việc với number
    - To string // Chuyển đổi một số thành dạng string
    - To fixed
*/
// To string
var age = 18 ;
var myString= age.toString();
console.log(myString);
console.log(typeof myString); //string

// To fixed
var number = 433.2;
var fixed = number.toFixed(4);
console.log(fixed);



function isNumber(value) {
    return typeof value === 'number';
}
console.log(isNumber(number));


/* Mảng - array
 1. Tạo mảng
    - Cách tạo
    - Sử dụng cách nào? Tại sao ?
    - Kiểm tra data type?

 2. Truy xuất mảng
    - Độ dài mảng
    - Lấy phần tử theo index
*/

var language =[
    'Javascript' , 
    'Python' ,
    'C'
]
// Kiểm tra xem có phải một array không
console.log(Array.isArray(language)) // true;


/* Làm việc với Array */


// 1. To string (Chuyển array sang string)
console.log(language.toString()); // Javascript,Python,C

// 2. Join (Chuyển sang string nhưng ngăn cách các phần tử)
console.log(language.join(' - ')) // Javascript - Python - C
console.log(language.join(' ')) // Javascript Python C

// 3. Pop (Xoá element cuối và trả về phần tử đã xoá)
console.log(language.pop()); // C
console.log(language); // ['Javascript' , 'Python']
console.log(language.pop()); // Python
console.log(language); // Javascript
console.log(language.pop()); // Javascript
console.log(language); // []
console.log(language.pop())// undefined
console.log(language); // []

// 4. Push (Đẩy element được thêm vào cuối của array)
var cities1 = ['Ha Noi', 'New York', 'Bang Kok'];
console.log(cities1);
console.log(cities1.push('London', 'Singapore' )) // 5 = length
console.log(cities1); // ['Ha Noi', 'New York', 'Bang Kok', 'London', 'Singapore']
console.log(cities1.push('Berlin')); // 6
console.log(cities1); // ['Ha Noi', 'New York', 'Bang Kok', 'London', 'Singapore', 'Berlin']

// 5. Shift ( Xoá phần tử đầu mảng)
cities1.shift()
console.log(cities1)  // ['New York', 'Bang Kok', 'London', 'Singapore', 'Berlin']
console.log(cities1.shift()) // New York
console.log(cities1) // ['Bang Kok', 'London', 'Singapore', 'Berlin']

// 6. Unshift ( Thêm phần tử vào đầu mảng)

console.log(cities1); // ['Bang Kok', 'London', 'Singapore', 'Berlin']
cities1.unshift('Seoul' , 'Berlin');
console.log(cities1); // ['Seoul', 'Berlin', 'Bang Kok', 'London', 'Singapore', 'Berlin']
 
// 7. Splicing ( Chèn hoặc xoá phần tử ở một vị trí được chọn và cho kết quả là phần tử sau khi được cắt)
 
/*  array.splice(a, b, c) 
     a là vị trí con trỏ 
     b là số phần tử bị xoá
     c là phần tử được thêm
     */
    cities1.splice(1 , 1);
    console.log(cities1); // ['Seoul', 'Bang Kok', 'London', 'Singapore', 'Berlin']
    cities1.splice(1, 2);
    console.log(cities1); // ['Seoul', 'Singapore', 'Berlin']
    cities1.splice(2, 0 ,'Melbourne', 'Toronto');
    console.log(cities1); // ['Seoul', 'Singapore', 'Melbourne', 'Toronto', 'Berlin']
    cities1.splice(0, 2, 'Tokyo');
    console.log(cities1) // ['Tokyo', 'Melbourne', 'Toronto', 'Berlin']

// 8. Concat ( Nối các arrays lại với nhau)
    var cities2 = ['Nha Trang', 'Ho Chi Minh', 'Shanghai'];
    console.log(cities1.concat(cities2)); // ['Tokyo', 'Melbourne', 'Toronto', 'Berlin', 'Nha Trang', 'Ho Chi Minh', 'Shanghai']
    console.log(cities2.concat(cities1.concat(age))); // ['Nha Trang', 'Ho Chi Minh', 'Shanghai', 'Tokyo', 'Melbourne', 'Toronto', 'Berlin', 18]
    console.log(cities2.concat(cities1)); //['Nha Trang', 'Ho Chi Minh', 'Shanghai', 'Tokyo', 'Melbourne', 'Toronto', 'Berlin']

// 9. Slicing (Cắt đi phần tử từ vị trí bắt đầu và kết thúc được chọn và cho kết quả là phần tử đã cắt)

    console.log(cities2.slice(0, 1)) // ['Nha Trang']
    console.log(cities1) // ['Tokyo', 'Melbourne', 'Toronto', 'Berlin']
    console.log(cities1.slice(1, 3)) // ['Melbourne', 'Toronto']


/* Object trong Javascript */

// Khai báo định nghĩa key và value
var nickName = 'nick-name'
var info = {
    name: 'Ha Truong',
    school: 'FPT University',
    age: 19,
    getName : function() {
        return this.name
    },
}
console.log(info);
console.log(info.getName())

// Thêm một cặp key và value sau khi tạo object
info.email = 'youngboy321000@gmail.com';
console.log(info); //{name: 'Ha Truong', school: 'FPT University', age: '19', email: 'youngboy321000@gmail.com'}
info['old-email'] = 'truonggioitoan@gmail.com';
console.log(info);
info[nickName] = 'JBoy' ;
console.log(info);


// In value
console.log(info.age); // 19
console.log(info.school); // FPT University
console.log(info['old-email']); // truonggioitoan@gmail.com


// Xoá value
delete info.age;
console.log(info);
delete info[nickName];
console.log(info)

// Khai báo function trong value

// Function --> Phương thức (method)
// Other --> Thuộc tính (property)

// Object constructor
function student(firstName, lastName, nationality, school) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nationality = nationality;
    this.school = school; 
}

var Ha_Truong = new student('Truong', 'Ha', 'Viet Nam', 'FPT University');
var Kim_Jong_Un = new student('Jong Un', 'Kim', 'North Korea', 'Seoul University');
student.prototype.major = 'Software Engineer'
console.log(Ha_Truong);
console.log(Kim_Jong_Un);
student.prototype.getNationality = function() {
    return this.nationality; 
}
console.log(Ha_Truong.getNationality());

// Đối tượng date

var date = new Date();
var day = date.getDate() ;
var month = date.getMonth() + 1 ; 
var year = date.getFullYear() ;
console.log(day);
var fullDate = `${day}/ ${month}/ ${year}`;
console.log(fullDate);



var date = new Date();
function getNextYear() {
    return date.getFullYear() + 1
}
console.log(getNextYear());

function getNextYear() {
    return new Date().getFullYear() + 1 
}
console.log(getNextYear());
// Những giá trị bất biến thì k nên thêm biến vào


/* Math object 
*/

// Math.PI  // Tạo ra số pi
console.log(Math.PI); // 3.141592653589793

// Math.round() // Làm tròn
console.log(Math.round(23.432321)); // 23
console.log(Math.round(41.7634343)); // 42

// Math.abs()  // Lấy giá trị tuyệt đối
console.log(Math.abs(32));  // 32
console.log(Math.abs(-98)); // 98

// Math.ceil() // Làm tròn trên 
console.log(Math.ceil(42.2321123)); // 43
console.log(Math.ceil(165.0000001)) // 166

// Math.floor() // Làm tròn dưới
console.log(Math.floor(64.9999999999)) // 64
console.log(Math.floor(322.5434212)) // 322

// Math.random() // Lấy một giá trị bất kì từ 0 đến 1 
console.log(Math.random()) // 0.22291123537142332 ;

// Math.max() // Lấy giá trị lớn nhất
console.log(Math.max(32, 653, 16, -921)) // 653 ;
var number1 = 43;
var number2 = 63;
var number3 = 632
console.log(Math.max(number1, number2, number3)) // 632 ;

// Math.min()  // Lấy giá trị nhỏ nhất
console.log(Math.min(632, 17, 310, 56, -24, -52)) // -52 ;

// Tạo game
var bonus = Math.ceil(Math.random() * 100) ;
if (bonus < 5) {
    console.log('Bạn nhận được đá quý!');
} else{
    console.log('Rất tiếc! Bạn không nhận được đá quý!');
}



var playerPack = ['Ronaldo', 'Messi' , 'Salah', 'Son'];
console.log(playerPack[0]);

// Câu lệnh rẽ nhánh - If else
 


numberArray = number.toString();
function divideBy(a) {
    if (a % 15 === 0) {
        return 3
    } else if (a % 5 === 0) {
        return 2
    } else if (a % 3 === 0) {
        return 1
    }
}
console.log(divideBy(15));

// If - else sử dung khi so sánh tính đúng sai và có ít giá trị



/* Câu lệnh rẽ nhánh */

// Switch case sử dụng khi cho giá trị cho trước và có nhiều giá trị
var day = 9;
switch(day) {
    case 2:
        console.log('Hôm nay là thứ hai');
        break;
    case 3:
        console.log('Hôm nay là thứ ba');
        break;
    case 4:
        console.log('Hôm nay là thứ tư');
        break;
    case 5:
        console.log('Hôm nay là thứ năm');
        break;
    case 6:
        console.log('Hôm nay là thứ sáu');
        break;
    case 7:
        console.log('Hôm nay là thứ bảy');
        break;
    default: 
        console.log('Không có giá trị');
        break;
}

// Toán từ 3 ngôi
var value = 3;
var comparison = value > 3 ? 'Số này lớn hơn 3' : 'Số này nhỏ hơn hoặc bằng 3';
console.log(comparison);


var playerPack = ['Ronaldo', 'Messi', 'Vinicius', 'Salah', 'Ronaldinho'];
function getPlayer(array) {
    var random = Math.random() * array.length;
    var getNumber = Math.floor(random) ;
    return playerPack[getNumber] ;
}
var player = getPlayer(playerPack);
var favoritePlayer = player === 'Messi' || player === 'Ronaldo' ? 'This is my favorite player' : 'This is not my favorite player'
console.log(player);
console.log(favoritePlayer);



function getCanVoteMessage(age) {
    var canVote = age >= 18 ? "Bạn có thể bỏ phiếu" : "Bạn chưa được bỏ phiếu";
    return canVote
}
console.log(getCanVoteMessage());

/* Vòng lặp - Loop 

1. for - Lặp với điều kiện đúng
2. for/in - Lặp qua key của đối tượng (array, string, object)
3. for/of - Lặp qua value của đối tượng.
4. while - Lặp khi điều kiện đúng
5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
*/

// For loop




function getRandNumbers(min, max, length) {
    var getNumber = min + (max - min) * Math.random();
    var numberArray = [];
    for (var i = 0; i < length; i++) {
        numberArray[i] = getNumber ;
    }
    return numberArray;
}
var numbers = [23, 42, 19]; 
/*
// i = 0
var getTotal = number[0];
// i = 1
var getTotal = (number[0]) + number[1];
// i = 2
var getTotal 
*/

function getTotal(numbers) {
    var getTotal = 0;
    for (var i = 0; i < numbers.length; i++) {
        getTotal = getTotal + numbers[i];
    }
    return getTotal
}
var numbers = [45, 11, 86];
console.log(getTotal(numbers));


function getTotal(arr) {
    var getTotal = 0;
    for (var i = 0; i < arr.length ; i++) {
        getTotal = getTotal + arr[i]
    }
    return getTotal
}


var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

function getTotal(order) {
    var price = 0;
    for (var i = 0; i < order.length; i++) {
        price = price + order[i].price; 
    }
    return price;
}
console.log(getTotal(orders))

/* For/ in loop
// Key của array là số

*/
// Objects


var myObject = {
    item : 'riverOfBlood',
    price : 60000,
    ashofWar: 'Bloody Slash',
}
for (var details in myObject){
    console.log(myObject[details]);
}

// Array
var myArray = ['Ha truong', 19, 'FPT University', 'JBOY'];
for (var introduction in myArray) {
    console.log(introduction);
    console.log(myArray[introduction]);
}

// String
var myString = 'My name is Ha Truong';
for (var introduce in myString) {
    console.log(myString[introduce]);
}

function run(object) {

}

function run(object) {
    return object
}

var vanA = {
    name: 'Nguyen Van A',
    age: 16,
}
for (var infor in vanA) {
    console.log(`Thuộc tính ${infor} có giá trị ${vanA[infor]}`)
}
function run(object) {
    return object
}

// For - of loop (Lấy ra value)

// String
var name = 'Ha Truong';
for (var value of name) {
    console.log(value);
}
// Array
var array = ['Ha Truong', 19, 'FPT'];
for (var value of array) {
    console.log(value);
}

// Object
var information = {
    name : 'Ha Truong',
    age: 19,
    university: 'FPT',
    nationality: 'Viet Nam',
}
for (var value of Object.values(information)) {
    console.log(value);
}
for (value of Object.keys(information)) {
    console.log(value);
}
/* Vòng lặp while
while (điều kiện) {
    // Khối mã thực thi
}  */
var i = 0;
while (i < 1000) {
    i++ ;
    console.log(i);
}
var i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++
}

// Do - while loop
var i = 0;
do {
    i++ ; 
    console.log(i);
} while(i < 1000);

// break, continue
for ( var i = 0; i <= 10 ; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }

}
for (var i = 0; i <= 10 ; i++) {
    if (i % 2 !== 0){
        console.log(i);
    }
}
for (var i = 0; i <= 10; i ++) {
    if (i % 2 !== 0){

    } else {
        console.log(i);
    } 
}

// Nested loop 
var myArray = [
    [2, 5, 7],
    [3, 7, 1],
    [9, 5, 2],
    [0, 3, 6],
]
for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
for (var i = 0; i < myArray.length; i++) {
    for(var j = 0; j < myArray[i].length; j++){
        console.log(myArray[i][j]);
    }
}
var numberArray = [];
var j = 0;
for (var i = 0; i < 1000; i++ ){
    if (i % 35 === 0) {
    console.log(i);
    numberArray[j] = i;
    j = j + 1;
    }
}
console.log(numberArray.length);
var numberArray2 = [];
var j = 0;
for (var i = 1000; i > 0; i--) {
    if (i % 45 ===0) {
        console.log(i);
        numberArray2[j] = i;
        j = j + 1;
    }
}
console.log(numberArray2);




