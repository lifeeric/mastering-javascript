function find_FirstNotRepeatedChar(str) {  
  var arra1 = str.split('');  
  var result = '';  
  var ctr = 0;  
   
  for (var x = 0; x < arra1.length; x++) {  
    ctr = 0;  
   
    for (var y = 0; y < arra1.length; y++)   
    {  
      if (arra1[x] === arra1[y]) {  
        ctr+= 1;  
      }  
    }  
   
    if (ctr < 2) {  
      result = arra1[x];  
      break;  
    }  
  }  
  return result;  
}  
console.log(find_FirstNotRepeatedChar('abacddbec'));  
