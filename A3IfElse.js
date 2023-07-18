let a = 19

// if(a<0) {
//     console.log("INvalid age")
// } else if(a<9) {
//     console.log("KID")
// } else if(a<18 && a>=9) {
//     console.log("Teenager")
// } else {
//     console.log("Adult")
// }

// console.log(new Date().getDay())
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
// console.log(day)


console.log("You can", (a<18 ? "not drive" : "drive"))
