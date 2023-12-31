



function getAPI(searchBar) {
    
    var APIKey = "2a8dbfffb1da2a8fc04b40b4ac7b5ff2";
    
    
    
    
    var APIURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchBar + "&units=imperial&appid="+APIKey;
    
    
    fetch(APIURL)
    .then(response => { // arrow function ES6 syntax
        return response.json()
    }).then(apiWeatherData => {
        console.log(apiWeatherData)
        var date = new Date();
        let htmlcontent = `
        <h5 id="newDate">${apiWeatherData.name} <img src="http://openweathermap.org/img/wn/${apiWeatherData.weather[0].icon}@2x.png" /> 
        <p class="cityDataText">Temp: ${apiWeatherData.main.temp}°F</p>
        <p class="cityDataText">Wind: ${apiWeatherData.wind.speed}</p> 
        <p class="cityDataText">Humidity: ${apiWeatherData.main.humidity}  
        `
        $("#newDate").html(date);
        $("#cityData").html(htmlcontent);
        
    })
    
    
}





function GetForcastFiveDays(searchBar) {
    
    var APIKey = "2a8dbfffb1da2a8fc04b40b4ac7b5ff2";
    
    //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
    
    
    var APIURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchBar + "&units=imperial&appid="+APIKey;
    
    
    fetch(APIURL)
    .then(response => { // arrow function ES6 syntax
        return response.json()
    }).then(apiWeatherData => {   // .then(function(apiWeatherData) { console.log(apiWeatherData)} .then(apiWeatherData => {console.log()})
        console.log(apiWeatherData)
        let htmlcrds = ""
        for(i= 0; i<apiWeatherData.list.length;i= i + 8){ 
            htmlcrds +=`<div>
      
          <h3>${apiWeatherData.city.name} <img src="http://openweathermap.org/img/wn/${apiWeatherData.list[i].weather[0].icon}@2x.png" />
          <p>Temp: ${apiWeatherData.list[i].main.temp}°F</p> 
         <p>Wind: ${apiWeatherData.list[i].wind.speed} MPH 
         <p>Humidity: ${apiWeatherData.list[i].main.humidity} 
         </div> `
        }
        console.log(htmlcrds);
         $("#dayForecast").html(htmlcrds) 
                    
    })
} 


var searchButton = $("searchButton")

$("#searchButton").on("click",function(){
var searchBar = $("#searchBar").val()

console.log(searchBar)
getAPI(searchBar)
GetForcastFiveDays(searchBar)
})











        // let htmlcontent = `
         // <h3>${apiWeatherData.name}<i class="fa-solid fa-sun" style="color: #ff5f1f;"></i></h3>
         // <p>Temp: ${apiWeatherData.main.temp}°F</p>
         // <p>Wind: ${apiWeatherData.wind.speed} MPH <img src="https://openweathermap.org/img/${apiWeatherData.weather[0].icon}@2x.png" /><i class="fa-solid fa-wind"></i></p>
         // <p>Humidity: ${apiWeatherData.main.humidity} <i class="fa-solid fa-cloud"></i> <i class="fa-solid fa-water"></i></p>//
         // `
         // $("#cityData").html(htmlcontent) 
        

        // let htmlcontent = `
         // <h3>${apiWeatherData.name}<i class="fa-solid fa-sun" style="color: #ff5f1f;"></i></h3>
         // <p>Temp: ${apiWeatherData.main.temp}°F</p>
         // <p>Wind: ${apiWeatherData.wind.speed} MPH <img src="https://openweathermap.org/img/${apiWeatherData.weather[0].icon}@2x.png" /><i class="fa-solid fa-wind"></i></p>
         // <p>Humidity: ${apiWeatherData.main.humidity} <i class="fa-solid fa-cloud"></i> <i class="fa-solid fa-water"></i></p>//
         // `
         // $("#cityData").html(htmlcontent) 
        

       // let htmlcontent = `
        // <h3>${apiWeatherData.name}<i class="fa-solid fa-sun" style="color: #ff5f1f;"></i></h3>
        // <p>Temp: ${apiWeatherData.main.temp}°F</p>
        // <p>Wind: ${apiWeatherData.wind.speed} MPH <img src="https://openweathermap.org/img/${apiWeatherData.weather[0].icon}@2x.png" /><i class="fa-solid fa-wind"></i></p>
        // <p>Humidity: ${apiWeatherData.main.humidity} <i class="fa-solid fa-cloud"></i> <i class="fa-solid fa-water"></i></p>//
        // `
        // $("#cityData").html(htmlcontent)









