const popup2 = document.getElementById('popup-2');
const showPopupButton = document.getElementsByClassName('show-popup')[0];


let seconds = 120;
let isPopupVisible = false;
const minutesToDisplay = document.getElementsByClassName('minutes')[0];
const secondsToDisplay = document.getElementsByClassName('seconds')[0];

const counterSetInterval = setInterval(func, 1000);

function formatTime(time) {

    const formattedTime = new Date(time * 1000)
    return {
        minutes: formattedTime.getMinutes(),
        seconds: formattedTime.getSeconds()
    }
}


function func() {

    seconds--;

    minutesToDisplay.innerHTML = formatTime(seconds).minutes
    secondsToDisplay.innerHTML = formatTime(seconds).seconds

    if (!seconds) {

        clearInterval(counterSetInterval);
        isPopupVisible = true;
        popup2.classList.add('visible')
    }

    if (isPopupVisible) {

    }

}


showPopupButton.addEventListener('click', function(){
        isPopupVisible = true;
        popup2.classList.add('visible');
        clearInterval(counterSetInterval);
})



