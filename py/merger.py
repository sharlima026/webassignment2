
first_names = ["Aaron", "Tom", "Brock", "Gyallis", "Rick"]
last_names = ["Rodgers", "Brady", "Lesnar", "Banton", "Ross"]


def merge2Single (arr1,arr2):
    words = []  
    for i in range (len(arr1)):
        words.append (arr1[i] +" "+arr2[i])
    return words

def merge2Object (arr1,arr2):
    # names = {"firstname": first_names, "lastname":last_names}
    # for i in range (len(arr1)):
    #     names.update ({arr1[i] : arr2[i]})
    d = {}
    names = []
    for i in range (0,len(arr1)):
        d = {'firstname':arr1[i],'lastname':arr2[i]}
        names.append(d)

    
    
    return(names)

     
    


def mergeHandler (func,arr1,arr2):
    return (func(arr1, arr2))


print (mergeHandler(merge2Single, first_names,last_names))
print (mergeHandler(merge2Object,first_names,last_names))

