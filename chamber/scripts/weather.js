const weather = document.querySelector("#weather")

const todayURL = "https://api.openweathermap.org/data/2.5/weather?lat=46.13&lon=-112.96&appid=161028ee799eb858ed2dc91a68344866&units=imperial";
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=46.13&lon=-112.96&appid=161028ee799eb858ed2dc91a68344866&units=imperial"

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            if (url === forecastURL){
                sortData(data.list);
            }else{
                displayResults(data, `${data.main.temp}&deg;F`, "Today");
            }
        } else {
            throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch(todayURL);
apiFetch(forecastURL);

function displayResults(data, tempString, titleString) {
    let day = document.createElement("section");
    let title = document.createElement("h2")
    let icon = document.createElement("img");
    let temp = document.createElement("p");
    let description = document.createElement("p"); 
    temp.innerHTML = tempString;
    let iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    title.textContent = titleString;
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', data.weather[0].main)
    description.textContent = `${capitalize(desc)}`;

    day.appendChild(title);
    day.appendChild(icon);
    day.appendChild(temp);
    day.appendChild(description);

    weather.appendChild(day);
}

function displayForecast(array, titleString) {
    let high = array[0].main.temp_max;
    let low = array[0].main.temp_min;

    array.forEach(item => {
        if (item.main.temp_max >= high){
            high = item.main.temp_max;
        }

        if (item.main.temp_min <= low){
            low = item.main.temp_min;
        }
    });

    let tempString = `High:<br>${high}&deg;F<br><br>Low:<br>${low}&deg;F`
    
    displayResults(array[4], tempString, titleString)
}

function sortData(list) {

    let day1Array = [];
    let day2Array = [];
    let day3Array = [];

    let today = new Date();

    let day1 = createDate(today, 1);
    let day2 = createDate(today, 2);
    let day3 = createDate(today, 3);
    
    list.forEach(item => {
        split = item.dt_txt.split(" ");
        let dt = split[0];

        if (day1 === dt) {
            day1Array.push(item);
        }else if (day2 === dt) {
            day2Array.push(item);
        }else if (day3 === dt) {
            day3Array.push(item);
        }
    });

    displayForecast(day1Array, "Tomorrow");
    displayForecast(day2Array, createTitleString(day2));
    displayForecast(day3Array, createTitleString(day3));
}

function createTitleString (dateN){
    let msec = Date.parse(dateN);
    let dayN = new Date(msec);
    let weekday = dayN.getDay();
    let weekdayString ="";

    if (weekday == 0){
        weekdayString = "Sunday";
    }else if (weekday == 1){
        weekdayString = "Monday";
    }else if (weekday == 2){
        weekdayString = "Tuesday";
    }else if (weekday == 3){
        weekdayString = "Wednesday";
    }else if (weekday == 4){
        weekdayString = "Thursday";
    }else if (weekday == 5){
        weekdayString = "Friday";
    }else if (weekday == 6){
        weekdayString = "Saturday";
    }

    return weekdayString;
}

function createDate (today, integer){
    let year = today.getFullYear();
    let month = today.getMonth();
    let d = today.getDate();

    let newDate = new Date(year, month, d + integer).toISOString();
    split = newDate.split("T");
    newDate = split[0];

    return newDate;
}

function capitalize (string) {
    const words = string.split(" ");

    let newString  = words.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
        }).join(" ");

    return newString;
}