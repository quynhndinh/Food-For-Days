const alertModalEl = document.getElementById("alert-container");
const alertTextEl = document.getElementById("message");

function displayMessage(alertMessage) {
    alertTextEl.textContent = alertMessage;
    alertModalEl.classList.add("is-active");
}

$(".modal-background").on("click", () => {
    $(".modal").removeClass("is-active")
})