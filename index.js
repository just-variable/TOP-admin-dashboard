let projects = [
    {title: "Amazing Project", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc"},
    {title: "Wow Amazing.", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textn unknown "},
    {title: "Ufff wow", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, a "},
    {title: "Blah Blah Blah", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has b the 1500s, when an unknown printer took a "},
    {title: "Ay Bee Cee Dee", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy tenknown printer took a "},
    {title: "Ee Af Gee Aytsh", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy tenknown printer took a "},
    {title: "Ay Jay Kay Ell", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy tenknown printer took a "},

]

let projectsContainer = document.querySelector("#projects-content");
console.log(projectsContainer)

projects.forEach(e=>{
    let newProject = document.createElement("div");
    newProject.classList.add("project")
    newProject.innerHTML = 
    `
        <div class="project-text">
            <h6>${e.title}</h6>
            <p>${e.text}</p>
        </div>
        
        <div class="project-controls">
            <img src="./res/star.svg">
            <img src="./res/eye.svg">
            <img src="./res/fork.svg">
        </div>
`
projectsContainer.appendChild(newProject);
console.log("jsdad")
})