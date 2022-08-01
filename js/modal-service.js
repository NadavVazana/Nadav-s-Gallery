var gProjects
const PROJECT_KEY = 'projectDB'

function createProjects() {
    gProjects = _loadProjectsFromStorage(PROJECT_KEY)
    if (!gProjects || !gProjects.length) {
        gProjects = []
        gProjects.push(
            createProject('Pacman', 'This is Pacman game!', 'https://nadavvazana.github.io/PacMan/', ['Pacman', 'arcade'], "img/portfolio/01-thumbnail.png"),
            createProject('Mine Sweeper', 'This is MineSweeper game!', 'https://nadavvazana.github.io/Sprint1/', ['Mines', 'Old-Games'], "img/portfolio/02-thumbnail.jpg"),
            createProject('Who\'s in the picture?', 'This is Who\'s in the picture? game!', 'https://nadavvazana.github.io/What-s-in-the-picture/', ['guess', 'game'], "img/portfolio/03-thumbnail.png"),
            createProject('Chess', 'This is Chess game!', 'https://nadavvazana.github.io/Chess/', ['board-game', 'chess'], "img/portfolio/04-thumbnail.jpg"),
            createProject('Touch Numbers', 'This is Touch the numbers game!', 'https://nadavvazana.github.io/Touch-Nums/', ['game', 'arcade'], "img/portfolio/05-thumbnail.jpg"),
            createProject('Ball Board', 'This is Ball Board game!', 'https://nadavvazana.github.io/Ball-Board/', ['soccer', 'arcade'], "img/portfolio/06-thumbnail.png"))
        _saveProjectstoStorage()
    }
    console.log(gProjects);


}



function createProject(name, desc, url, labels, img) {
    return {
        id: makeid(),
        name: name,
        title: `This is: ${name}`,
        desc: desc,
        url: url,
        labels: labels,
        img: img
    }
}

function getProjectById(projId) {
    var proj = gProjects.find(proj => proj.id === projId)
    return proj
}

function getProjects() {
    return gProjects
}
function _loadProjectsFromStorage() {
    return loadFromStorage(PROJECT_KEY)
}

function _saveProjectstoStorage() {
    return saveToStorage(PROJECT_KEY, gProjects)
}