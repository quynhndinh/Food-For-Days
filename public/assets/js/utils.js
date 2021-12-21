const alertModalEl = document.getElementById("alert-container");
const alertTextEl = document.getElementById("alert-text");

function displayMessage(alertMessage) {
    alertTextEl.textContent = alertMessage;
    alertModalEl.classList.add("is-active");

}

$(".modal-background").on("click", () => {
    $(".modal").removeClass("is-active")
})

displayMessage("This is IT!");