function welcome(firstName, lastName) {
    // Create the fullName variable
    const fullName = firstName + ' ' + lastName;

    // Define the displayFullName function
    function displayFullName() {
        alert('Welcome ' + fullName + '!');
    }

    // Call the displayFullName function
    displayFullName();
}
