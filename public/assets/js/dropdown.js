$('#burgermenu').on('click', ()=> {
  $('#dropdown').toggle('is-active')
})

// $('#select-cuisine').on('click', ()=> {
//   $('#description').addClass('hide')
//   console.log($(this))
//   const option = $(this).text()
//   console.log(option)
// })

$(document).ready(function(){
  $("#select-button").click(function(){
    $("#description").empty();
  });
});

// $('#select-cuisine').on('click', ()=> {
//   $('#description').addClass('hide')
//   $("#choice").val($(this).text());
//   console.log(this)
//   })


// const searchBtn = document.getElementById('#search-button')

// searchBtn.addEventListener('click', () => getCuisineData(inputField.value));

dropdownEl.addEventListener(
  "click",
  (event) => event.key === "Enter" && submitBtn.click()
);