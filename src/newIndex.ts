const input = document.getElementById('todoInput')! as HTMLInputElement;
const btn = document.getElementById('btn')! as HTMLButtonElement;

btn.addEventListener('click', function () {
    console.log('clicked')
    console.log(input.value)
    input.value = '';
});




// interface Chicken {
//     breed: string;
//     eggsPerWeek: number;
//     name: string;
// }

// const norma: Chicken = {
//     breed: 'Silkie',
//     eggsPerWeek: 5,
//     name: 'Norma,'
// };

// function printDouble(msg: string) {
//     console.log(msg)
// }

// printDouble('Hello pips ')

// const btn = document.getElementById('btn')
