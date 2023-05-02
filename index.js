// function greet (person: string = 'stranger')  {
//     return `Hi there ${person}`
// }
var dune = {
    title: 'Dune',
    originalTitle: 'Dune Part One',
    director: 'Dennis Villeneuve',
    releaseYear: 2021,
    boxOffice: {
        budget: 1234345,
        grossUS: 10234344,
        grossWorldwide: 34390200
    }
};
var cats = {
    title: 'Cats',
    director: 'Tom Hooper',
    releaseYear: 2019,
    boxOffice: {
        budget: 902343,
        grossUS: 21922302,
        grossWorldwide: 2388024
    }
};
var getProfit = function (movie) {
    var _a = movie.boxOffice, grossWorldwide = _a.grossWorldwide, budget = _a.budget;
    return grossWorldwide - budget;
};
console.log(getProfit(dune));
console.log(getProfit(cats));
