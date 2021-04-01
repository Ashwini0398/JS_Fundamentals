const Programmer1 = {
    name: "Vikrant",
    technology: "FullStack",
}

const Programmer2 = {
    name: "Ashwini",
    technology: "Angular",
}

function feature(codeLine) {
    console.log(`Hello I am ${this.name}, my technology is ${this.technology}
                , I wrote ${codeLine} line everyday.`);
}

let fullStackProgrammer = feature.bind(Programmer1);
fullStackProgrammer(500);
let angularProgrammer = feature.bind(Programmer2);
angularProgrammer(1000);