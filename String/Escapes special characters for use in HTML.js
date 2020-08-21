    function escape_html(str) {  
        
     if ((str===null) || (str===''))  
           return false;  
     else  
       str = str.toString();  
        
      var map = {  
        '&': '&amp;',  
        '<': '&lt;',  
        '>': '&gt;',  
        '"': '&quot;',  
        "'": '&#039;'  
      };  
      
      return str.replace(/[&<>"']/g, function(m) { return map[m]; });  
    }  
    console.log(escape_html('PHP & MySQL'));  
    console.log(escape_html('3 > 2'));  
