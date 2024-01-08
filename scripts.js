function validateForm(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (username === "" || email === "" || password === "") {
        alert("All fields must be filled out");
        return;
    }

    // Additional validation logic can be added here

    alert("Registration successful!");
    // You can add logic to submit the form to a server here
}
