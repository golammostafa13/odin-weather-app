const showData = (() =>{
    function setSearchData(weatherData) {
        // console.log(weatherData);
        const cityName = document.querySelector('#name');
        cityName.innerText = weatherData.name;

        const img = document.querySelector('#img');
        img.src = weatherData.iconURL;

        const condition = document.querySelector('#condition');
        condition.innerText = weatherData.condition;

        const humidity = document.querySelector('#humidity');
        humidity.innerHTML = `Humidity <span id='color'>${weatherData.humidity}</span>`;

        const feelsLike = document.querySelector('#feelsLike')
        feelsLike.innerHTML = `Feels Like <span id='color'>${weatherData.feelsLikecel}</span>° C`;

        const temp = document.querySelector('#temp');
        temp.innerHTML = `Temperature <span id='color'>${weatherData.tempCel}</span>° C`;

        const wind = document.querySelector('#wind');
        wind.innerHTML = `Wind Speed <span id='color'>${weatherData.windSpeed}</span> kph`;
    }

    return {setSearchData};
})();
export default showData;