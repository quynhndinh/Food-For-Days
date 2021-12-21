$("#burgermenu").on("click", () => {
  $("#dropdown").toggle("is-active");
});

$(document).ready(function () {
  $("#select-button").click(function () {
    $("#description").empty();
  });
});

// const submitBtn = document.getElementById("select-button");
// const dropdownEl = document.getElementById("selection-list");

// submitBtn.addEventListener("click", () => getCuisineData(dropdownEl.value));

// function getCuisineData(cuisine) {
//   return fetch("/api/recipe/cuisine", {
//     method: "POST",
//     body: JSON.stringify({ cuisine }),
//     headers: { "Content-Type": "application/json" },
//   })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       var cuisine = JSON.stringify(data);
//       console.log(cuisine);
//       return cuisine; // <---create recipes card here
//     });
// }

// getCuisineData().then((value) => console.log(value));