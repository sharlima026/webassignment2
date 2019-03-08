class Movie{
    //QUESTION 1
    constructor (){
        this.uuid = ""
        this.title = ""
        this.year = ""
        this.genre = ""
        this.related = []
    }
    
    //QUESTION 2
    addRelatedMovie(m){
        if(m instanceof Movie){ 
            this.related.push(m)
            return true
        }
        return false
    }

    //QUESTION 3
    setGenre(g){
         if(g instanceof Genre){
            if(g.addMovie(this)){
                return True
            }
            return False
        }
        return False
    } 
}
    
class Genre{
    constructor (){
        this.name = ""
        this.movies = []
    }     

    //QUESTION 4
    addMovie(m){
        if(m instanceof Movie)
            this.movie.push(m)
            return true
        return false
    }
}
    
module.export=
(property).export= {
    Movie: typeof Movie,
    Genre: typeof Genre
}