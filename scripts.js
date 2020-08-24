// Access DOM elements
const reportSection = document.getElementById('weather-report');
const cityForm = document.getElementById('city-form');
const cityInput = document.getElementById('city');

let apiRequest = new XMLHttpRequest();


cityForm.addEventListener('submit', ($event) => {
  $event.preventDefault();
  const chosenCity = cityInput.value;
  apiRequest.open('GET', 'http://localhost:3000/api/cameras');
  apiRequest.send();
});

apiRequest.onreadystatechange = () => {
    if (apiRequest.readyState == 4 && apiRequest.status ==200) {
        let items = JSON.parse(apiRequest.response);
        for(let item of items) {
            reportSection.textContent = `The weather in ${item.name}` ;
        }
    }
};