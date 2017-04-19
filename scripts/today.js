

// MODEL

var model = {

  events: [],

};



function addNewEvent(event){
  model.events.push({event});
}


// when the textbox content changes, updates the .currentEvent
// property of the model
$('#eventbox').on('input', () => {
  model.currentEvent = $('#eventbox').val();
  console.log(model.currentEvent);
});

// when the form is submitted
$('#add-event-form').submit((evt) => {
  // don't refresh the page
  evt.preventDefault();

  // add a new event from whatever typed
  addNewEvent(model.currentEvent);

});
