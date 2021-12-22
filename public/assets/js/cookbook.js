const allSavedRecipes = document.getElementById("saved-cards")

async function emailRecipe(sourceUrl) {
    const response = await fetch(`/api/recipe/email/`,{
        method: 'POST',
        body: JSON.stringify({ sourceUrl}),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        alert('Successfully emailed recipe');
    } else {
        alert("Failed to email recipe");
     }
}

async function generateSavedCards () {
    const response = await fetch("/api/cookbook", {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
        alert("Please login");
    } else {
        const recipes = await response.json();
        recipes.forEach((recipe) => {
            const recipeDiv = document.createElement('div');
            const buttonContainer = document.createElement('div');
            const infoContainer = document.createElement('div')
            const recipeCuisine = document.createElement('h1');
            const recipeTitleEl = document.createElement('h2');
            const recipeImgEl = document.createElement('img');
            const readyEl = document.createElement('p');
            const calories = document.createElement('p');
            const servingElement = document.createElement('p');

            const btnElement = document.createElement('button');
            btnElement.innerHTML = "Email Recipe";
            btnElement.addEventListener('click', () => emailRecipe(recipe.sourceUrl));

            const btnElement3 = document.createElement('a');
            btnElement3.innerHTML = "Instructions"
            btnElement3.setAttribute('target', '_blank')
            btnElement3.setAttribute('href', recipe.recipe.sourceUrl);
            recipeImgEl.setAttribute('src', recipe.recipe.image)
            recipeCuisine.textContent = recipe.recipe.cuisine;
            recipeTitleEl.textContent = recipe.recipe.title;
            calories.textContent = "Calories: " + recipe.recipe.calories;
            servingElement.textContent = "Servings: " + recipe.recipe.servings ;
            readyEl.textContent = "Time to Make: " + recipe.recipe.readyIn + "min";
            
            infoContainer.classList.add('cardInfo')
            btnElement.classList.add("button2")
            buttonContainer.classList.add("buttonGroup2")
            btnElement3.classList.add('aa')
            recipeDiv.classList.add("single-recipe");
            recipeImgEl.classList.add("imgsize");

            recipeDiv.append(recipeCuisine)
            recipeDiv.append(recipeTitleEl)
            recipeDiv.append(recipeImgEl)
            recipeDiv.append(infoContainer)
            buttonContainer.append(btnElement, btnElement3)
            recipeDiv.append(buttonContainer)
            infoContainer.append(calories, readyEl, servingElement)
            
            allSavedRecipes.append(recipeDiv)
        });
    }
}
generateSavedCards();
