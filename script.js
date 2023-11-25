const inputLocation = document.getElementById("inputLocation")
const searchBtn = document.getElementById("searchBtn")
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

async function fetchLocationData(location) {
  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=98f0156fdfbb41839fd144423231811&q=" +
      location,
    { mode: "cors" }
  )
  weatherData = await response.json()
}
