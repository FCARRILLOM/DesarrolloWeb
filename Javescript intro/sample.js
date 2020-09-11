console.log("inside my file");
second_var = 20;
console.log(second_var);

function first_func(arg_one, arg_two) {
    console.log(arg_one, arg_two);
}

first_func(10, "Bla")

let sec_func = function(arg_one, arg_two) {
    console.log(arg_one, arg_two);
}

let arr_fun = () => {
    console.log("inside my arr fun")
}

let iife_value = ((x) => { console.log(x) })(100)

function identity(price) {
    return price;
}

function double_price(price) {
    return price * 2;
}

function discount_exec(price_cal, price) {
    return price_cal(price) * 0.70;
}

function get_li_template(name, price) {
    return `<li class="added-item">name: ${name} price: ${price}</li>`
}

console.log(discount_exec(identity, 100));
console.log(discount_exec(double_price, 100));

document.getElementById("add-item").addEventListener("click", (event) => {
    console.log("click")
    let item_name = document.querySelector("#items").value;
    let item_price = document.querySelector("#price").value;
    let template = get_li_template(item_name, item_price);
    console.log(template);
    
    document.getElementById("list-items").innerHTML += template;
})

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(i);
}

for (let elem of arr) {
    console.log(elem, arr[elem]);
}

let arr2 = [1, 2, 3, 4, "bla", {a: 10}]

for (let i = 0; i < arr2.length; i++) {
    console.log(i, arr2[i], "third arg");
}

let obj = {
    a: 10,
    b: {
        c: "inside"
    },
    c: "bla"
}
console.log(obj);
for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
        console.log(prop, obj[prop]);
    }
}

let x = 0;
let y = 0;
while (x <= 5) {
    console.log(x++);
    console.log(++y);
}

let sentinel = -1;
while (sentinel) {
    console.log(sentinel);
    sentinel++;
}

sentinel = 10
console.log(sentinel == 10);
console.log(sentinel == "10");
console.log(sentinel === 10);
console.log(sentinel === "10");

if (sentinel == "10") {
    console.log("inside the if ==");
} else if (sentinel === 10) {
    console.log("inside the if ===");
} else {
    console.log("in the else");
}

switch ("one") {
    case "one":
        console.log("one");
        break;
    case "two":
        console.log("two");
        break;
    default:
        console.log("default");
}

function Dog() {
    this.talk = () => {
        console.log("talk in dog");
    }
}

function Duck() {
    this.talk = () => {
        console.log("talk in duck");
    }
}

function executeTalk(animal) {
    console.log(animal);
    animal.talk();
}

animal = new Duck();
executeTalk(animal);