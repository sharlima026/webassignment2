
let list = [{
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
];

//Question 1

function getMostValuable(array){
    for (let i=0; i<array.length; i++){ //loops through every customer
        highestIndex = 0;
        highestValue = 0;
        for (let j=0; j<array[i].products.length; j++){ //loops through every product for every customer
            if (array[i].products[j].value > highestValue) {
                highestValue = array[i].products[j].value;
                highestIndex = i;
            }
        }
    }
    return highestIndex;
}
module.exports.getMostValuable = getMostValuable;

//Question 2

function addCustomer(array, customer){
    for (let i=0; i<array.length; i++){
        if (array[i].name.localeCompare(customer.name) > 0){
            array.splice(i, customer);
        }
    }
    return array;
}
module.exports.addCustomer= addCustomer;

//Question 3

function getBySex(array, sex){
    if (sex.localeCompare("male")===0){
        sex = 'm';
    }
    if (sex.localeCompare("female")===0){
        sex = 'f';
    }
    arraySex = [];
    for (let i=0; i<array.length; i++){
        if (array[i].sex.localeCompare(sex)===0){
            arraySex.push(array[i]);
        }
    }
    return arraySex;
}
module.exports.getBySex= getBySex;

//Question 4

function getCustomerWhoBought(array, category){
    arrayCategory = [];
    for (let i=0; i<array.length; i++){ //loops through every customer
        for (let j=0; j<array[i].products.length; j++){ //loops through every product for every customer
            if (array[i].products[j].category.localeCompare(category)===0) {
                arrayCategory.push(array[i]);
            }
        }
    }
    return arrayCategory;
}
module.exports.getCustomerWhoBought= getCustomerWhoBought;

//Question 5

function convertDate(arrayDates){
    dateObjects = [];
    for (let i=0; i<arrayDates.length; i++){
        let currentDate = new Date(arrayDates[i]);
        dateObjects.push(currentDate);
    }
    return dateObjects;
}
module.exports.convertDate= convertDate;

//Question 6

function convertProductDates(array){
    arrayStringDates = [];
    for (let i=0; i<array.length; i++){ //loops through every customer
        for (let j=0; j<array[i].products.length; j++){ //loops through every product for every customer
            arrayStringDates.push(array[i].products[j].date);
        }
    }
    result = convertDate(arrayStringDates);
    return result;
}
module.exports.convertProductDates= convertProductDates;