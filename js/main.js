let loadGenres = function(arr){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let data = this.responseText;
            let result = data.split(",");
            //console.log(result);
            for(let i in result){
                arr[i].name = result[i];
            }
        }
    }

    xhttp.open("GET", "genreDB.txt", true);
    xhttp.send();
}

loadMovies = function(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let data = this.responseText;
            let jsonData = JSON.parse(data);
            for(let movie of jsonData){
                //console.log(movie);
            }
        }
    }
    xhttp.open("GET", "moviesDB.json", true);
    xhttp.send();
}