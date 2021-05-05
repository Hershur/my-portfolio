let modal = document.getElementById("myModal");
let btn = document.getElementById("portfolio");
let span = document.getElementsByClassName("close")[0];

btn.addEventListener("click", ()=> modal.style.display = "block");
span.addEventListener("click", ()=> modal.style.display = "none");
window.addEventListener("click", (event)=> (event.target == modal) && (modal.style.display = "none"));

let projects = document.getElementById("projects");

let projectObjects = [
    {
        name: "Greedy Hunter Game",
        projectURL: "https://hershur.github.io/greedy-hunter/",
        backgroundImageURL: "https://i.postimg.cc/sDZwDJJs/Capture.png",

    }
]; 

projectObjects.map(project => {
    
    let div = document.createElement("div");    
    let div2 = document.createElement("div");    
    let div2Att = document.createAttribute("class");
    div2Att.value = 'project-name';
    div2.setAttributeNode(div2Att); 

    div2.innerHTML = `<a href="${project.projectURL}" target="_blank">${project.name}</a>`

    let node = document.createElement("img");
    let att = document.createAttribute("src");
    att.value = `${project.backgroundImageURL}`;
    node.setAttributeNode(att); 

    node.style.width = "300px";
    node.style.height = "300px";

    div.insertAdjacentElement("beforeend", node);
    div.insertAdjacentElement("beforeend", div2);
    projects.insertAdjacentElement("beforeend", div);

});