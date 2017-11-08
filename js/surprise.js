/*SURPRISE*/

var movies = ['Jaws', 'Star Wars', 'The Breakfast Club', 'E.T', 'Pulp Fiction', 'Forrest Gump', 'Memento', 'Avatar', 'The Avengers', 'Wonder Woman', 'That 70s Show', 'Riverdale', 'Breaking Bad', 'This is Us', 'Courage the Cowardly Dog', 'Rick and Morty', 'Adventure Time', 'Family Guy'];

function callrandom() { 
    var rand = movies[Math.floor(Math.random() * movies.length)];
    
    document.getElementById("random").textContent = rand;
};