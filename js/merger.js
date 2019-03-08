var first_names = ["ashida","tom","shelly","kyle","nicholas"];
var last_names = ["ali","brady","ann","defreitas","mendez"];

function mergeHandler(arr1,arr2,func){
    return (func(arr1,arr2))

}
 

function merge2Single(arr1,arr2){
  let words =[];
    for( i=0; i < arr1.length; i++){
        words.push (arr1[i] +" "+ arr2[i] );
    }
  return words;
}
function merge2Object(arr1,arr2){
  d = {};
  names = [];
   for (i=0; i < arr1.length;i++){
     d = {'firstname':arr1[i],'lastname':arr2[i]}
        names.push(d)
   }
    return names;
      

}
console.log(mergeHandler(first_names,last_names,merge2Single));
console.log(mergeHandler(first_names,last_names,merge2Object));


module.exports.mergeHandler= mergeHandler;
module.exports.merge2Single= merge2Single;
module.exports.merge2Object = merge2Object;
