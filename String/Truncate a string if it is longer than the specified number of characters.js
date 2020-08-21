text_truncate = function(str, length, ending) {  
    if (length == null) {  
      length = 100;  
    }  
    if (ending == null) {  
      ending = '...';  
    }  
    if (str.length > length) {  
      return str.substring(0, length - ending.length) + ending;  
    } else {  
      return str;  
    }  
  };  
console.log(text_truncate('We are doing JS string exercises.'))  
console.log(text_truncate('We are doing JS string exercises.',19))  
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
