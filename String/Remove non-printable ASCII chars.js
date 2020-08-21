function remove_non_ascii(str) {  
    
  if ((str===null) || (str===''))  
       return false;  
 else  
   str = str.toString();  
    
  return str.replace(/[^\x20-\x7E]/g, '');  
}  
  
console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));
