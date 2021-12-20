
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
//         for (let i = 0; i < recipesData.length; i++) {

//             //The document.createElement() method create html elements specified by tagName
//             let cardElement = document.createElement('div');
//             let imageContainer = document.createElement('div');
//             let infoContainer = document.createElement('div');
            
//             let imageElement = document.createElement('img');
//             let titleElement = document.createElement('h5');
//             let servingElement = document.createElement('p');

//             let btnElement = document.createElement('a');
//             let btnElementTwo = document.createElement('a');

//             //The ClassName property gets and sets the value of the class attribute of the spefified element
//             cardElement.className = "card";
//             imageContainer.className = "image-container";
//             infoContainer.className = "info-container";

//             imageElement.className = "image";
//             titleElement.className = "title";
//             servingElement.className = "serving";

//             btnElement.className = "btn";
//             btnElementTwo.className = "btn";

//             //Works the same way as the className property except it sets the source of the imageElement
//             imageElement.src = recipesData[i].image;

//             // This sets the value of an attribute specified element. If exists then will be updated, otherwise the new attribute is added with the specified name and value
//             btnElement.setAttribute("href", recipesData[i].source_url);
    

//             // title, servings, ready in
//             titleElement.innerText = recipesData[i].title;
//             servingElement.innerText = recipesData[i].servings;
//             readyElement.innerText = recipesData[i].ready_in;




//             // paragraphElement.innerText = "This sets the value of an attribute specified element. If exists then will be updated.";
//             btnElement.innerText = "Recipe/Instructions";
//             btnElementTwo.innerText = "Save Meal";

//             bodyElement.appendChild(cardElement);
//             cardElement.append(imageContainer, infoContainer);
//             imageContainer.appendChild(imageElement);
//             infoContainer.append(titleElement, paragraphElement, btnElement, btnElementTwo);
//     }});

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

async function getRecipeData() {
    // var chosenCuisine = cuisineDropDown.value;
  
    // var cuisineValue = this.value;
    // console.log(cuisineValue);
    var cuisine = cuisineDropDown.value;
    // console.log(cuisine);
    const response = await fetch(`/api/recipe/${cuisine}`);
    const selectedRecipes = response.json();
    console.log(selectedRecipes);
    
}




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



    // populates database
   
        // const categoryData = [
        //     {
        //         // cuisine: 'italian
        //         cuisine: '',
        //     },
        //     {
        //         cuisine: '',
        //     },
        //     {
        //         cuisine: '',
        //     },
        //     {
        //         cuisine: '',
        //     },
        //     {
        //         cuisine: '',
        //     },
        // ];
        // const seedRecipes = () => Recipes.bulkCreate(recipeData);
        // module.exports = seedRecipes;