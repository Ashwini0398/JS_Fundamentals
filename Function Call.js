const Programmer1 = {
    name: "Vikrant",
    technology : "FullStack",
    feature : function(codeLine){
        console.log(`Hello I am ${this.name}, my technology is ${this.technology}
                    , I wrote ${codeLine} line everyday.`);
    }
}

// Programmer1.feature(500);

const Programmer2 = {
    name : "Ashwini",
    technology : "Angular",
}

Programmer1.feature.call(Programmer2, 1200);