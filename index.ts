// function greet (person: string = 'stranger')  {
//     return `Hi there ${person}`
// }

// const doSomething = ( person: string, age: number, isFunny: boolean) => {};

// greet('sarah baaggigs')

// doSomething('Sarah Baggins', 12, false,)

// greet()

// function square(num: number):number {
//      return num * num
// }

// square(4)

// const add = (x: number, y: number): number => {
//     return x + y;
// };

// function rand(num:number) {
//     if(Math.random() < 0.5) {
//         return num.toString();
//     }
//     return num;
// }

// const colors = ['red', 'orange', 'yellow'];
// colors.map(color => {
//     return color.toUpperCase()
// })

// function printTwice(msg: string): void {
//     console.log(msg);
//     console.log(msg);
// }

// function twoFer(person: string = 'you' ): string {
//     return `one for ${person}, one for me.`;
// }
// console.log(twoFer());
// console.log(twoFer('Pearsons'));

// const isLeapYear= (year: number): boolean => {
//     return(year % 4 === 0 && year % 100 !== 0) ||  year % 400 === 0
// }
// console.log(isLeapYear(2012))


// const froP = (person: string = 'you'): string => {
//     return(`One for ${person}, One for me`)
// }
// console.log(froP())


// function printTName(person: {first: string; last: string}): void  {
//     console.log(`${person.first} ${person.last}`)
// }
// printTName({first: 'Thomas', last: 'Janes'})

// type Song = {
//     title: string;
//     artist: string;
//     numStreams: number;
//     credits: { producer: string; writer: string };
// }

// function calculatePayout (song:Song): number {
//     song.numStreams * .0033
// }

// function printSong (song: Song): void {
//     console.log(`${song.title} - ${song.artist}`);
// }

// type Point = {
//     x: number;
//     y: number;
//     z?: number;
// };   

// const myPoint: Point = {x : 1, y :2}


// type User = {
//     readonly id : number;
//     Username: String;
// }

// const User: User = {
//     id: 123,
//     Username: 'Batany'
// }

// console.log(User.id)
// User.id = 23456

//   type Colorful = {
//     color: String
//   };

//   type pet = {
//     petNumber: number
//   };

//   type ColorfulPet = Colorful & pet;

//     const petColour: ColorfulPet = {
//         color: 'red',
//         petNumber: 5;
//   }

//   type Cat = {
//     lives: number
//   }

//   type Dog = {
//     breed: string
//   }

//   type CatDog = Cat & Dog & {
//     age: number
//   }

//   const Chris: CatDog = {
//     lives: 4,
//     breed: 'Chihuahua';
//     age: 2
//   }