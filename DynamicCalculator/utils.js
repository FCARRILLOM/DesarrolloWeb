function get_element_li (name, price) {
    return `<li class="added-item">name: ${name} price: ${price} <button class="remove-item">remove</button></li>`
}

let add_item_to_list_with_template = () => {
    return (event) => {
        console.log("click");
        // add item to the list
        let item_name = document.querySelector("#item-name").value;
        let item_value = document.querySelector("#item-value").value;
        let li_template = get_element_li(item_name, item_value);

        // add event listener to the button inside the element just added with the remove_item function
        document.getElementById("item-list").innerHTML += li_template;

        // add the value to the total
        let total = document.getElementById("total").innerHTML;
        document.getElementById("total").innerHTML = Number(total) + Number(item_value);
    }
}

document.getElementById("add-item").addEventListener("click", add_item_to_list_with_template());

let remove_item = (node_to_remove) => {

}