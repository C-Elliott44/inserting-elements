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

//   ********** Attribute practice, not sure if this will mess with the above code *************
//   ********** just comment out the code that is above or below this line if it does **********

$(function() {
    // Get the li with id three and remove the class 'hot' using .removeClass
    // This will remove 'hot' with out affecting any other classes that might be associated with the element
    $('li#three').removeClass('hot');
    // Grab all li element with the class of 'hot' and add the class of 'favorite'
    // This does not over write the currnet classes on the li element, simples adds an new class to the existing ones
    $('li.hot').addClass('favorite');
    // Grab the ul and add the class attribute to it along with the class of 'group' using .attr()
    // This is not used to update or add, instead .attr() is used to create attributes
    // you can either add also receive what the current attribute is by specifing what you are looking for and ommiting the second parameter
    $('ul').attr('id', 'group');
});