const monthNameEl = document.getElementById
("month-name");
const dayNameEl = document.getElementById
("day-name");
const dayNumEl = document.getElementById
("day-number");
const yearEl = document.getElementById
("year");

const date = new date();
const month = date.getMonth()
monthNameEl.inn08erText = date.toLocaleString("es",{
    month:"long"
})