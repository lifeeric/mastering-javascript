    function truncate(str, no_words) {  
        return str.split(" ").splice(0,no_words).join(" ");  
    }  
      
    console.log(truncate('The quick brown fox jumps over the lazy dog', 4));  
