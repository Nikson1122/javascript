const hero =["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// console.log(hero);
// console.log(hero[3] [1]);

// const allHeros = hero.concat(dc)
// console.log(allHeros);

const all_new_heros = [...hero, ...dc]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 5], 7,[ 6, 7,[ 4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array );

console.log(Array.isArray("nikson"))
console.log(Array.from("nikson"))
console.log(Array.from({name: "nikson"})) // important for interview

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));

