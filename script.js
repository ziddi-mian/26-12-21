// program1
// Write a JavaScript function to check whether an `input` is a date object or not.   

// Test Data :
// console.log(is_date("October 13, 2014 11:13:00"));
// console.log(is_date(new Date(86400000)));
// console.log(is_date(new Date(99,5,24,11,33,30,0)));
// console.log(is_date([1, 2, 4, 0]));
// Output :
// false
// true
// true
// false


var is_date = function(input) {
    if ( Object.prototype.toString.call(input) === "[object Date]" ) 
      return true;
    return false;   
      };
  
  console.log(is_date("October 13, 2014 11:13:00"));
  console.log(is_date(new Date(86400000)));
  console.log(is_date(new Date(99,5,24,11,33,30,0)));
  console.log(is_date([1, 2, 4, 0]));


  // program 2

//   Write a JavaScript function to get the current date.   

// Note : Pass a separator as an argument.
// Test Data :
// console.log(curday('/'));
// console.log(curday('-'));
// Output :
// "11/13/2014"
// "11-13-2014"

var curday = function(ap){
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (mm+ap+dd+ap+yyyy);
    };
    console.log(curday('/'));
    console.log(curday('-'));
