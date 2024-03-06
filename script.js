const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const today = new Date();

// Arrays for days and months in English
const daysEN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthsEN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Array for days and months in Spanish
const daysES = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const monthsES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

// Function to change the language
function changeLanguage(lang) {
  if (lang === 'es') {
    day.textContent = daysES[today.getDay()];
    month.textContent = monthsES[today.getMonth()];
  } else {
    day.textContent = daysEN[today.getDay()];
    month.textContent = monthsEN[today.getMonth()];
  }
}

date.textContent = (today.getDate() < 10 ? '0' : '') + today.getDate();
year.textContent = today.getFullYear();

// Change the language using the browser language
changeLanguage(navigator.language.split('-')[0]);