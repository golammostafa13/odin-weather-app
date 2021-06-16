const weather = (() =>{
    const convertData = (data) =>{
        return {
            name: data.location.name,
            condition: data.current.condition.text,
            feelsLikecel: data.current.feelslike_c,
            humidity: data.current.humidity,
            tempCel: data.current.temp_c,
            tempFer: data.current.temp_f,
            iconURL: data.current.condition.icon,
            windSpeed: data.current.wind_kph,       
        };
    }
    async function getData (city = 'dhaka'){
        const endPoint = `http://api.weatherapi.com/v1/current.json?key=03591424cf324c90b1394409211606&q=${city}&aqi=no`;
        try{
            const response = await fetch(endPoint, {mode: 'cors'});
            if(!response.ok){
                throw new error(`City ${city} is not found`);
            }
            const data = convertData(await response.json());
            // const data = await response.json();
            return data;
        }catch(error){
            alert(error);
            return null;
        }
    }
    return {getData};
})();

export default weather;