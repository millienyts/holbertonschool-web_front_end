// Define the welcomeMessage function
function welcomeMessage(fullName) {
    // Return a function that displays the welcome message
    return function () {
        alert('Welcome ' + fullName);
    };
}

// Create variables with the closure
const guillaume = welcomeMessage('Guillaume');
const alex = welcomeMessage('Alex');
const fred = welcomeMessage('Fred');

// Testing in the console:
// guillaume(); // Should alert: Welcome Guillaume
// alex();      // Should alert: Welcome Alex
// fred();      // Should alert: Welcome Fred
