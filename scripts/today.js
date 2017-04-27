

// ----------MODEL---------
var model = {

  events: [],
  completes: [],

};

// ----------VIEW----------
function render() {
  $('#events').empty();

  // render todo items
  model.events.forEach(function(event) {
    // creates each ToDo item element
    var eventElement = $('<li></li>')
      .text(event.event + ' ');
    // creates a corresponding checkbox for removing event
    var radioElement = $('<input>').attr({
      type: 'checkbox'
    });
      radioElement.click(function() {
        // function removes event on checkbox click

        // gets the index of the event to add to completes
        var index = model.events.indexOf(event);

        // done array temporarily holds event removed
        var done = model.events.splice(index, 1);

        // adds done event to completes array
        model.completes.push(done[0]);

        render();
      });

    eventElement.append(radioElement);

    $('#events').append(eventElement);
  });

  // clears the eventbox
  $('#eventbox').val('');

  // gives focus to the eventbox
  $('#eventbox').focus();

  // renders complete items
  model.completes.forEach(function(complete) {
  console.log(complete.event);
  // creates each complete item element
  var completeElement = $('<li></li>')
    .text(event.event + ' ');
  // creates a corresponding checkbox for re-adding event
  var radElement = $('input').attr({
    type: 'checkbox'
  });
    radElement.click(function(){
        var index = model.completes.indexOf(event);

        var redo = model.completes.splice(index, 1);

        model.events.push(todo);

        $('#completes').empty();

        render();
    });

  completeElement.append(radElement);

  $('#completes').append(completeElement);

});

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
