
function get_element_li (name, weight) {
    return `<li class="added-item">
        <img class="icon">${name} -<span class="weight" style="margin-left:5px;">${weight}</span><button class="remove-item">remove</button>
    </li>`
}

function update_total () {
    console.log("Calculating total...");

    let item_list = document.getElementById("item-list");
    let item_rows = item_list.getElementsByClassName("added-item")
    let total = 0.0;
    for (var i = 0; i < item_rows.length; i++) {
        let weight = item_rows[i].getElementsByClassName("weight")[0];
        let weight_value = Number(weight.innerHTML);
        total += weight_value;
    }
    document.getElementById("total").getElementsByClassName("total-value")[0].innerHTML = total;
}

let add_item_to_list = (name, weight, image_url) => {
    console.log("Adding item...");
    // add item to the list
    let li_template = get_element_li(name, weight);

    let item_list = document.getElementById("item-list");
    let item_element = document.createElement("li");
    item_element.innerHTML = li_template;
    item_list.appendChild(item_element);

    // add image
    let img = item_element.getElementsByClassName('icon')[0];
    img.src = image_url;

    // add event listener to the button inside the element just added with the remove_item function
    let btn = item_element.getElementsByClassName("remove-item")[0];
    btn.addEventListener("click", remove_item());

    // add the value to the total
    update_total();
}

let remove_item = () => {
    return (event) => {
        console.log("Removing item...");
        let node_to_remove = event.target;
        node_to_remove.parentNode.parentNode.remove();
        update_total();
    }
}

// API calls
let thenable_handle_for_the_result_of_the_pokemon_request = (result) => {
    //handle here the pokemon from the request
    add_item_to_list(result.data.species.name,
                    result.data.weight,
                    result.data.sprites.front_default);
}

let catchable_handle_for_the_error_of_the_pokemon_request = (err, name) => {
    //handle here the pokemon error from the request
    alert("Pokemon: '" + name + "' not found");
}

let get_pokemon_data = () => {
    return (event) => {
        let pokemon_name = document.getElementById("item-name").value;
        pokemon_name = pokemon_name.toLowerCase();

        // check for empty values
        if (pokemon_name.length == 0) {
            console.log("Empty item");
            return;
        }

        console.log("Pokeapi call...")
        axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemon_name)
        .then(function (response) {
            console.log("Successful Api call...");
            thenable_handle_for_the_result_of_the_pokemon_request(response);
        })
        .catch(function (error) {
            console.log("Failing Api call...");
            // let input_element = document.getElementsByClassName("input-bar")[0];
            // input_element.style.borderColor = "red";
            catchable_handle_for_the_error_of_the_pokemon_request(error, pokemon_name);
        });
    }
}

document.getElementById("add-item").addEventListener("click", get_pokemon_data());

