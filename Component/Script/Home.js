function showTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    const formattedTime = now.toLocaleTimeString('en-US', options);
    timeElement.textContent = formattedTime;
}

showTime();
setInterval(showTime, 1000);