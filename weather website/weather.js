const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'cd84d31aeamsh8b78eee60d7effcp1a7a5djsn2f1ec25ff457',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const whats_the_weather = (city) => {
    city_name.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset

            console.log(response)
        })
        .catch(err => console.error(err));

}

whats_the_weather("chittaranjan")

var submit=document.getElementById("submit")

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    var city=document.getElementById("city").value
    whats_the_weather(city)
})


// submit.addEventListener("click", (city) => {
//     e.preventDefault()
//     whats_the_weather(city.target.value)
// })

// whats_the_weather("delhi")