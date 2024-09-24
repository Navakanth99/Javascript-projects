const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();
console.log(date)

const month =date.getMonth()
monthNameEl.innerHTML =date.toLocaleDateString("en", {
    month:"long"
})


dayNameEl.innerHTML =date.toLocaleDateString("en", {
    weekday:"long"
})

dayNumEl.innerHTML=date.getDate()
yearEl.innerHTML=date.getFullYear()