function addStudent(id, refreshCallback)  
{  
    refreshCallback();    
}  
  
function refreshStudentList() {  
    console.log('Hello');  
}  
  
addStudent(1, refreshStudentList);  
