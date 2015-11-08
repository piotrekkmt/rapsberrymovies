// button is attaced to pin 17, led to 18
var GPIO = require('onoff').Gpio,
    led = new GPIO(18, 'out'),
    button = new GPIO(17, 'in', 'both'),
    Firebase = require('firebase'),
    colors = require('colors');

var myFirebaseRef = new Firebase('https://raspberrymovies.firebaseio.com/');

myFirebaseRef.child('raspberry').on("value", function(snapshot) {
  console.log(snapshot.val());
});

console.log("Let the Light show begin!");
 
// pass the callback function to the
// as the first argument to watch() and define
// it all in one step
button.watch(function(err, state) {
  // check the state of the button
  // 1 == pressed, 0 == not pressed
  if(state == 1) {
    // turn LED on
    myFirebaseRef.child('bikes/bay1').set(false);
    myFirebaseRef.child('raspberry/flashled').set(false);
//    led.writeSync(1);
  } else {
    // turn LED off
//    myFirebaseRef.child('bikes/bay1').set(true);
//    myFirebaseRef.child('raspberry/flashled').set(false);
//    led.writeSync(0);
  }
});