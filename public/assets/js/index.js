let bodyElement = document.body;
let cookbookButton = $("#cookbookButton");


window.onload = function() {
	//  check if login/logout/signup should be displayed
	if (sessionStorage.getItem("loggedIn") === "true") {
		document.querySelector('#login').classList.add('is-hidden');
		document.getElementById('signup').classList.add('is-hidden');
		document.getElementById('logout').classList.remove('is-hidden');
	}
    else {
        document.getElementById('login').classList.remove("is-hidden");
        document.getElementById('signup').classList.remove('is-hidden');
        document.getElementById('logout').classList.add('is-hidden');
    }
};

var cuisineDropDown = document.getElementById('cuisine');
    cuisineDropDown.addEventListener('change', getRecipeData); 

// Save recipe to user's profile
async function fetchSaveRecipe(recipeId) {
    const response = await fetch(`/api/recipe/`,{
        method: 'POST',
        body: JSON.stringify({ recipeId}),
        headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {
        displayMessage('Successfully saved recipe');
    } else {
        displayMessage("Please sign up or sign in to save recipe");
     }
};

// email recipe link to user via POST '/api/recipe/email/'
async function emailRecipe(sourceUrl) {
    const response = await fetch(`/api/recipe/email/`,{
        method: 'POST',
        body: JSON.stringify({ sourceUrl}),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        displayMessage('Successfully emailed recipe');
    } else {
        displayMessage("Please sign in or sign up to email recipe!");
     }
  
}

async function getRecipeData() {

  var cuisine = cuisineDropDown.value;
   const allRecipesDiv =  document.getElementById('recipeSection')
   allRecipesDiv.innerHTML = '';
   const response = await fetch(`/api/recipe/${cuisine}`);
   const selectedRecipes = await response.json();
    selectedRecipes.forEach((recipe) => {
        const recipeDiv = document.createElement('div');
        const infoContainer = document.createElement('div')
        const buttonContainer = document.createElement('div');
        
        const recipeTitleEl = document.createElement('h2');
        const readyEl = document.createElement('p');
        const calories = document.createElement('p');
        const servingElement = document.createElement('p');
        const recipeImgEl = document.createElement('img');

        // save recipe
        // when button is clicked --> send meal ID in a POST to backend
        const btnElement = document.createElement('button');
        btnElement.innerHTML = "Save Recipe"
        btnElement.addEventListener('click', () => fetchSaveRecipe(recipe.id));
        
        // email recipe
        const btnElement2 = document.createElement('button');
        btnElement2.innerHTML = "Email Recipe"
        btnElement2.addEventListener('click', () => emailRecipe(recipe.sourceUrl));

        // recipe instructions
        const btnElement3 = document.createElement('a');
        btnElement3.innerHTML = "Instructions"

        btnElement3.setAttribute('target', '_blank')
        btnElement3.setAttribute('href', recipe.sourceUrl);
        recipeImgEl.setAttribute('src', recipe.image)

        recipeTitleEl.textContent = recipe.title;
        calories.textContent = "Calories: " + recipe.calories;
        servingElement.textContent = "Servings: " + recipe.servings ;
        readyEl.textContent = "Time to Make: " + recipe.readyIn + "min";
        
        recipeDiv.append(recipeTitleEl)
        recipeDiv.append(recipeImgEl)
        recipeDiv.append(infoContainer)
        buttonContainer.append(btnElement, btnElement2, btnElement3)
        recipeDiv.appendChild(buttonContainer)
        infoContainer.append(calories, readyEl, servingElement)
        
        servingElement.classList.add('info')
        calories.classList.add('info')
        readyEl.classList.add('info')

        infoContainer.classList.add('cardInfo')
        btnElement.classList.add('cardButton')
        btnElement2.classList.add('cardButton')
        btnElement3.classList.add('aa')
        buttonContainer.classList.add("buttonGroup")
        recipeDiv.classList.add("single-recipe");
        recipeImgEl.classList.add("imgsize");
        allRecipesDiv.append(recipeDiv)
    })
}


cookbookButton.on("click", function() {
	if (sessionStorage.getItem("loggedIn") === "true") {
		window.location = "/cookbook"
	} else {
		displayMessage("You have to be logged in to access the cookbook.")
	}
})