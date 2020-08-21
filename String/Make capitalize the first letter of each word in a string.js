//capitalize_Words   
function capitalize_Words(str)  
{  
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});  
}  
console.log(capitalize_Words('js string exercises')); 
