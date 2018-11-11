// // let and constant

//  // ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);

//  // ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6);

//  // ES5
// function driversLicence5 (passedT) {
//     if (passedT) {
//          console.log(firstName);
//         var firstName = 'John';
//         var yearOfBirth = 1990;
//     }
//     console.log(firstName + ', born in ' + yearOfBirth + ', can drive');
// }

// driversLicence5(true);

//  // ES6
// function driversLicence6 (passedT) {
//      console.log(firstName);
//     let firstName;
//     const yearOfBirth = 1990;

//     if (passedT) {
//         firstName = 'John';
//     }
//     console.log(firstName + ', born in ' + yearOfBirth + ', can drive');
// }

// driversLicence6(true);

// let i = 23;

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log(i);

// //  Lecuture: Blocks and IIFFE's

// {
//     const a = 1;
//     let b = 2;
//     var c = 3;
// }

//  console.lo(a + b);
// console.log(c);

// //  Lecutre : Strings

// //  Template Literals
// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;

// function calcAge (year) {
//     return 2016 - year;
// }

//  // ES5
// console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '.');

//  // ES6
// console.log(
//     `This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`
//     );

//      String Methods
//     const n = `${firstName} ${lastName}`;
//     console.log(n.startsWith('J'));
//     console.log(n.endsWith('th'));
//     console.log(n.includ// ES(' '));
//     console.log(`${firstName} `.repeat(5));

//      Lecture: Arrow function

//     const years = [ 1990, 1982, 1990, 1929 ];

//      // ES5
//     var ag// ES5 = years.map(function (el) {
//         return 2016 - el;
//     });
//     console.log(ag// ES5);

//      // ES6
//     let ag// ES6 = years.map((el) => 2016 - el);
//     console.log(ag// ES6);

//     ag// ES6 = years.map((el, index) => `Age element ${index + 1}: ${2018 - el}.`);
//     console.log(ag// ES6);

//     ag// ES6 = years.map((el, index) => {
//         const now = new Date().getFullYear();
//         const age = now - el;
//         return `Age element ${index + 1}: ${age}.`;
//     });
//     console.log(ag// ES6);

//      Lecture: Arrow functions 2
//      // ES5
//     var box5 = {
//         color: 'green',
//         position: 1,
//         clickMe: function () {
//             var self = this;
//             document.querySelector('.green').addEventListener('click', function () {
//             var str = 'This is box number ' + self.position + ' and it is ' + self.color;
//             window.alert(str);
//         });
//     }
// };
//  box5.clickMe();

//  // ES6
// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function () {
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             window.alert(str);
//         });
//     }
// };
// box6.clickMe();

//  const box66 = {
//      color: 'green',
//      position: 1,
//      clickMe: () => {
//          document.querySelector('.green').addEventListener('click', () => {
//              var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//              window.alert(str);
//          });
//      }
//  };
//  box66.clickMe();

// function Person (name) {
//     this.name = name;
// }

//  // ES5
//  Person.prototype.myFriends5 = function (friends) {
//      var arr = friends.map(
//          function (el) {
//              return this.name + ' is friends with ' + el;
//          }.bind(this)
//      );
//      console.log(arr);
//  };

//  var friends = [ 'Bob', 'Jane', 'Mark' ];
//  new Person('John').myFriends5(friends);

//  // ES6
// Person.prototype.myFriends6 = function (friends) {
//     var arr = friends.map((el) => `${this.name} is friends with ${el}`);
//     console.log(arr);
// };

// new Person('Mike').myFriends6(friends);

//  // // ES 5
//  var john = [ 'John', 26 ];
//  var name = john[1];
//  var age = john[2];

//  // ES 6
//  const [ name, age ] = [ 'John', 26 ];
//  console.log(name);
//  console.log(age);

//  const obj = {
//      firstName: 'John',
//      lastName: 'Smith'
//  };

//  const { firstName, lastName } = obj;
//  console.log(firstName);
//  console.log(lastName);

//  const { firstName: a, lastName: b } = obj;
//  console.log(a);
//  console.log(b);

//  function calcAgeRetirement (year) {
//      const age = new Date().getFullYear() - year;
//      return [ age, 65 - age ];
//  }

//  const [ age, retirement ] = calcAgeRetirement(1990);
//  console.log(age);
//  console.log(retirement);

//  const box// ES = document.querySelectorAll('.box');

//    // ES5
//  var box// ESArr6 = Array.prototype.slice.call(box// ES);
//  box// ESArr6.forEach(function (cur) {
//      cur.style.backgroundColor = 'dodgerblue';
//  });

//   // ES6
//  Array.from(box// ES).forEach((cur) => {
//      cur.style.backgroundColor = 'dodgerblue';
//  });

//  // ES5
//  for (var i = 0; i < box// ESArr5.length; i++) {
//      if (box// ESArr5[i].className === 'box blue') {
//          continue;
//      }
//      box// ESArr5[i].textContent = 'I changed to blue';
//  }

//  // ES6
//  for (const cur of box// ESArr6) {
//      if (box// ESArr6.className.includ// ES('blue')) {
//          continue;
//      }
//      cur.textContent = 'I changed to blue';
//  }

//  // ES5
//  var ag// ES = [ 12, 17, 6, 21, 11 ];
//  var full = ag// ES.map(function (cur) {
//      return cur >= 18;
//  });
//  console.log(full);

//  console.log(full.indexOf(true));
//  console.log(ag// ES[full.indexOf(true)]);

//   // ES6
//  console.log(ag// ES.findIndex((cur) => cur >= 18));
//  console.log(ag// ES.find((cur) => cur >= 18));

//  function addFourAg// ES (a, b, c, d) {
//      return a + b + c + d;
//  }
//  var sum1 = addFourAg// ES(17, 23, 99, 23);
//  console.log(sum1);

//   // ES5
//  var ag// ES = [ 18, 23, 32, 33 ];
//  var sum2 = addFourAg// ES.apply(null, ag// ES);

//  console.log(sum2);

//   // ES6
//  const sum3 = addFourAg// ES(...ag// ES);
//  console.log(sum3);

//  const familySmith = [ 'john', 'jane', 'mark' ];
//  const familyMiller = [ 'mary', 'bob', 'harry' ];
//  const bigFamilty = [ ...familySmith, 'Lily', ...familyMiller ];
//  console.log(bigFamilty);

//  const h = document.querySelector('h1');
//  const box// ES = document.querySelectorAll('.box');
//  const all = [ h, ...box// ES ];

//  Array.from(all).forEach((cur) => {
//      cur.style.color = 'purple';
//  });

//  // ES5
//  function isFullAg// ES5 () {
//       console.log(arguments);
//      var argsArr = Array.prototype.slice.call(arguments);
//      argsArr.forEach(function (cur) {
//          console.log(2018 - cur >= 18);
//      });
//  }

//  isFullAg// ES5(1990, 1999, 1965);

//   // ES6
//  function isFullAge6 (...years) {
//      years.forEach((cur) => console.log(2018 - cur >= 18));
//  }

//  isFullAge6(1990, 1999, 2010, 1865, 2016);
//  // ES5
//  function isFullAg// ES5 (limit) {
//       console.log(arguments);
//      var argsArr = Array.prototype.slice.call(arguments, 1);
//       console.log(argsArr);

//      argsArr.forEach(function (cur) {
//          console.log(2018 - cur >= limit);
//      });
//  }

//   isFullAg// ES5(18, 1990, 1999, 2001);

//   // ES6
//  function isFullAge6 (limit, ...years) {
//      years.forEach((cur) => console.log(2018 - cur >= limit));
//  }

//  isFullAge6(18, 1999, 2010, 1865, 2016);

// Default Parameters
// function SmithPerson (firstName, yearOfBirth, lastName, nationality) {
//     lastName === undefined ? (lastName = 'Smith') : (lastName = 'lastName');
//     nationality === undefined ? (nationality = 'american') : (nationality = 'nationality');

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.Nationality = nationality;
// }

// var john = new SmithPerson('John', 1990);
// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
// function SmithPerson (firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.Nationality = nationality;
// }
// var john = new SmithPerson('John', 1990);
// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');

// const question = new Map();
// question.set('question', 'What is the official name of the latest major avsScript verion?');
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set(true, 'Correct answer');
// question.set(false, 'Wrong, please try again');

// console.log(question.get('question'));
// // console.log(question.size);

// if (question.has(4)) {
//     // question.delete(4);
//     // console.log('Answer 4 is here');
// }

// // question.clear();

// // question.forEach((value, key) => {
// //     console.log(`This is ${key}, and it's set to ${value}`);
// // });

// for (let [ key, value ] of question.entries()) {
//     // console.log(`This is ${key}, and it's set to ${value}`);
//     if (typeof key === 'number') {
//         console.log(`Answer ${key}:${value}`);
//     }
// }

// const ans = parseInt(prompt('Write the correct answer'));
// console.log(question.get(ans === question.get('correct')));

// var Person5 = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// };

// Person5.prototype.calcuateAge = function () {
//     var age = new Date().getFullYear - this.yearOfBirth;
//     console.log(age);
// };

// var john5 = new Person5('John', 1990, 'teacher');

// class Person6 {
//     constructor (name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     calcuateAge () {
//         var age = new Date().getFullYear - this.yearOfBirth;
//         console.log(age);
//     }

//     static greeting () {
//         console.log('Hey there');
//     }
// }

// const john6 = new Person6('John', 1990, 'teacher');

// Person6.greeting();

// var Person5 = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// };

// Person5.prototype.calcuateAge = function () {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
// };

// var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
//     Person5.call(this, name, yearOfBirth, job);
//     this.olympicGames = olympicGames;
//     this.medals = medals;
// };

// Athlete5.prototype = Object.create(Person5.prototype);

// Athlete5.prototype.wonMedal = function () {
//     this.medals++;
//     console.log(this.medals);
// };

// var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

// johnAthlete5.calcuateAge();
// johnAthlete5.wonMedal();

// class Person6 {
//     constructor (name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     calcuateAge () {
//         var age = new Date().getFullYear() - this.yearOfBirth;
//         console.log(age);
//     }
// }

// class Athlete6 extends Person6 {
//     constructor (name, yearOfBirth, job, olympicGames, medals) {
//         super(name, yearOfBirth, job);
//         this.olympicGames = olympicGames;
//         this.medals = medals;
//     }
//     wonMedal () {
//         this.medals++;
//         console.log(this.medals);
//     }
// }

// const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

// johnAthlete6.wonMedal();
// johnAthlete6.calcuateAge();
