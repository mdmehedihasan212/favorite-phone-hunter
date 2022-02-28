document.getElementById("search-phone").addEventListener("click", function () {
    const loadData = 'https://openapi.programming-hero.com/api/phones?search';
    fetch(loadData)
        .then(response => response.json())
        .then(data => firstData(data.data[0]))
});
const firstData = maneyData => {
    console.log(maneyData);
    const inputText = document.getElementById("input-text");

}