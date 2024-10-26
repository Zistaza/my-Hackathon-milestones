// refrences to the form and display area
const resumeForm = document.getElementById("resume-Form") as HTMLFormElement;
const resumeDisplyElement = document.getElementById("resume-display") as HTMLDivElement;

// form submission
resumeForm.addEventListener("submit", (event: Event) => {
    event.preventDefault(); //prevent page reload

    // collect input values
    const name = (document.getElementById("name") as HTMLInputElement).value
    const age = (document.getElementById("age") as HTMLInputElement).value
    const city = (document.getElementById("city") as HTMLInputElement).value
    const email = (document.getElementById("email") as HTMLInputElement).value
    const phone = (document.getElementById("phone") as HTMLInputElement).value
    const education= (document.getElementById("education") as HTMLInputElement).value
    const skills = (document.getElementById("skills") as HTMLInputElement).value
    const languages = (document.getElementById("languages") as HTMLInputElement).value
    const experience = (document.getElementById("experience") as HTMLInputElement).value

    //generate resume dynamically
    const htmlResume = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Name:</b><span contenteditable="true">${age}</span></p>
    <p><b>Name:</b><span contenteditable="true">${city}</span></p>
    <p><b>Name:</b><span contenteditable="true">${email}</span></p>
    <p><b>Name:</b><span contenteditable="true">${phone}</span></p>

    <h3>Education</h3
    <p contenteditable="true"><b>Name:</b>${education}</p>

    <h3>Skills</h3
    <p contenteditable="true"><b>Name:</b>${skills}</p>

    <h3>Languages</h3
    <p contenteditable="true"><b>Name:</b>${languages}</p>

    <h3>Experience</h3
    <p contenteditable="true"><b>Name:</b>${experience}</p>
    `;

    //display generated resume
    if(resumeDisplyElement){
        resumeDisplyElement.innerHTML = htmlResume;
    }else{
        console.error("Display elements are missing!.");
    }
})




