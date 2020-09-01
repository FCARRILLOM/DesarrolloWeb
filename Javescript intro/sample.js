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