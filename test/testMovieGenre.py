
# # darkWorld = Movie()
# # darkWorld.title = "Dark World"
# # print(thor.addRelatedMovie(darkWorld))
# # print(thor.related[0].title)


from movieGenre import *

thor = new Movie()
thor.uuid = '003'
thor.title = 'Thor: Ragnarok night'
thor.year = 2017


logan = new Movie()
logan.uuid = '004'
logan. title = 'Logan'
logan.year = 2017


wonderwoman = new Movie()
wonderwoman.uuid = '003'
wonderwoman.title = 'Wonder Woman'
wonderwoman.year = 2017


hero = new Genre()
hero.name = 'Hero'

action = new Genre()
action.name = 'Action'

fantasy = new Genre()
fantasy.name = 'Fantasy'


print('Add Related Movie')
def test_addRelated(a, b):
    if (a.addRelatedMovie(b) == True):
        print('true')
    else:
        print('false')
test_addRelated(thor, logan)



print('\n setGenre ')
def test_setGenre(m, g):
    if (m.setGenre(g) == True):
        m.genres = g.name
        print('True')
    else:
        print('TEST FAILED')
test_setGenre(thor, action)
test_setGenre(logan, hero)


# addMovie Test Cases
print('\n addMovie ')
def test_addMovie(g, m):
    if (g.addMovie(m) == True):
        print('True')
    else:
        print('False')
test_addMovie(fantasy, wonderwoman)
# test_addMovie(hero, superman); 


# display movies
# print('\n', thor)
# print('\n', avengers)
# print('\n', spiderman)

# display genres
# print('\n', fantasy)
# print('\n', hero)
# print('\n', action)
        