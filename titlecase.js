// *******2.Convert all the strings to title caps in a string array **********

// 3.Sum of all numbers in an array   
// 4.Return all the palindromes in an array

// *-- Basic function --*


//  function titleCase(str) {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     }
//     return str.join(' ');
//   }  
//   console.log(titleCase("It’s not a bug. It’s an undocumented feature!"));
  

  //  *-- Anoniyamous function --*

  // let titleCase = function(str){
  //   str = str.toLowerCase().split(' ');
  //   for (var i = 0; i < str.length; i++) {
  //     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  //   }
  //   return str.join(' ');
  // }  
  // console.log(titleCase("It’s not a bug. It’s an undocumented feature!"));

// *-- IIFE --*
// (function titleCase(str){
//   str = str.toLowerCase().split(' ');
//   for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//   }
//   console.log(str.join(' '))
// } )("It’s not a bug. It’s an undocumented feature!")

//  *-- Arrow Function --*

// let titleCase = (str) => {
//   str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     }
//     return str.join(' ');
//   }  
//   console.log(titleCase("It’s not a bug. It’s an undocumented feature!"));
