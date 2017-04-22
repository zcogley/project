

// ----------MODEL---------
var model = {

  events: [],

};

// ----------VIEW----------
function render() {
  // updates the event list based on the model
  $('#events').empty();

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



// creates an event element
function eventElement(item) {
  var eventElement = $('<li></li>')
    .text(item.event);
  var radioElement = $('<input>').attr({
    type: 'radio',
    id: item.event,
    name: item.event,
    value: item.event,
    onclick: item.event
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
