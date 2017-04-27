

// ----------MODEL---------
var model = {

  events: [],

};

// ----------VIEW----------
function render() {
  $('#events').empty();

  // render todo items
  model.events.forEach(function(event) {
    // creates each ToDo item element
    var eventElement = $('<li></li>')
      .text(event.event + " ");
    // creates a corresponding checkbox for removing event
    var radioElement = $('<input>').attr({
      type: 'checkbox'
    });
    radioElement.click(function() {
      // function removes event on checkbox click
      var index = model.events.indexOf(event);
      model.events.splice(index, 1);
      render();
    });

    eventElement.append(radioElement);

    $('#events').append(eventElement);
  });

  // clears the eventbox
  $('#eventbox').val('');

  // gives focus to the eventbox
  $('#eventbox').focus();
}

// adds a new event
function addNewEvent(event){
  model.events.push({event});
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
