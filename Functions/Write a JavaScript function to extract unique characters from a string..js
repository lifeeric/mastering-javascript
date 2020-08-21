function unique_char(str1)  
{  
 var str=str1;  
 var uniql="";  
 for (var x=0;x < str.length;x++)  
 {  
  
 if(uniql.indexOf(str.charAt(x))==-1)  
  {  
  uniql += str[x];    
    
   }  
  }  
  return uniql;    
}    
console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));  
