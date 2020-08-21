function BiggerElements(val)  
   {  
     return function(evalue, index, array)  
     {  
     return (evalue >= val);  
     };  
   }  
var result = [11, 45, 4, 31, 64, 10]. filter(BiggerElements(10));  
console.log(result); 
