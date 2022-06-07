// 1. Please create an array called bestFriends with your friend names
// 2. Display the middle and last names Atleast 10

// const names = [
//     {
//       firstName: "Amanda",
//       middleName: null,
//       lastName: "Gudlwa",
//     },
//     {
//         firstName: "Xena",
//         middleName: null,
//         lastName: "Skhikhi",
//     },
//     {
//         firstName: "Reagan",
//         middleName: null,
//         lastName: "Carolussen",
//     },
//     {
//         firstName: "Cassidy",
//         middleName: null,
//         lastName: "Manuel",
//     },
//     {
//         firstName: "Marshalino",
//         middleName: "",
//         lastName: "Jankowski",
//     },
//     {
//         firstName: "",
//         middleName: "",
//         lastName: "",
//     },
//     {
//         firstName: "",
//         middleName: "",
//         lastName: "",
//     },
//     {
//         firstName: "",
//         middleName: "",
//         lastName: "",
//     },
//     {
//         firstName: "",
//         middleName: "",
//         lastName: "",
//     },
//     {
//         firstName: "",
//         middleName: "",
//         lastName: "",
//     },
//   ];
//   console.log(names)
  
  
//    const nameContainer = document.getElementById("names");
//   names.forEach((nameContainer) => {
//     nameContainer.innerHTML += `
//       <h3>${name.middleName}</h3>
//       <h3>${name.lastName}</h3>
//     `;
//   });

// const names = ["Amanda", "Xena", "Mikayla", "Meaghan", "Cassidy", "Reagan", "Marshalino", "Mikhail", "Cameron","Monique"];
// console.log(names);

// console.log(names[4]);
// console.log(names[9]);

let bestFriends = ["Amanda", "Xena", "Mikayla", "Meaghan", "Cassidy", "Reagan", "Marshalino", "Mikhail", "Cameron","Monique"];
const last = bestFriends[bestFriends.length -1];
const middle = bestFriends[Math.floor(bestFriends.length/2)];
console.log(last);
console.log(middle);