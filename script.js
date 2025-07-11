async function getWeather(city = "Delhi") {
  const apiKey = "d789beb13bd5452da35161630251107"; 
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.error) {
      alert("City not found!");
      return;
    }

    const today = new Date();
    const dayName = today.toLocaleDateString("en-GB", { weekday: "long" });

    document.getElementById("location").innerText = data.location.name;
    document.getElementById("day").innerText = dayName;
    document.getElementById("temp").innerText = Math.round(data.current.temp_c) + "°C";
  } catch (error) {
    alert("Something went wrong!");
    console.error(error);
  }
}

getWeather(); 
