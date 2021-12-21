// event listener
//homeLink
//cookbookLink = document.elementbyid

document.getElementById("saved-cards")
// .onload()= function() {generateSavedCards()};
async function generateSavedCards () {
    console.log("generateSavedCards")
    const response = await fetch("/api/cookbook", {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
        alert("Please login");
    } else {
        const recipes = await response.json();
        console.log("Recipes******", recipes);
        // renderCards();
    }
}
generateSavedCards();