const input = document.querySelector("#locality")
const button = document.querySelector("#btn")
const container = document.querySelector(".container")

async function getMeteoData() {
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=70d79bef89b2412db04175551232312&q=${input.value}&days=5&aqi=no&alerts=no`)
      // const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=70d79bef89b2412db04175551232312&q=${input.value}&aqi=no`)
      const data = await response.json()
      console.log(data);
     
      // const dataForecast = await responseForecast.json()
      const dataLocation = data.location
      const dataLocationName = dataLocation.name
      const dataCurrent = data.current
      const dataCondition = dataCurrent.condition
      const currentHour = dataCurrent.last_updated
      const hoursArray=[]
      hoursArray.push(currentHour)
      currentHour.split("")
      console.log(hoursArray);
      container.innerHTML = `
    <h1>${dataLocationName}</h1>
    <img src="${dataCondition.icon} ">
    <table class="table">
    <tr>
      <th scope="col">ore</th>
      <th scope="col">condizioni</th>
      <th scope="col">vento</th>
      <th scope="col">temperatura</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">20.17</th>
      <td>${dataCondition.text}</td>
      <td>${dataCurrent.wind_kph}km/h</td>
      <td>${dataCurrent.temp_c}°</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
  
  
  </tbody>
</table>
<button type="button" class="btn btn-outline-primary" id="btn-reverse">Primary</button>
    `
      const btnReverse = document.querySelector("#btn-reverse")
      btnReverse.addEventListener("click", () => {
        location.reload()
      })
      console.log(dataCondition);
      // console.log(data);
      console.log(input.value);
    } catch (error) {
      console.error(error);
    }
}
button.addEventListener("click", getMeteoData)
// async function getUser() {
//   try {
//     const response = await axios.get('http://api.weatherapi.com/v1/current.json?key=70d79bef89b2412db04175551232312&q=${input.value}&aqi=no');
//     const data = await response.json()
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }