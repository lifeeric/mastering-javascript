var gcd = function(a, b) {  
    if ( ! b) {  
        return a;  
    }  
  
    return gcd(b, a % b);  
};  
console.log(gcd(2154, 458));  
