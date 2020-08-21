    function string_endsWith(str, suffix)   
    {  
       
     if (((str===null) || (str==='')) || ((suffix===null) || (suffix==='')))  
       {  
        return false;  
       }  
      else  
      {       
       str = str.toString();  
       suffix = suffix.toString();  
       }  
     return str.indexOf(suffix, str.length -     suffix.length) !== -1;  
    }  
      
    console.log(string_endsWith('JS PHP PYTHON','PYTHON'));  
      
    console.log(string_endsWith('JS PHP PYTHON',''));  
