let valueDisplays = document.querySelectorAll(".num");
let interval = 3;

let followers = document.querySelector("#followers-count");
let followings = document.querySelector("#following-count");
let repos = document.querySelector("#repo-count");
let stars = document.querySelector("#star-count");

followers.setAttribute("data-val", FOLLOWER_VAL)
followings.setAttribute("data-val", FOLLOWING_VAL)
repos.setAttribute("data-val", REPO_VAL)
stars.setAttribute("data-val", STAR_VAL)

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
    navigator.clipboard.writeText(PROFILE_LINK);
    document.querySelector('.js-profile-card').classList.add('active');
    setTimeout(function () {
        document.querySelector('.js-profile-card').classList.remove('active');
    }, 1000);
});

document.querySelector("#close-message").addEventListener("click", function () {
    document.querySelector('.js-profile-card').classList.remove('active');
});
