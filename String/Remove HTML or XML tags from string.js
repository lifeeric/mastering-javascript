function strip_html_tags(str)  
{  
   if ((str===null) || (str===''))  
       return false;  
  else  
   str = str.toString();  
  return str.replace(/<[^>]*>/g, '');  
}  
  
console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>')); 
