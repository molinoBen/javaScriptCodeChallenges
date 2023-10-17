// const revrStr = (str) => {
//   const arr = str.split('');
//   arr.reverse();
//   const revString = arr.join('');
//   return revString;
// };

// console.log(revrStr('Hello'));

/// reverse string without built in methods.

// const revStr = (str) => {
//   let final = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     final += str[i];
//   }
//   return final;
// };

// console.log(revStr('Hello'));

const revString = (str) => {
  const arr = str.split('');
  const revStr = arr.reverse();
  const final = revStr.join('');
  return final;
};

console.log(revString('Benny'));
