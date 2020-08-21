function exp(b,n)  
{  
        var ans = 1;  
        for (var i =1; i <= n; i++)  
        {  
                ans = b * ans;          
        }  
        return ans;  
}  
console.log(exp(2, 3));  
