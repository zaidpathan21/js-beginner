// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2003, 4 ,21)
// let myCreatedDate = new Date(2003, 4 ,21, 10, 2)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("05-21-2003")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDate} and the time`

newDate.toLocaleString('default', {
    weekday: "long"
})