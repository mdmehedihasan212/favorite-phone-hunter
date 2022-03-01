const displayResult = document.getElementById("display-result");
const searchPhone = () => {
    const inputField = document.getElementById("input-text");
    const error = document.getElementById("error");
    const inputValue = inputField.value;
    inputField.value = "";
    // Error Massage
    if (!isNaN(inputValue)) {
        error.innerText = "Type Phone Brand Name";
        displayResult.innerHTML = "";
    }
    // else if (inputValue) {
    //     error.innerText = "Please Type Again";
    //     displayResult.innerHTML = "";
    // }
    else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`;
        fetch(url)
            .then(response => response.json())
            .then(data => result(data.data))
        error.innerText = "";
    }
    displayResult.innerHTML = "";

};

const result = values => {
    for (const value of values) {
        const div = document.createElement("div");
        div.classList.add("col-lg-4")
        div.classList.add("mb-5")
        div.innerHTML = `
        <div class="card mx-auto mt-5 p-3 shadow p-3 mb-5 bg-body rounded-3" style="width: 15rem;">
        <img src="${value.image}" height="200" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Name: ${value.phone_name}</h5>
        <h5 class="card-text">Brand: ${value.brand}</h5>
        <button onclick="mobileDetails('${value.slug}')" class="btn btn-primary mt-2">Mobile Details</button>
        </div>
        </div>    
        `;
        displayResult.appendChild(div);
    }
};

const mobileDetails = details => {
    const url = `https://openapi.programming-hero.com/api/phone/${details}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data.data))
};

const showDetails = view => {
    const show1 = view.mainFeatures;
    const show2 = view.others;

    document.getElementById("display-details").innerHTML = `
    <div class="card mx-auto shadow p-3 mb-5 bg-body rounded-3" style="width: 15rem;">
        <p class="card-title">Display Size: ${show1.displaySize}</p>
        <p class="card-text">Storage: ${show1.storage}<p>
        <p class="card-title">Memory: ${show1.memory}</p>
        <p class="card-text">Chipset: ${show1.chipset}<p>
        <p class="card-title">Bluetooth: ${show2.Bluetooth}</p>
        <p class="card-text">GPS: ${show2.GPS}<p>
        </div> 
        `;
};

