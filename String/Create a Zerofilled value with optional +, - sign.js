function zeroFill(number, width, osign) {  
    var num = '' + Math.abs(number),  
        zerosw = width - num.length,  
        sign = number >= 0;  
    return (sign ? (osign ? '+' : '') : '-') +  
        Math.pow(10, Math.max(0, zerosw)).toString().substr(1) + num;  
}  
  
console.log(zeroFill(120, 5, '-'));  
  
console.log(zeroFill(29, 4)); 
