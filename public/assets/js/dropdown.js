$("#burgermenu").on("click", () => {
  $("#dropdown").toggle("is-active");
});

$(document).ready(function () {
  $("#select-button").click(function () {
    $("#description").empty();
  });
});
