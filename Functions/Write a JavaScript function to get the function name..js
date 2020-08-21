function abc() {  
    console.log( arguments.callee.name );  
}  
  
abc(); 
