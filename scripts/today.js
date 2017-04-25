

// ----------MODEL---------
var model = {

  events: [],

};

// ----------VIEW----------
function render() {
  $('#events').empty();

  // need to remove undefined elements from list

  var events = model.events.map(eventElement);
  $('#events').append(events);

  // clears the eventbox
  $('#eventbox').val('');

  // gives focus to the eventbox
  $('#eventbox').focus();
}

// adds a new event
function addNewEvent(event){
  model.events.push({event});
}

// // removes an event
// function removeEvent(event){
//   console.log(event);
//   var index = model.events.indexOf({event});
//   console.log(index);
//   model.events.splice(index, 1);
//
// }

// creates an event element
function eventElement(item) {
  var eventElement = $('<li></li>')
    .text(item.event + " ");
  var radioElement = $('<input>').attr({
    type: 'checkbox'
  })

// gives the radio element a function to delete the event
// not best practice, but splicing won't work b/c of where
// the function is defined; no way to get the index of the event
  radioElement.click(function() {
    delete(item.event);
    render();
  })
  eventElement.append(radioElement);
  return eventElement;
}



// ---------DOM EVENT HANDLERS---------
$(document).ready(() => {
  // when the textbox content changes, updates the .currentEvent
  // property of the model
  $('#eventbox').on('input', () => {
    model.currentEvent = $('#eventbox').val();
  });

  // when the form is submitted
  $('#add-event-form').submit((evt) => {
    // don't refresh the page
    evt.preventDefault();

    // add a new event from whatever typed
    addNewEvent(model.currentEvent);

    // renders page
    render();
  });
})
