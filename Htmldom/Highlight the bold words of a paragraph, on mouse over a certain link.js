     //First create a list of all bold items   
    var bold_Items;  
    window.onload = getBold_items();  
       
    // Collect all <strong> tags  
    function getBold_items()   
    {  
      bold_Items = document.getElementsByTagName('strong');   
    }  
    // iterate all bold tags and change color    
    function highlight()   
    {  
       for (var i=0; i<bold_Items.length; i++)  
       {                                                      
        bold_Items[i].style.color = "green";  
        }  
    }  
      
    // On mouse out highlighted words become black  
    function return_normal()  
    {  
      for (var i=0; i<bold_Items.length; i++)   
      {  
           bold_Items[i].style.color = "black";  
      }  
    }  
