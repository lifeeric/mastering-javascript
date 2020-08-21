function capitalizeWords(str)  
{  
 return str.replace(/\w\S*/g, function(txt){return txt.substr(0).toUpperCase();});  
}  
console.log(capitalizeWords('js string exercises'));
