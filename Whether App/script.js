const apiKey = "8fcad3f5dd33e961f52d90bb85d50a6e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const cityname = document.querySelector(".city");
const tempreture = document.querySelector(".temp");
const humidity = document.querySelector(".humidity")
const wind = document.querySelector(".wind")
const searchBox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")
const weatherdisplay = document.querySelector(".weather");


async function CheckWether(city){
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      //error handle invalid city name
      if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            weatherdisplay.style.display = "none";
      }
      else{

      var data = await response.json();
      console.log(data);

      // update city name
      
      cityname.innerHTML = data.name;
      tempreture.innerHTML = Math.round(data.main.temp) + '°c';
      humidity.innerHTML = data.main.humidity + "%";
      wind.innerHTML = data.wind.speed + " km/h";

      // update cloud image
      if(data.weather[0].main == "clouds"){
          weatherIcon.src = "images/clouds.png";
      }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
      }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
      }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
      }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
      }
      // update cloud image
      weatherdisplay.style.display = "block";
      document.querySelector(".error").style.display = "none";
  }

}
const trig = document.querySelector("#input_click");
trig.addEventListener("keydown", function (e){
       if(e.code === "Enter"){
            console.log("succesfully");
            CheckWether(searchBox.value);
            setloader();
            searchBox.value = '';
       }
})

searchbtn.addEventListener('click', ()=>{
      CheckWether(searchBox.value);
      searchBox.value = '';
      setloader();
})

const loader = document.querySelector(".loader");

const setloader = ()=>{
      loader.style.display = "grid";
}








