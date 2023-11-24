const inputLocation = document.getElementById("inputLocation")
const searchBtn = document.getElementById("searchBtn")

inputLocation.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault()
    searchBtn.click()
  }
})

searchBtn.addEventListener("click", (e) => {
  fetchLocationData(inputLocation.value)
})

function fetchLocationData(location) {
  fetch(
    "https://api.weatherapi.com/v1/current.json?key=98f0156fdfbb41839fd144423231811&q=" +
      location,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json()
    })
    .then(function (response) {
      console.log(response)
      return response
    })
    .catch(function (reject) {
      console.log("fetch error")
    })
}
