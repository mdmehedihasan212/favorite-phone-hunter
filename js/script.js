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
            .then(data => firstData(data))
        error.innerText = "";
    }
    displayResult.innerHTML = "";

};

const firstData = value => {
    // console.log(result);
    const values = value.data;
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
    <a href="#" class="btn btn-primary">Mobile Details</a>
  </div>
</div>    
        `;
        displayResult.appendChild(div);
    }
};