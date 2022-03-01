const searchPhone = () => {
    const inputField = document.getElementById("input-text");
    const error = document.getElementById("error");
    const inputValue = inputField.value;
    inputField.value = "";
    // Error Massage
    if (!isNaN(inputValue)) {
        error.innerText = "Please Type Only Mobile Name";
    }
    else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`;
        fetch(url)
            .then(response => response.json())
            .then(data => firstData(data))
        error.innerText = "";
    }

};

const firstData = value => {
    // console.log(result);
    const values = value.data;
    const searchResult = document.getElementById("load-data");
    for (const value of values) {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="container w-50 shadow-lg p-3 mb-5 bg-body rounded">
        <img src="${value.image}" class="card-img-top" alt="...">
        <h5 class="card-title m-2">Name: ${value.phone_name}</h5>
        <p class="card-text m-2">Brand: ${value.brand}</p>
        <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-primary" type="button">Button</button>
        </div>
        </div>    
        `;
        searchResult.appendChild(div);

    }

};