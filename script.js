const sideNav = document.querySelector("#sidenav-open")
const sideNavClose = document.querySelector("#sidenav-close")
const sideNavButton = document.querySelector("#sidenav-button");

sideNav.addEventListener("transitionend", (function(e) {
    "transform" === e.propertyName && ((e = "#sidenav-open" === document.location.hash) ? sideNavClose.focus() : sideNavButton.focus(),
    e || history.replaceState(history.state, ""))
}
));

sideNav.addEventListener("keyup", (function(e) {
    "Escape" === e.code && (window.history.length ? window.history.back() : document.location.hash = "")
}));
