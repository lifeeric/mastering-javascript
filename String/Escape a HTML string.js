    function escape_HTML(html_str) {  
        'use strict';  
      
        return html_str.replace(/[&<>"]/g, function (tag) {  
            var chars_to_replace = {  
                '&': '&',  
                '<': '<',  
                '>': '>',  
                '"': '"'  
            };  
      
            return chars_to_replace[tag] || tag;  
        });  
    }  
      
    console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));  
    </a>  
