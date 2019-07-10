// Grab the document and initiate a function using jQuery
$(function() {
    // Add a <p> element before the ul using .before() 
    // This places the new element before the starting tag of the element originally chosen
    $('ul').before('<p class="notice">Just Updated</p>');
    // Add a '+' to the beginning of every li element with class hot, use .prepend()
    // This places the '+' immediately after the opening tag of an element
    $('li.hot').prepend('+ ');
    // Save a jQuery onject in a veriable, start variable with a '$' to indicate that it is a jQuery object (not required but expected)
    var $newListItem = $('<li><em>gluten-free</em> soy sauce</li>');
    // Grab last of the li elements and use .after() to place new element at the end of the final li's closing tag
    $('li:last').after($newListItem);
});