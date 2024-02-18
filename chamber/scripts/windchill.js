const temp = parseInt(document.querySelector('.temp').innerHTML);
const wind = parseInt(document.querySelector('.wind').innerHTML);

let windchill = 0;

if (temp <= 50 && wind >=3) {
    windchill = 35.74 + 0.6215 * temp - 35.75 * (wind ** .16) + 0.4275 * temp * (wind ** .16);
    let output = windchill.toPrecision(2).toString();
    document.querySelector('.windchill').innerHTML = output;
}else{
    document.querySelector('.windchill').innerHTML = 'N/A';
};
