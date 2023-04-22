const FOLLOWER_VAL = 3;
const FOLLOWING_VAL = 19;
const REPO_VAL = 10;
const STAR_VAL = 12;

let followers = document.querySelector("#followers-count");
let followings = document.querySelector("#following-count");
let repos = document.querySelector("#repo-count");
let stars = document.querySelector("#star-count");

followers.setAttribute("data-val", FOLLOWER_VAL)
followings.setAttribute("data-val", FOLLOWING_VAL)
repos.setAttribute("data-val", REPO_VAL)
stars.setAttribute("data-val", STAR_VAL)
