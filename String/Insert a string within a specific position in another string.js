insert = function insert(main_string, ins_string, pos) {  
   if(typeof(pos) == "undefined") {  
    pos = 0;  
  }  
   if(typeof(ins_string) == "undefined") {  
    ins_string = '';  
  }  
   return main_string.slice(0, pos) + ins_string + main_string.slice(pos);  
    }  
console.log(insert('We are doing some exercises.'));  
console.log(insert('We are doing some exercises.','JavaScript '));  
console.log(insert('We are doing some exercises.','JavaScript ',18));
