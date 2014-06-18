$("#clearBtn").click(function() {
    clearFormFields();
});

$("#loginBtn").click(function() {
    var name = $("#name").val().trim();
    var pwd = $("#password").val().trim();
    if (name.length == 0 || pwd.length == 0) {
        clearFormFields();
        alert("Blanks are invalid characters");
        return;
    }

    if (name.toLowerCase() == pwd.toLowerCase()) {
        alert("Welcome " + captailizeFirstLetter(name));
    } else {
        alert("User name and password should be same");
        clearFormFields();
    }
});

function clearFormFields() {
    $("#name").val("");
    $("#password").val("");
}

function captailizeFirstLetter(value) {
    return value.charAt(0).toUpperCase()+value.slice(1);
}
