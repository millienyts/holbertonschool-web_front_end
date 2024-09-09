// Create the global variable
const globalVariable = 'Welcome';

// Define the outer function
function outer() {
    // Alert the global variable
    alert(globalVariable);

    // Create a variable within outer
    const course = 'Holberton';

    // Define the inner function
    function inner() {
        // Define the exclamation variable
        const exclamation = '!';

        // Define the inception function within inner
        function inception() {
            // Alert the global variable, course, and exclamation
            alert(globalVariable + ' ' + course + exclamation);
        }

        // Call the inception function
        inception();

        // Alert the global variable and course
        alert(globalVariable + ' ' + course);
    }

    // Call the inner function
    inner();
}

// Call the outer function
outer();
