//Display the current day at the top of the calendar
const dateTime = luxon.DateTime;
const today = dateTime.now().setZone("system");
$('#currentDay').text(today.toLocaleString(dateTime.DATE_HUGE));


//Present timeblocks for business hours (9am-5pm)

//Color-code each timeblock based on past, present, and future

//Allow a user to enter an event when they click a timeblock

//Save the event in local storage when the save button is clicked in that timeblock

//Persist events between refreshes of a page.








// var shoppingFormEl = $('#shopping-form');
// var shoppingListEl = $('#shopping-list');

// function handleFormSubmit(event) {
//   event.preventDefault();

//   var shoppingItem = $('input[name="shopping-input"]').val();

//   if (!shoppingItem) {
//     console.log('No shopping item filled out in form!');
//     return;
//   }

//   var shoppingListItemEl = $(
//     '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
//   );
//   shoppingListItemEl.text(shoppingItem);

//   // add delete button to remove shopping list item
//   shoppingListItemEl.append(
//     '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
//   );

//   // print to the page
//   shoppingListEl.append(shoppingListItemEl);

//   // clear the form input element
//   $('input[name="shopping-input"]').val('');
// }

// // TODO: Create a function to handle removing a list item when `.delete-item-btn` is clicked
// shoppingListEl.on( "click", ".delete-item-btn", function(event) {
//   event.preventDefault();
//   $(this).parent().remove();

// });

// // TODO: Use event delegation and add an event listener to `shoppingListEl` to listen for a click event on any element with a class of `.delete-item-btn` and execute the function created above
// shoppingFormEl.on('submit', handleFormSubmit);
