import locale
class product:
    def __init__(self, name=None, category=None, value=None, date=None):
        self.name = name
        self.category =  category
        self.value = value
        self.date = date

class customer:
    name = ""
    sex = ""
    country = ""
    products = []

    def __init__(self, name=None, sex=None, country=None, products=None):
        self.name = name
        self.sex = sex
        self.country = country
        self.products = product

customer_list = [{
    "name": "Adam",
    "sex": "M",
    "country": "TT",
    "products": [{
        "name": "Peanut",
        "category": "Food",
        "value": "15",
        "date": "2019-03-12"
    }]
}, {
    "name": "Jane",
    "sex": "F",
    "country": "VEN",
    "products": [{
        "name": "Ice-Cream",
        "category": "Dessert",
        "value": "12",
        "date": "2019-05-15"
    }]
}, {
    "name": "Susan",
    "sex": "F",
    "country": "CAN",
    "products": [{
        "name": "Canned Corn",
        "category": "Food",
        "value": "20",
        "date": "2019-06-13"
    }]
}, {
    "name": "Terry",
    "sex": "M",
    "country": "GRN",
    "products": [{
        "name": "Coffee Beans",
        "category": "Food",
        "value": "80",
        "date": "2020-05-16"
    }, {
        "name": "Cake Batter",
        "category": "Dessert",
        "value": "30",
        "date": "2020-06-05"
    }]
}, {
    "name": "Vanessa",
    "sex": "F",
    "country": "BEL",
    "products": [{
        "name": "Bananas",
        "category": "Fruit",
        "value": "50",
        "date": "2020-05-08"
    }]
}   
]


#Question 1

def getMostValuable(array):
    for i in range(0, len(array)):
        highestIndex = 0
        highestValue = 0
        for j in range(0,len(array[i].products)):
            if array[i].products[j].value > highestValue: 
                highestValue = array[i].products[j].value
                highestIndex = i
    return highestIndex



#Question 2

def addCustomer(array, customer):
    for i in range(0,len(array)):
        if locale.strcoll(array[i].name, customer.name) > 0:
            array.insert(i-1, customer)
    return array

#Question 3

def getBySex(array, sex):
    if locale.strcoll(sex,"male")==0:
        sex = 'm'
    if locale.strcoll(sex,"female")==0:
        sex = 'f'
    arraySex = []
    for i in range(0, len(array)):
        if locale.strcoll(array[i].sex,sex)==0:
            arraySex.append(array[i])
    return arraySex

#Question 4

def getCustomerWhoBought(array, category):
    arrayCategory = []
    for i in range(0,len(array)):
        for j in range(0, array[i].products):
            if locale.strcoll(array[i].products[j].category,category)==0: 
                arrayCategory.append(array[i])
    return arrayCategory

#Question 5

def convertDate(arrayDates):
    dateObjects = []
    for i in range(0,len(arrayDates)):
        currentDate = arrayDates[i]
        dateObjects.append(currentDate)
    return dateObjects

#Question 6

def convertProductDates(array):
    arrayStringDates = []
    for i in range(0,len(array)):
        for j in range(0,array[i].products):
            arrayStringDates.append(array[i].products[j].date)
    result = convertDate(arrayStringDates)
    return result