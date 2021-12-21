const getHomepage = async (event) => {
    console.log("getHomepage**")
    event.preventDefault();
    const homepage = await fetch ("/", {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
    });
}

homeHTML = document.getElementById("home-html");
homeHTML.addEventListener('click', getHomepage)

const getCookbook = async (event) => {
    console.log("getCookbook**")
    event.preventDefault();
    const cookbookPage = await fetch ("/cookbook", {
        method: "GET",
    headers: { 'Content-Type': 'application/json' },
    })
}

cookbookHTML = document.getElementById("cookbook-html");
cookbookHTML.addEventListener('click', getCookbook)



// document.getElementById("saved-cards")
// // .onload()= function() {generateSavedCards()};
// async function generateSavedCards () {
//     console.log("generateSavedCards")
//     const response = await fetch("/api/cookbook", {
//         method: "GET",
//         headers: { 'Content-Type': 'application/json' },
//     });
//     if (!response.ok) {
//         alert("Please login");
//     } else {
//         const recipes = await response.json();
//         console.log("Recipes******", recipes);
//         renderCards();
//     }
// }
// generateSavedCards();