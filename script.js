const inputLocation = document.getElementById("inputLocation")
const searchBtn = document.getElementById("searchBtn")
const condition = document.getElementById("condition")
const country = document.getElementById("country")
const city = document.getElementById("city")
const region = document.getElementById("region")
const localTime = document.getElementById("local-time")
const latitude = document.getElementById("latitude")
const longitude = document.getElementById("longitude")
const cloud = document.getElementById("cloud")
const feelsLike = document.getElementById("feelslike")
const gust = document.getElementById("gust")
const humidity = document.getElementById("humidity")
const temp = document.getElementById("temp")
const pressure = document.getElementById("pressure")
const windDegree = document.getElementById("windDegree")
const windDirection = document.getElementById("windDirection")
const windKph = document.getElementById("windKph")
let weatherData

inputLocation.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault()
    searchBtn.click()
  }
})

searchBtn.addEventListener("click", (e) => {
  fetchLocationData(inputLocation.value)
})

function updateWeatherStats(weatherData) {
  condition.innerHTML = "Condition: " + weatherData.current.condition.text
  country.innerHTML = "Country: " + weatherData.location.country
  city.innerHTML = "City: " + weatherData.location.name
  region.innerHTML = "Region: " + weatherData.location.region
  localTime.innerHTML = "Local time: " + weatherData.location.localtime
  latitude.innerHTML = "Latitude: " + weatherData.location.lat
  longitude.innerHTML = "Longitude: " + weatherData.location.lon
  cloud.innerHTML = "Cloud: " + weatherData.current.cloud
  feelsLike.innerHTML = "Feels like: " + weatherData.current.feelslike_c
  gust.innerHTML = "Gust: " + weatherData.current.gust_kph
  humidity.innerHTML = "Humidity: " + weatherData.current.humidity
  temp.innerHTML = "Temp: " + weatherData.current.temp_c
  pressure.innerHTML = "Pressure: " + weatherData.current.pressure_in
  windDegree.innerHTML = "Wind degree: " + weatherData.current.wind_degree
  windDirection.innerHTML = "Wind direction:" + weatherData.current.wind_dir
  windKph.innerHTML = "Wind speed kph: " + weatherData.current.wind_kph
}

async function fetchLocationData(location) {
  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=98f0156fdfbb41839fd144423231811&q=" +
      location,
    { mode: "cors" }
  )
  weatherData = await response.json()
  updateWeatherStats(weatherData)
}
