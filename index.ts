function greet (person: string = 'stranger')  {
    return `Hi there ${person}`
}

const doSomething = ( person: string, age: number, isFunny: boolean) => {};

greet('sarah baaggigs')

doSomething('Sarah Baggins', 12, false,)

greet()

function square(num: number):number {
     return num * num
}

square(4)

const add = (x: number, y: number): number => {
    return x + y;
};

function rand(num:number) {
    if(Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}

const colors = ['red', 'orange', 'yellow'];
colors.map(color => {
    return color.toUpperCase()
})

function printTwice(msg: string): void {
    console.log(msg);
    console.log(msg);
}