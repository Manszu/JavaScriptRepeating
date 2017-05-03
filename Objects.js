//object
var dog = {
    name: "Charlie",
    breed: "Mix",
    weight: 12,
    color: "Brown"
};

var dogWeight = dog.weight;
alert(dogWeight);

//adding property on the fly
dog.disposition = "wonderful;"
var disp = dog.disposition;

//properties are mutable
dog.weight=15;
