const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const TARGET_DATE = new Date("2024-03-01T23:59:59").getTime();

document.addEventListener("DOMContentLoaded", ready);

function ready() {
  function updateCountDown() {
    const currentDate = new Date().getTime();
    const timeDifference = TARGET_DATE - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    daysElement.textContent = days;

    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    hoursElement.textContent = hours;

    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    minutesElement.textContent = minutes;

    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    secondsElement.textContent = seconds;
  }

  updateCountDown();
  setInterval(updateCountDown, 1000);
}
