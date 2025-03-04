const userInputString = prompt(
    "Hi There! Please enter a list of comma-separated froyo flavors.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const stringArray = userInputString.split(",");

const flavors = {};

for(let i = 0; i < stringArray.length; i++){
    let flavor = stringArray[i].trim();
    if (flavors[flavor]){
        flavors[flavor] +=1;
    } else {
        flavors[flavor] = 1;
    }
}

console.log(flavors);
console.table(flavors);