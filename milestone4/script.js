// refrences to the form and display area
var resumeForm = document.getElementById("resume-Form");
var resumeDisplyElement = document.getElementById("resume-display");
// form submission
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent page reload
    // collect input values
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var city = document.getElementById("city").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value;
    var languages = document.getElementById("languages").value;
    var experience = document.getElementById("experience").value;
    //generate resume dynamically
    var htmlResume = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Name:</b><span contenteditable=\"true\">").concat(age, "</span></p>\n    <p><b>Name:</b><span contenteditable=\"true\">").concat(city, "</span></p>\n    <p><b>Name:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Name:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n    <h3>Education</h3\n    <p contenteditable=\"true\"><b>Name:</b>").concat(education, "</p>\n\n    <h3>Skills</h3\n    <p contenteditable=\"true\"><b>Name:</b>").concat(skills, "</p>\n\n    <h3>Languages</h3\n    <p contenteditable=\"true\"><b>Name:</b>").concat(languages, "</p>\n\n    <h3>Experience</h3\n    <p contenteditable=\"true\"><b>Name:</b>").concat(experience, "</p>\n    ");
    //display generated resume
    if (resumeDisplyElement) {
        resumeDisplyElement.innerHTML = htmlResume;
    }
    else {
        console.error("Display elements are missing!.");
    }
});
