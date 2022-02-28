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
        const url = 'https://openapi.programming-hero.com/api/phones?search';
        fetch(url)
            .then(response => response.json())
            .then(data => firstData(data))
        error.innerText = "";
    }

};

const firstData = value => {
    const values = value.data;
    const searchResult = document.getElementById("load-data");
    for (const value of values) {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card h-50">
                    <img src="${value.image}" height="250" width="250" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Mobile Name: ${value.phone_name}</h5>
                        <p class="card-text">Mobile Brand: ${value.brand}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    };

};