let FOLLOWER_VAL = 3
let FOLLOWING_VAL = 23
let REPO_VAL = 9
let STAR_VAL = 14

let link_profile   = "https://khoakhongwibuuu.github.io"
let link_facebook  = "https://facebook.com/khoakhongwibuuu"
let link_twitter   = "https://twitter.com/khoakhongwibuuu"
let link_instagram = "https://instagram.com/khoakhongwibuuu"
let link_github    = "https://github.com/khoakhongwibuuu"
let link_codepen   = "https://codepen.io/khoakhongwibuuu"

let valueDisplays = document.querySelectorAll(".num")
let followers     = document.querySelector("#followers-count")
let followings    = document.querySelector("#following-count")
let repos         = document.querySelector("#repo-count")
let stars         = document.querySelector("#star-count")
let profile_img   = document.querySelector("#profile-card__img")
let profile_card  = document.querySelector(".js-profile-card")
let notification  = document.querySelector("#notification-name")

let facebook_btn = document.querySelector(".facebook")
let twitter_btn = document.querySelector(".twitter")
let instagram_btn = document.querySelector(".instagram")
let github_btn = document.querySelector(".github")
let codepen_btn = document.querySelector(".codepen")

let newTab = "_blank"
let newWindow = "_top"

followers.setAttribute("data-val", FOLLOWER_VAL)
followings.setAttribute("data-val", FOLLOWING_VAL)
repos.setAttribute("data-val", REPO_VAL)
stars.setAttribute("data-val", STAR_VAL)
