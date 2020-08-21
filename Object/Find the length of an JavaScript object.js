//Write a JavaScript program to get the length of an JavaScript object.  
  
Object.objsize = function(Myobj) {  
    var osize = 0, key;  
    for (key in Myobj) {  
        if (Myobj.hasOwnProperty(key)) osize++;  
    }  
    return osize;  
};  
  
var student = {   
name : "David Rayy",   
sclass : "VI",   
rollno : 12 };  
  
var objsize = Object.objsize(student);  
alert('Size of the current object : '+objsize); 
