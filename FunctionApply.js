const Programmer1 = {
    name: "vikrant",
    technology : "FullStack",
    feature : function(codeLine, grade){
        console.log(`Hello I am ${this.name}, my technology is ${this.technology}
                    , I wrote ${codeLine} line everyday. I am ${grade} in proramming`);
    }
}

// Programmer1.feature(500);

const Programmer2 = {
    name : "Ashwini",
    technology : "Angular",
}

// Programmer1.feature.call(Programmer2, 1000);
Programmer1.feature.apply(Programmer2,[1000, "good"])