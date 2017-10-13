$(function() {
    //do on page load
    populateButtons(animals, 'animalButton', '#animalButtons');
});

var animals = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird", "ferret", "turtle", "sugar glider", "chinchilla", "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken", "capybara", "teacup pig", "serval", "salamander", "frog"];

//function to make buttons and add to page
function populateButtons(arrayToUse, classToAdd, areaToAddTo){
    $(areaToAddTo).empty();

    for (var i = 0; i < arrayToUse.length; i++){
        var a = $('<button>')
        a.addClass(classToAdd);
        a.attr('data-type', arrayToUse[i]);
        a.text(arrayToUse[i]);
        $(areaToAddTo).append(a);
    }

}

$(document).on('click', '.animalButton', function(){
    $('#animals').empty();
    $('.animalButton').removeClass('active');
    $(this).addClass('active');

    var type = $(this).data('type');
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({url: queryURL, method: 'GET'})
     .done(function(response) {
         var results = response.data;

         for(var i=0; i < results.length; i++){
             var animalDiv = $('<div class="animal-item">')

             var rating = results[i].rating;

             var p = $('<p>').text( "Rating: " + rating);

             var animated = results[i].images.fixed_height.url;
             var still = results[i].images.fixed_height_still.url;

             var animalImage = $('<img>');
             animalImage.attr('src', still);
             animalImage.attr('data-still', still);
             animalImage.attr('data-animate', animated);
             animalImage.attr('data-state', 'still')
             animalImage.addClass('animalImage');

             animalDiv.append(p)
             animalDiv.append(animalImage)

             $('#animals').append(animalDiv);
         }
        
    }); 
});

$(document).on('click', '.animalImage', function(){
    var state = $(this).attr('data-state'); //.data('state') won't work the way we expect
    
    if ( state == 'still'){
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    }else{
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }
})

$('#addAnimal').on('click', function(){
    var newAnimal = $('input').eq(0).val();

    if (newAnimal.length > 2){
        animals.push(newAnimal);
    }

    populateButtons(animals, 'animalButton', '#animalButtons');

    return false;
});