humanize_format = function humanize(num) {  
   if(typeof(num) == "undefined") return;  
  if(num % 100 >= 11 && num % 100 <= 13)  
        return num + "th";  
          
        switch(num % 10) {  
            case 1: return num + "st";  
            case 2: return num + "nd";  
            case 3: return num + "rd";  
        }  
        return num + "th";  
    }  
console.log(humanize_format());    
console.log(humanize_format(1));    
console.log(humanize_format(8));    
console.log(humanize_format(301));    
console.log(humanize_format(402));   
