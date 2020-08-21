function is_Palindrome(str1) {  
var rev = str1.split("").reverse().join("");  
return str1 == rev;  
}  
  
function longest_palindrome(str1){  
  
var max_length = 0,  
maxp = '';  
  
for(var i=0; i < str1.length; i++)   
{  
var subs = str1.substr(i, str1.length);  
  
for(var j=subs.length; j>=0; j--)   
{  
var sub_subs_str = subs.substr(0, j);  
if (sub_subs_str.length <= 1)  
continue;  
  
if (is_Palindrome(sub_subs_str))  
{  
if (sub_subs_str.length > max_length)   
{  
max_length = sub_subs_str.length;  
maxp = sub_subs_str;  
}  
}  
}  
}  
  
return maxp;  
}  
console.log(longest_palindrome("abracadabra"));  
  
console.log(longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"));
