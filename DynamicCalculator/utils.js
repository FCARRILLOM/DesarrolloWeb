function get_element_li (name, price) {
    return `<li class="added-item">${name} - $<span class="price">${price}</span> <button class="remove-item">remove</button></li>`
}

function update_total () {
    console.log("Calculating total...");

    let item_list = document.getElementById("item-list");
    let item_rows = item_list.getElementsByClassName("added-item")
    let total = 0.0;
    for (var i = 0; i < item_rows.length; i++) {
        let price = item_rows[i].getElementsByClassName("price")[0];
        let price_value = Number(price.innerHTML);
        total += price_value;
    }
    document.getElementById("total").getElementsByClassName("total-value")[0].innerHTML = total;
}

function check_valid_input(input) {
    if (input.length > 0 && isNaN(input)) {
        return false;
    }
    return true;
}

let update_container_color = () => {
    return (event) => {
        let container = document.getElementById("container");
        let item_value = document.querySelector("#item-value").value;
        if (!check_valid_input(item_value)) {
            console.log("Inavlid value");
            container.style.borderColor = "red";
        } else {
            container.style.borderColor = 'white';
        }
    }
}

let add_item_to_list_with_template = () => {
    return (event) => {
        console.log("Adding item...");
        // add item to the list
        let item_name = document.querySelector("#item-name").value;
        let item_value = document.querySelector("#item-value").value;
        let li_template = get_element_li(item_name, item_value);

        // check for empty values
        if (item_name.length == 0 || item_value.length == 0) {
            console.log("Empty item");
            return;
        }

        // check invalid input
        if (!check_valid_input(item_value)) {
            return;
        }

        let item_list = document.getElementById("item-list");
        let item_element = document.createElement("li");
        item_element.innerHTML = li_template;
        item_list.appendChild(item_element);

        // add event listener to the button inside the element just added with the remove_item function
        let btn = item_element.getElementsByClassName("remove-item")[0];
        btn.addEventListener("click", remove_item());

        // add the value to the total
        update_total();
    }
}

let remove_item = () => {
    return (event) => {
        console.log("Removing item...");
        let node_to_remove = event.target;
        node_to_remove.parentNode.parentNode.remove();
        update_total();
    }
}

document.getElementById("add-item").addEventListener("click", add_item_to_list_with_template());
document.getElementById("container").addEventListener("input", update_container_color());
