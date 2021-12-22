let bodyElement = document.body;

// var cuisineSubmitBtn = document.getElementById('search');
// cuisineSubmitBtn.addEventListener("click", handleCuisineSubmit());

// const recipeData = [];

// create Fetch call to backend to get seed data from database
// let recipesData = require('../../../seed/recipeData');
// checki w team if fetch route is valid


// fetch ()
// function displaySearchResults(recipesData){
//     // .then(response => response.json())
//     // .then(recipesData => {
//         console.log(recipesData);
//         // parse return data w for loop
//          // for each recipe in for loop creating element and assigning
//         // create card
    //     for (let i = 0; i < recipesData.length; i++) {

    //         //The document.createElement() method create html elements specified by tagName
    //         let cardElement = document.createElement('div');
            // let imageContainer = document.createElement('div');
            // let infoContainer = document.createElement('div');
            
    //         let imageElement = document.createElement('img');
    //         let titleElement = document.createElement('h5');
    //         let servingElement = document.createElement('p');

    //         let btnElement = document.createElement('a');
    //         let btnElementTwo = document.createElement('a');

    //         //The ClassName property gets and sets the value of the class attribute of the spefified element
    //         cardElement.className = "card";
    //         imageContainer.className = "image-container";
    //         infoContainer.className = "info-container";

    //         imageElement.className = "image";
    //         titleElement.className = "title";
    //         servingElement.className = "serving";

    //         btnElement.className = "btn";
    //         btnElementTwo.className = "btn";

    //         //Works the same way as the className property except it sets the source of the imageElement
    //         imageElement.src = recipesData[i].image;

    //         // This sets the value of an attribute specified element. If exists then will be updated, otherwise the new attribute is added with the specified name and value
            
    

    //         // title, servings, ready in
    //         titleElement.innerText = recipesData[i].title;
    //         servingElement.innerText = recipesData[i].servings;
    //         readyElement.innerText = recipesData[i].ready_in;




    //         // paragraphElement.innerText = "This sets the value of an attribute specified element. If exists then will be updated.";
    //         btnElement.innerText = "Recipe/Instructions";
    //         btnElementTwo.innerText = "Save Meal";

    //         bodyElement.appendChild(cardElement);
    //         cardElement.append(imageContainer, infoContainer);
    //         imageContainer.appendChild(imageElement);
    //         infoContainer.append(titleElement, paragraphElement, btnElement, btnElementTwo);
    // }});




var cuisineDropDown = document.getElementById('cuisine');
    cuisineDropDown.addEventListener('change', getRecipeData); 

// Save recipe to user's profile

async function fetchSaveRecipe(recipeId) {
    console.log("In fetchSave Recipe, recipeID is ", recipeId);

    const response = await fetch(`/api/recipe/`,{
        method: 'POST',
        body: JSON.stringify({ recipeId}),
        headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {
        alert('Successfully saved recipe');
    } else {
        alert("Failed to save recipe");
     }
  
};

// email recipe link to user via POST '/api/recipe/email/'
async function emailRecipe(sourceUrl) {

    console.log("in email Recipe ", sourceUrl);
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

async function getRecipeData() {
    // var chosenCuisine = cuisineDropDown.value;
  
    // var cuisineValue = this.value;
    // console.log(cuisineValue);
    var cuisine = cuisineDropDown.value;
    // console.log(cuisine);
   const allRecipesDiv =  document.getElementById('recipeSection')
   allRecipesDiv.innerHTML = '';
   const response = await fetch(`/api/recipe/${cuisine}`);
   const selectedRecipes = await response.json();
    console.log(selectedRecipes);
    selectedRecipes.forEach((recipe) => {
        // const cardEl = document.createElement('div')
        // const imageContainer = document.createElement('div');
        // const infoContainer = document.createElement('div');
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
        
        // recipeDiv.append(btnElement)
        // document.body.appendChild(btnElement);
        

        // email recipe
        const btnElement2 = document.createElement('button');
        btnElement2.innerHTML = "Email Recipe"
        btnElement2.addEventListener('click', () => emailRecipe(recipe.sourceUrl));

        // recipe instructions
        const btnElement3 = document.createElement('a');
        btnElement3.innerHTML = "Instructions"
        btnElement3.setAttribute('target', '_blank')
        btnElement3.setAttribute('href', recipe.sourceUrl);

        // btnElement3.addEventListener("click", sendRecipe);
        // btnElement = setAttribute('class', btn)
        // btnElement.addEventListener('click', recipe.sourceUrl)
        recipeImgEl.setAttribute('src', recipe.image)
        recipeTitleEl.textContent = recipe.title
        calories.textContent = "Calories: " + recipe.calories;
        servingElement.textContent = "Servings: " + recipe.servings ;
        readyEl.textContent = "Time to Make: " + recipe.readyIn + "min";
        // cardEl.append(imageContainer, infoContainer)
        
        recipeDiv.append(recipeTitleEl)
        recipeDiv.append(recipeImgEl)
        recipeDiv.append(infoContainer)
        // recipeDiv.append(servingElement)
        // recipeDiv.append(readyEl)
        // recipeDiv.append(calories)
        // recipeDiv.append(btnElement)
        // recipeDiv.append(btnElement2)
        // recipeDiv.append(btnElement3)
        
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