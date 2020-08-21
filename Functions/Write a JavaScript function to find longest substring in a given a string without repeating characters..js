function longest_substring_without_repeating_characters(input) {  
var chars = input.split('');  
var curr_char;  
var str = "";  
var longest_string = "";  
var hash = {};  
for (var i = 0; i < chars.length; i++) {  
curr_char = chars[i];  
if (!hash[chars[i]])   
{   
str += curr_char;   
hash[chars[i]] = {index:i};  
}  
else   
{  
if(longest_string.length <= str.length)  
{  
longest_string = str;  
}  
var prev_dupeIndex = hash[curr_char].index;  
var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);  
str = str_FromPrevDupe + curr_char;  
hash = {};  
for (var j = prev_dupeIndex + 1; j <= i; j++) {  
hash[input.charAt(j)] = {index:j};  
}  
}  
}  
return longest_string.length > str.length ? longest_string : str;  
}  
console.log(longest_substring_without_repeating_characters("google.com"));   
  
console.log(longest_substring_without_repeating_characters("example.com"));
