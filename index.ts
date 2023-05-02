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

// type Rabbit = {
//     name: string;
// }

// type PetAge = {
//     age: number;
// }

// type RabbitAge = Rabbit & PetAge & {
//     isCute: boolean
// };

// const myPet: RabbitAge = {
//     name: 'Jonas',
//     age: 2,
//     isCute: true,
// }

// type ColorOfRoom = {
//     color: string
// }

// type Rooms = {
//     roomNumber: number
// }

// type ColorOfRoomRooms = ColorOfRoom & Rooms;

// const myRoom = {
//     color: 'baby pink',
//     roomNumber: 3
// }

// type Movie = {
//     readonly title: string,
//     originalTitle?: string,
//     director: string,
//     releaseYear: number,
//     boxOffice: {
//         budget: number,
//         grossUS: number,
//         grossWorldwide: number,
// }
// }

// const dune: Movie = {
//     title: 'Dune',
//     originalTitle: 'Dune Part One',
//     director: 'Dennis Villeneuve',
//     releaseYear: 2021,
//     boxOffice: {
//         budget: 1234345,
//         grossUS: 10234344,
//         grossWorldwide: 34390200,
//     },
// };

// const cats: Movie = {
//     title: 'Cats', 
//     director: 'Tom Hooper',
//     releaseYear: 2019,
//     boxOffice: {
//         budget: 902343,
//         grossUS: 21922302,
//         grossWorldwide: 2388024,
//     },
// }

// const getProfit = (movie: Movie): number => {
//     const { grossWorldwide, budget } = movie.boxOffice
//       return  grossWorldwide - budget
 
// }

// console.log(getProfit(dune))
// console.log(getProfit(cats))

// const actUSers: string[] = []
// actUSers.push('Tony')

// const noOfPipo: number[] = []
// noOfPipo.push(23)

// const bools: boolean[] = []


// type Point = {
//     x: number,
//     y: string
// }

// const testMe: Point [] = []
// testMe.push({x: 3, y: 'yamarita'})
// testMe.push({ x: 4, y:'flakes'})
// testMe.push({x: 3, y: 4})


// const boards: string[][] = [
//     ['X', 'O', 'X'],
//     ['X', 'O', 'X'],
//     ['X', 'O', 'X']
// ]

// const ages: number[] = []

// const gameBoard: string[][] = [];

// type Product = {
//     name: string,
//     price: number,
// }


// function getTotal(products: Product[] ): number {
//     let total = 0;
//     for (let product of products) {
//         total += product.price;
//     }

//     return total;
// }

 type Point = {
    x: number;
    y: number; 
 }

 type Loc  = {
    lat: number;
    long: number;
 }

 let coordinates: Point | Loc = {x: 1, y: 34}
 coordinates = { lat: 23.23, long: 24.34 }

const coords: (Point | Loc)[] = []
coords.push({lat: 23.44, long: 34.21})
coords.push({x: 23.44, y: 34.21})

let mood: 'Happy' | 'Sad' = 'Happy'
mood = 'Sad'