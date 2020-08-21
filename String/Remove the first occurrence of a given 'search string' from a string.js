function remove_first_occurrence(str, searchstr)       {  
    var index = str.indexOf(searchstr);  
    if (index === -1) {  
        return str;  
    }  
    return str.slice(0, index) + str.slice(index + searchstr.length);  
}  
  
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
