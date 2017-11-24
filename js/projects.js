let container = document.getElementById('projects-carousel');

function loadJSON(callback) {
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', './projects.json', true);
    xobj.onreadystatechange =  () => {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function init() {
    loadJSON(function (response) {
        let data = JSON.parse(response);

        for(key in data.projects){
            let project = document.createElement('div');
            project.className += 'project';
            let title = document.createElement('h4');
            let titleText = document.createTextNode(data.projects[key].title);
            let descrip = document.createElement('p')
            let descripText = document.createTextNode(data.projects[key].description);
            let linkCont = document.createElement('div');
            linkCont.className += 'project-links';
            let github = document.createElement('a');
            github.href += data.projects[key].github;
            github.innerHTML = '<i class="fa fa-github fa-lg"></i>';
            let link = document.createElement('a');
            link.href += data.projects[key].link;
            link.innerHTML = '<i class="fa fa-link fa-lg"></i>';
            title.appendChild(titleText);
            descrip.appendChild(descripText);
            linkCont.appendChild(github)
            linkCont.appendChild(link)

            project.appendChild(title);
            project.appendChild(descrip)
            project.appendChild(linkCont)
            container.appendChild(project)
        }


    });
}

init()