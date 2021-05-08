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
        tools: ["React","TypeScript","Redux"]

    },
    {
        name: "Video Chat App",
        projectURL: "",
        backgroundImageURL: "https://i.postimg.cc/PqkXVW5P/opening-soon-coming-soon-design-template-2ad6ecb3bfc0d528a9999c00a642d447-screen.jpg",

    }
]; 

projectObjects.map(project => {

    let toolSpans = project.tools?.map(tool => `<span>${tool}</span>`) || "";
    
    let div = document.createElement("div");    
    let div2 = document.createElement("div");    
    let div3 = document.createElement("div");    
    let div2Att = document.createAttribute("class");
    let div3Att = document.createAttribute("class");
    div2Att.value = 'project-name';
    div3Att.value = 'project-tools';
    div2.setAttributeNode(div2Att); 
    div3.setAttributeNode(div3Att); 

    div2.innerHTML =  `<a ${project.projectURL ? `href="${project.projectURL}"` : ""} target="_blank">${project.name}</a>`;
    div3.innerHTML = toolSpans ? `<div>${toolSpans?.join(" ")}</div>` : "" ;

    let node = document.createElement("img");
    let att = document.createAttribute("src");
    att.value = `${project.backgroundImageURL}`;
    node.setAttributeNode(att); 

    node.style.width = "300px";
    node.style.height = "300px";

    div.insertAdjacentElement("beforeend", node);
    div.insertAdjacentElement("beforeend", div2);
    div.insertAdjacentElement("beforeend", div3);
    projects.insertAdjacentElement("beforeend", div);

});