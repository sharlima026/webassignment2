import locale
import datetime

customer_list = [{
    "name": "Adam",
    "sex": "M",
    "country": "TT",
    "products": [{
        "name": "Peanut",
        "category": "Food",
        "value": 15,
        "date": "20-2006-13"
    }]
}, {
    "name": "Jane",
    "sex": "F",
    "country": "VEN",
    "products": [{
        "name": "Ice-Cream",
        "category": "Dessert",
        "value": 12,
        "date": "2019-05-15"
    }]
}, {
    "name": "Susan",
    "sex": "F",
    "country": "CAN",
    "products": [{
        "name": "Canned Corn",
        "category": "Food",
        "value": 20,
        "date": "2019-06-13"
    }]
}, {
    "name": "Terry",
    "sex": "M",
    "country": "GRN",
    "products": [{
        "name": "Coffee Beans",
        "category": "Food",
        "value": 80,
        "date": "2020-05-16"
    }, {
        "name": "Cake Batter",
        "category": "Dessert",
        "value": 30,
        "date": "2020-06-05"
    }]
}, {
    "name": "Vanessa",
    "sex": "F",
    "country": "BEL",
    "products": [{
        "name": "Bananas",
        "category": "Fruit",
        "value": 50,
        "date": "2020-05-08"
    }]
}   
]


#Question 1

def getMostValuable(array):
    for i in range(0, len(array)):
        # print(array[i]["products"])
        highestIndex = 0
        highestValue = 0

        for product in array[i]["products"]:
            print(product)
            if product["value"] > highestValue:
                highestValue = product["value"]
                highestIndex = i

    return highestIndex


#Question 2

def addCustomer(array, customer):
    for i in range(0,len(array)):
        if locale.strcoll(array[i]["name"], customer["name"]) > 0:
            array.insert(i-1, customer)
    return array


#Question 3

def getBySex(array, sex):
    sex_list = []
    sex_dict = {
        "male": "M",
        "female": "F",
        'f': "F",
        'm': 'M',
        'F': "F",
        'M': 'M'
    }

    keys = sex_dict.keys()

    for customer in array:
        if sex not in keys:
            return "WAH KINDA BULLASS INPUT YOU GIVING ME. THERE ARE ONLY 2 GENDERS. I'M VEGAN!!!"

        elif customer["sex"] == sex_dict[sex]:
            sex_list.append(customer["name"])

    return sex_list


#Question 4

def getCustomerWhoBought(array, category):
    arrayCategory = []
    for i in range(0,len(array)):
        for j in range(0, len(array[i]["products"])):

            if locale.strcoll(array[i]['products'][j]["category"],category) == 0: 
                arrayCategory.append(array[i])
    return arrayCategory

print(getCustomerWhoBought(customer_list, "Food"))


#Question 5

def convertDate(arrayDates):
    newDate = []
    for i in range(0,len(arrayDates)):
        currentDate = arrayDates[i]
      
        try:
            datetime.datetime.strptime(currentDate, '%Y-%m-%d').date()
            newDate.append(currentDate)
        except ValueError:
            newDate.append("UNDEFINED")

    return newDate


#Question 6

def convertProductDates(customer_list):
    arrayStringDates = []
    for customer in customer_list:
        
        products = customer["products"]
        for product in products:
            arrayStringDates.append(product["date"])

    return convertDate(arrayStringDates)
