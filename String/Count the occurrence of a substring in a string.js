function count(main_str, sub_str)   
    {  
    main_str += '';  
    sub_str += '';  
  
    if (sub_str.length <= 0)   
    {  
        return main_str.length + 1;  
    }  
  
       subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');  
       return (main_str.match(new RegExp(subStr, 'gi')) || []).length;  
    }  
   
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));  
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
