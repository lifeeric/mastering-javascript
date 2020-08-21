function makeid(l)  
{  
var text = "";  
var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";  
for(var i=0; i < l; i++ )  
{    
text += char_list.charAt(Math.floor(Math.random() * char_list.length));  
}  
return text;  
}  
console.log(makeid(8));  
