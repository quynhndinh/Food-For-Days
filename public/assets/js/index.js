
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

function generateCard() {
    let _wrapperAnchor = $("<a>");
    let _card = $("<div>");
    _card.attr("class", "movie-card");
    let _posterContainer = $("<div>");
    _posterContainer.attr("class", "poster-image");
    let _figure = $("<figure>");
    _figure.attr("class", "");
    let _posterImage = $("<img>");
    _posterContainer.append([_figure, _posterImage]);
    let _cardContentContainer = $("<div>");
    _cardContentContainer.attr("class", "card-content");
    let _movieName = $("<div>");
    _movieName.attr("class", "movie-name");
    let _movieDate = $("<div>");
    _movieDate.attr("class", "movie-date");
    let _movieOverview = $("<div>");
    _movieOverview.attr("class", "movie-overview");
    _cardContentContainer.append([_movieName, _movieDate, _movieOverview]);
    _card.append([_posterContainer, _cardContentContainer]);
    _wrapperAnchor.append(_card);
    let _cardObject = {
        wrapperAnchor: _wrapperAnchor,
        cardEl: _card,
        posterContainerEl: _posterContainer,
        figureEl: _figure,
        posterImageEl: _posterImage,
        movieNameEl: _movieName,
        movieDateEl: _movieDate,
        movieOverviewEl: _movieOverview
    }
    return _cardObject;
}

function handleCuisineSubmit(event) {
   
}

var cuisineDropDown = document.getElementById('cuisine');
    cuisineDropDown.addEventListener('change', getRecipeData); 

async function fetchSaveRecipe() {
    var cuisine = cuisineDropDown.value;
    // console.log(getRecipeData().selectedRecipes)
    // var cuisine = cuisineDropDown.value;
    // const response = await fetch(`/api/recipe/${cuisine}`);
    // const selectedRecipes = await response.json();
    // console.log(selectedRecipes);
    // selectedRecipes.forEach((recipe) => {
    //     console.log(recipe.Id)
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
        btnElement.addEventListener('click', fetchSaveRecipe)
        
        // recipeDiv.append(btnElement)
        // document.body.appendChild(btnElement);
        

        // email recipe
        const btnElement2 = document.createElement('button');
        btnElement2.innerHTML = "Email Recipe"

        // recipe instructions
        const btnElement3 = document.createElement('button');
        btnElement3.innerHTML = "Instructions"
        // btnElement3.addEventListener("click", sendRecipe);
        // btnElement3 = setAttribute('href', recipe.sourceUrl)
        // btnElement.innerText = 'Save Recipe'
        // btnElement.addEventListener('click', recipe.sourceUrl)
        recipeImgEl.setAttribute('src', recipe.image)
        recipeTitleEl.textContent = recipe.title
        calories.textContent = "Calories: " + recipe.calories;
        servingElement.textContent = "Servings: " + recipe.servings ;
        readyEl.textContent = "Time to Cook: " + recipe.readyIn + "min";
        // cardEl.append(imageContainer, infoContainer)
        
        recipeDiv.append(recipeTitleEl)
        recipeDiv.append(recipeImgEl)
        recipeDiv.append(servingElement)
        recipeDiv.append(readyEl)
        recipeDiv.append(calories)
        // recipeDiv.append(btnElement)
        // recipeDiv.append(btnElement2)
        // recipeDiv.append(btnElement3)
        buttonContainer.append(btnElement, btnElement2, btnElement3)
        recipeDiv.appendChild(buttonContainer)

        btnElement.classList.add('cardButton')
        btnElement2.classList.add('cardButton')
        btnElement3.classList.add('cardButton')
        buttonContainer.classList.add("buttonGroup")
        recipeDiv.classList.add("single-recipe");
        recipeImgEl.classList.add("imgsize");
        allRecipesDiv.append(recipeDiv)
    })
    
}



// sendRecipe() {
//     var recipedID = currentciusin.recipe.id
// }




// get search box value





// addRecipeToProfile()
// getRecipeData();

// function addRecipeToProfile();



// displaySearchResults(recipesData) 


// $("#button").click(function(e){
//     e.preventDefault();
//    var name = $('#name').val();
//    var gender = $('input:radio[name=sex]:checked').val();
//    var resident= $('input:checkbox:checked').val();
//    var education = $("#selectbox").val();

//    var content = 
       
//        '<div class="col-2">' + name + '</div>' +
//                  '<div class="col-2">' + gender + '</div>' +
//                  '<div class="col-2">'+ resident + '</div>' +
//                  '<div class="col-2">' + education + '</div>' +
//         '<div class="col-2"><button class="edit-row">Edit</button><button class="delete-row">Delete</button></div>';
      
//     if ($(this).hasClass('save-edit')) {
//         $('.editing').html(content);
//         $("#button").removeClass('save-edit').val('Submit');
//     } else {
//         var rowContent = '<div class="employee-row row">' + content + '</div>';
//         $('#empinfo').append(rowContent);
//     }
// });

// $('body').on('click', '.edit-row', function (e) {
//     $('.editing').removeClass('editing');
//     $(this).closest('.employee-row').addClass('editing');
//     $("#button").addClass('save-edit').val('Save');
// });

// $('body').on('click', '.delete-row', function (e) {
//     $(this).closest('.employee-row').remove();
// });