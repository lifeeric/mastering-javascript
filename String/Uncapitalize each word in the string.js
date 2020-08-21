function unCapitalizeWords(str)  
{  
 return str.replace(/\w\S*/g, function(txt){return txt.substr(0).toLowerCase();});  
}  
console.log(unCapitalizeWords('JS STRING EXERCISES'));
