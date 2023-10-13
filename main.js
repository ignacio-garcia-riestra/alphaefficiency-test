const countdown = () => {
    const countDate = new Date ('November 10, 2023 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const gapDay = Math.floor(gap / day);
    const gapHour = Math.floor((gap % day) / hour);
    const gapMinute = Math.floor((gap % hour) / minute);
    const gapSecond = Math.floor((gap % minute) / second);

    document.querySelector('#day').innerText = gapDay;
    document.querySelector('#hour').innerText = gapHour;
    document.querySelector('#minute').innerText = gapMinute;
    document.querySelector('#second').innerText = gapSecond;
};

setInterval(countdown, 1000);