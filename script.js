let valueDisplays = document.querySelectorAll(".num");
let interval = 200;

valueDisplays.forEach((valueDisplay) => {
    let startValue = -1;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});

document.querySelector("#link-copy").addEventListener("click", function () {
    navigator.clipboard.writeText("toitenlakhoa.github.io");
    document.querySelector('.js-profile-card').classList.add('active');
    setTimeout(function(){
        document.querySelector('.js-profile-card').classList.remove('active');
    }, 750);
});
