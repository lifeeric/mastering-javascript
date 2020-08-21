    var library = [   
        {  
            title: 'Bill Gates',  
            author: 'The Road Ahead',  
            readingStatus: true  
        },  
        {  
            title: 'Steve Jobs',  
            author: 'Walter Isaacson',  
            readingStatus: true  
        },  
        {  
            title: 'Mockingjay: The Final Book of The Hunger Games',  
            author: 'Suzanne Collins',  
            readingStatus: false  
        }];  
      
    for (var i = 0; i < library.length; i++)   
       {  
        var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";  
        if (library[i].readingStatus) {  
          console.log("Already read " + book);  
        } else  
        {  
         console.log("You still need to read " + book);  
        }  
       }  
