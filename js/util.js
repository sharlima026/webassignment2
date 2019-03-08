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
        "date": "05-2020-08"
    }]
}   
];


//Question 1

function getMostValuable(array){
    for (let i=0; i<array.length; i++){ 
        highestIndex = 0;
        highestValue = 0;
        for (let j=0; j<array[i].products.length; j++){ 
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
    console.log(array.length);
    var temp = array.length;
    for (var i=0; i<temp; i++){
        if (array[i].name.localeCompare(customer.name) > 0){
            array.splice(i, 0, customer);
        }
    }
    return array;
}
module.exports.addCustomer = addCustomer;

//Question 3

function getBySex(array, sex){
    if (sex.localeCompare("male")===0 || sex.localeCompare("m")===0 || sex.localeCompare("Male")===0){
        sex = 'M';
    }
    if (sex.localeCompare("female")===0 || sex.localeCompare("f")===0 || sex.localeCompare("Female")===0){
        sex = 'F';
    }
    arraySex = [];
    for (let i=0; i<array.length; i++){
        if (array[i].sex.localeCompare(sex)===0){
            arraySex.push(array[i]);
        }
    }
    return arraySex;
}
module.exports.getBySex = getBySex;

//Question 4

function getCustomerWhoBought(array, category){
    arrayCategory = [];
    for (let i=0; i<array.length; i++){ 
        for (let j=0; j<array[i].products.length; j++){ 
            if (array[i].products[j].category.localeCompare(category)===0) {
                arrayCategory.push(array[i]);
            }
        }
    }
    return arrayCategory;
}
module.exports.getCustomerWhoBought = getCustomerWhoBought;

//Question 5
function convertDate(array){
dateObjects=[];
    for(let x=0; x<array.length; x++){
        
        let currentDate = new Date(array[x]);
        currentDate = currentDate.toString("YYYY-mm-dd");
        dateObjects.push(currentDate);
    }
    for (let x=0; x<dateObjects.length; x++){
        if (dateObjects[x].localeCompare("Invalid Date")===0){
            dateObjects[x] = ("UNDEFINED");
        }
    }
    return dateObjects;
}
module.exports.convertDate = convertDate;

//Question 6

function convertProductDates(array){
    dateObjects = [];
    for (let i=0; i<array.length; i++){
        for (let j=0; j<array[i].products.length; j++){
            let currentDate = new Date(list[i].products[j].date);
            currentDate = currentDate.toString("YYYY-mm-dd");
            dateObjects.push(currentDate);
        }
    }
    
    convertDate(dateObjects);
    return dateObjects;
    
}

module.exports.convertProductDates = convertProductDates;