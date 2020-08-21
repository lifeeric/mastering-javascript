function array_binarySearch(narray, delement) {  
   var mposition = Math.floor(narray.length / 2);  
  
   if (narray[mposition] === delement){  
      return mposition;  
   }  
   else if (narray.length === 1)   
   {  
      return null;  
   }  
   else if (narray[mposition] < delement) {  
      var arr = narray.slice(mposition + 1);  
      var res = array_binarySearch(arr, delement);  
      if (res === null)  
      {  
         return null;  
      }  
      else {  
         return mposition + 1 + res;  
      }  
   }  
   else {  
      var arr1 = narray.slice(0, mposition);  
      return array_binarySearch(arr1, delement);  
   }  
}  
  
 var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];  
 console.log(array_binarySearch(myArray, 6)); 
