var genres = Array();
var movies = Array();
var ol = document.createElement("OL"); 
var list = document.getElementById('genreList');
list.appendChild(ol);
loadGenres(genres);

function submit(){
    var g = new Genre();
    g.name = document.getElementById("Gname").value;
    var add = true;
    for (i in genres) {
        if (genres[i].name = g.name)
            add = false;
    }
    if (add) {
        enqueue(genres, g);
        dropdown();
        displayGenres(g.name)
    }
    displayMovies()
    console.log(genres);
}

function dropdown(){
    var sel = document.getElementById('genres');
    let str = "";
    for(var i = 0; i < genres.length; i++){
        str += '<option>'+genres[i].name+'</option>';
    }
    sel.innerHTML = str;
}


function displayGenres(name){
    var node = document.createElement("LI");
    var textnode = document.createTextNode(name);
    node.appendChild(textnode);
    ol.appendChild(node);

}

function addMovie(){
    let title = document.getElementById('Mname').value;
    let year = document.getElementById('year').value;
    let genre = document.getElementById('genres').value;

    let movie = new Movie();
    movie.title = title;
    movie.year = year;
    movie.genre = genre;

    movies.push(movie);

    displayMovies();

    return false;
}

function displayTable(){
    let str = '<tr>';
    for(let movie of movies){
        str += '<td>' + movie.title + '</td><td>' + movie.year + '</td><td>' + movie.genre + '</td>';
    }
    str += '</tr>';
    return str;
}

function displayMovies(){
    let str = "<tr>";
    str += "<th> uuid </th><th> title </th>";
    str += "<th> year </th><th> genre </th>";
    str += "<th> related </th>";
    str += "</tr>"
    str += displayTable();
    document.getElementById("movieList").innerHTML = str;

    return false;
}