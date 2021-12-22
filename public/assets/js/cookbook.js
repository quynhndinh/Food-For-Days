// const getHomepage = async (event) => {
//     console.log("getHomepage**")
//     event.preventDefault();
//     const homepage = await fetch ("/", {
//         method: "GET",
//         headers: { 'Content-Type': 'application/json' },
//     });

// homeHTML = document.getElementById("home-html");
// homeHTML.addEventListener('click', getHomepage)
    
// const getCookbook = async (event) => {
//     console.log("getCookbook**")
//     event.preventDefault();
//     const cookbookPage = await fetch ("/cookbook", {
//         method: "GET",
//     headers: { 'Content-Type': 'application/json' },
//     })
// }
//     cookbookHTML = document.getElementById("cookbook-html");
//     cookbookHTML.addEventListener('click', getCookbook)

// event listener
//homeLink
//cookbookLink = document.elementbyid

const allSavedRecipes = document.getElementById("saved-cards")
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
        recipes.forEach((recipe) => {
            const recipeDiv = document.createElement('div');
            // const infoContainer = document.createElement('div')
            const buttonContainer = document.createElement('div');
            const recipeCuisine = document.createElement('h1');
            const recipeTitleEl = document.createElement('h2');
            const recipeImgEl = document.createElement('img');

            const btnElement = document.createElement('button2');
            btnElement.innerHTML = "Email Recipe";
            const btnElement3 = document.createElement('aa');
            btnElement3.innerHTML = "Instructions"
            btnElement3.setAttribute('target', '_blank')
            btnElement3.setAttribute('href', recipe.recipe.sourceUrl);
            recipeImgEl.setAttribute('src', recipe.recipe.image)
            recipeCuisine.textContent = recipe.recipe.cuisine;
            recipeTitleEl.textContent = recipe.recipe.title;
            
            console.log(recipeTitleEl);


            buttonContainer.classList.add("buttonGroup2")
            btnElement3.classList.add('aa')
            recipeDiv.classList.add("single-recipe");
            recipeImgEl.classList.add("imgsize");

            recipeDiv.append(recipeCuisine)
            recipeDiv.append(recipeTitleEl)
            recipeDiv.append(recipeImgEl)
            buttonContainer.append(btnElement, btnElement3)
            recipeDiv.append(buttonContainer)
            allSavedRecipes.append(recipeDiv)
        });
        // renderCards();
    }
}
generateSavedCards();




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