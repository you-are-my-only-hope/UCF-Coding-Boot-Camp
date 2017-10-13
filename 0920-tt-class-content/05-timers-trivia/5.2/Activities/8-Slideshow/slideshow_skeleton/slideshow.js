/**
 * Slideshow Activity
 * Students: follow the instructions below:
 **/

// TODO: Put links to your images in this image array.
var images = [];

// Count will keep track of the index of the currently displaying picture.
var count = 0;

// TODO: Use jQuery to run "startSlideshow" when you click the "start" button.

// TODO: Use jQuery to run "stopSlideshow" when you click the "stop" button.


// This function will replace display whatever image it's given 
// in the 'src' attribute of the img tag.
function displayImage (){
  $('#image-holder').html('<img src='+images[count]+ ' width="400px">');
}

function nextImage (){
  // TODO: Increment the count by 1.


  // TODO: Show the loading gif in the "image-holder" div.


  // TODO: Use a setTimeout to run displayImage after 1 second.


  // TODO: If the count is the same as the length of the image array, reset the count to 0.

}
function startSlideshow (){
  // TODO: Use a setInterval to run nextImage

}
function stopSlideshow () {
  // TODO: Put your clearInterval here:

}

// This will run the display image function as soon as the page loads.
displayImage();
