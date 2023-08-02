//*********** Print ODD numbers in an array **************



// *-- Basic function --*

// let Odd = [2,3,5,6,7,33,44,55,77,88]
// let Odd_Result = []
// function OddArray(){

//     for ( let i = 0; i < Odd.length; i++){
//         if(Odd[i]%2 != 0){
//             Odd_Result.push(Odd[i])
//         }
//     }
//     return Odd_Result;
// }
// OddArray(Odd);
// console.log(Odd_Result)


//  *-- Anoniyamous function --*

// let Odd_Anoniyamous = [25,67,89,123,567,890]
// let Odd_Result_Anoniyamous = []

// let Anoniyamous = function(Odd_Anoniyamous){
//     for (let i = 0; i<Odd_Anoniyamous.length; i++){
        
//         if(Odd_Anoniyamous[i] % 2 != 0){
//             Odd_Result_Anoniyamous.push(Odd_Anoniyamous[i])
//         }
//     }
//     return Odd_Result_Anoniyamous;
// }
// console.log(Anoniyamous(Odd_Anoniyamous))

//  *-- IIFE --*

// (function odd(IIFE_Array)
// {
// var Result = []
// for (let i=0; i<IIFE_Array.length;i++){

//     if(IIFE_Array[i] % 2 !=0){

//         Result.push(IIFE_Array[i])

//     }
// }
// console.log(Result)
    
// })([23,56,78,90,45,79,12,34])

//  *-- Arrow Function --*

// let Arrow_Odd = (Odd_Array)  => {

//     let Arrow_result = []

//     for (let i = 0; i<Odd_Array.length; i++){
        
//         if(Odd_Array[i] % 2 != 0){
//             Arrow_result.push(Odd_Array[i])
//         }
//     }
//     return Arrow_result;
// }

// console.log(Arrow_Odd([65,90,34,56,12,34,56,78]))