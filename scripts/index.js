function toggleDark() {
    const left = document.querySelector(".left-container");
    const right = document.querySelector(".right-container");
    const call_to_action = document.querySelector(".call-to-action-content-container");
    const title = document.querySelector("h2");
    left.classList.toggle("dark");
    right.classList.toggle("dark");
    title.classList.toggle("whiteTitle");
    call_to_action,classList.toggle("blackTitle")
}