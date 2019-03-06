import locale

#QUESTION 1
class Movie(object):
    def __init__(self):
        self.uuid = ("")
        self.title = ("")
        self.year = ("")
        self.genres = None
        self.related = []

class Genre(object):
    def __init__(self):
        self.name = ("")
        self.movies = []

#QUESTION 2
def addRelatedMovie(movie):
    for x in range(0, len(Movie)):
        if locale.strcoll(Movie[x][title], movie) === 0:
            related.append(movie)
            return True
    return False

#QUESTION 3
def setGenre(genre):
    for x in range(0,len(Genre)):
        if locale.strcoll(Genre.name[x], genre) === 0:
            genres = Genre[x].name
    addRelatedMovie(movie)
    return False

#QUESTION 4
def addMovie(movie):
    for x in range(0, len(Movie)):
        if locale.strcoll(Movie.title[x], movie) === 0:
            for y in range (0, length(Genre.movies)):
                if locale.strcoll(Genre.movies[y], movie) > 0:
                    #splice
            return True
    return False