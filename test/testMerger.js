// let lib = require('./merger').merger;
// const assert = require('assert');
module = require("./js/merger.js");

var first_names = ["ashida","tom","shelly","kyle","nicholas"];
var last_names = ["ali","brady","ann","defreitas","mendez"];




console.log('merge2Single Test Cases');
function test_merge2single(arr1, arr2, answer){

    let res = module.merge2Single(arr1, arr2);
   if(res.toString() === answer.toString()){
        console.log("true \n your output: ", res);
    
    }
    else console.log("false \n your output  ", res,);
}
test_merge2single(first_names, last_names, ['ashida ali','tom brady','shelly ann','kyle defreitas','nicholas mendez']); 



console.log('merge2Object Test Cases ');
function test_merge2object(arr1, arr2, answer){
    
    let res = module.merge2Object(arr1, arr2);
    if(res.toString() === answer.toString()){
        console.log("true \n your output ", res);
        
    }
    else console.log("false \noutput received: ", res);
}
test_merge2object(first_names, last_names, [{'firstname':'ashida','lastname':'ali'},{'firstname':'tom','lastname':'brady'},
{'firstname':'shelly','lastname':'ann'},{ 'firstname':'kyle','lastname':'defreitas'},{'firstname':'nicholas','lastname':'mendez'}])







