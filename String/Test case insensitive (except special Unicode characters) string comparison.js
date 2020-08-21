function compare_strings(str1, str2)  
{  
var areEqual = str1.toUpperCase() === str2.toUpperCase();  
  return areEqual;  
}  
  
console.log(compare_strings('abcd', 'AbcD'));  
console.log(compare_strings('ABCD', 'Abce'));
