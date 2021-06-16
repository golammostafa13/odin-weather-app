const { default: showData } = require("./modules/showData");
const { default: weather } = require("./modules/weather");

const input = document.querySelector('input');
const searchBtn = document.querySelector('#search-btn');
const searchForm = document.querySelector('#search-form');

searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
});
searchBtn.addEventListener('click', async function      getWeather (){
    if(!input.value)return;
    const weatherData = await weather.getData(input.value);
    showData.setSearchData(weatherData);
    input.value = "";
})
