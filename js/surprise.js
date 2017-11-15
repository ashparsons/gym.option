/*SURPRISE*/

var movies = [
    '<a href="list/jaw.html">Jaws</a>',
    '<a href="list/sw.html">Star Wars</a>',
    '<a href="list/bre.html">Breakfast Club</a>',
    '<a href="list/et.html">ET</a>',
    '<a href="list/pul.html">Pulp Fiction</a>',
    '<a href="list/for.html">Forrest Gump</a>',
    '<a href="list/mem.html">Memento</a>',
    '<a href="list/ava.html">Avatar</a>',
    '<a href="list/ave.html">The Avengers</a>',
    '<a href="list/ww.html">Wonder Woman</a>',
    '<a href="list/70.html">That 70s Show</a>',
    '<a href="list/riv.html">Riverdale</a>',
    '<a href="list/bb.html">Breaking Bad</a>',
    '<a href="list/tiu.html">This Is Us</a>',
    '<a href="list/cou.html">Courage the Cowardly Dog</a>',
    '<a href="list/rnm.html">Rick and Morty</a>',
    '<a href="list/adv.html">Adventure Time</a>',
    '<a href="list/fam.html">Family Guy</a>',
];

function callrandom() { 
    var x = Math.floor(Math.random() * movies.length);

    document.getElementById('random').innerHTML = movies[x];
};

