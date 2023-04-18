// 1. Declare a function fullName and it prints out your full name.
//     const fullName = function() {
//   }
//      console.log("Tomas Joew");
// 2. Declare an arrow function fullName and now it takes firstName, lastName as a parameter and returns your full name.

//   const myfullname = (firstName, lastName) => {
//     return `${firstName} ${lastName}`;
//   };
//   console.log("myfullname");

//3. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function that calculates perimeterOfRectangle.
// function calculatePerimeter(length, width) {
//     const perimeter = 2 * (length + width);
//     return perimeter;
//   }
//   const length = 5;
//   const width = 10;
//   const perimeter = calculatePerimeter(length, width);
//   console.log(perimeter); 

//4. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function that calculates BMI. BMI is used to broadly define different weight groups in adults 20 years old or older. Check if a person is underweight, normal, overweight, or obese based on the information given below.
// function calculateBMi(weight,height){
//     const bmi = weight/ (height * height);
//     return bmi;
// }
// const weight= 79;
// const height = 1.7
// const bmi = calculateBMi(weight,height);
// console.log(bmi);
// if( bmi < 18.5){
//     console.log("underweight");

// } else if (bmi >= 18.5 && bmi <= 24.9) {
//     console.log("Normal");
// } else if (bmi >= 25.0 && bmi <= 29.9) {
//     console.log("Overweight");
// } else {
//     console.log("Obese");
// }
  

//5. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum without using Math.max method.
// function findMax(a, b, c) {
//     let max = a;
//     if (b > max) {
//       max = b;
//     }
//     if (c > max) {
//       max = c;
//     }
//     return max;
//   }
//   const max = findMax(5, 10, 2);
// console.log(max); 

//6. Declare a function name. It takes an array as a parameter and it returns the reverse of the array (don't use method).
// const array =[2,3,6,7,4];
// function reverseArray(array){
//     for (let i = array.length; i >= 0; i--) {

//         console.log(array[i]);
//     }
// }
// reverseArray(array)


//7. Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// function pow(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//       result *= x;
//     }
//     return result;
//   }
//   const result = pow(3, 4);
//   console.log(result); 
