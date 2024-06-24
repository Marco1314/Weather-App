"use strict";

let API_KEY = "9fd938d637539cb291be71fa0034c744";
let LINK_API = "http://api.openweathermap.org/geo/1.0/direct?q=";
let NEW_API_LINK = "https://api.openweathermap.org/data/2.5/weather";
let search = document.getElementsByClassName("weatherContainer__content--search")[0];
let currentCity = document.getElementsByClassName("weatherContainer__content--city")[0];
let searchButton = document.getElementsByClassName("searchButton")[0];
let currentTemp = document.getElementsByClassName("weatherContainer__content--temp")[0];
let lat;
let lon;

searchButton.addEventListener("click", function() {


let fetchFunc =  async function () {
    let city = search.value;
     let fetch_begin_for_LINK_API =  await fetch(LINK_API+city+"&appid="+API_KEY);
     let result =  await fetch_begin_for_LINK_API.json();
     let waiting = async function() {
          lat = result[0].lat;
          lon = result[0].lon;

         let fetch_begin_for_NEW_API_LINK =  await fetch(NEW_API_LINK+"?lat="+
             lat+"&lon="+lon+
             "&appid="+API_KEY+"&lang=de");
         let data_for_NEW_API_LINK =  await fetch_begin_for_NEW_API_LINK.json();
         currentCity.innerHTML = "Du hast nach " + city + " gesucht!";
         currentTemp.innerHTML = data_for_NEW_API_LINK.weather[0].description;
     }
    waiting();


    }





fetchFunc();
})