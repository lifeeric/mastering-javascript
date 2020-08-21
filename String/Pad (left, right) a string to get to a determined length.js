    function formatted_string(pad, user_str, pad_pos)  
    {  
      if (typeof user_str === 'undefined')   
        return pad;  
      if (pad_pos == 'l')  
         {  
         return (pad + user_str).slice(-pad.length);  
         }  
      else   
        {  
        return (user_str + pad).substring(0, pad.length);  
        }  
    }  
    console.log(formatted_string('0000',123,'l'));  
    console.log(formatted_string('00000000',123,''));  
