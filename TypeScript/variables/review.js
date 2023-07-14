"use strict";
let review = [5, 45, 4.5, 1, 3];
let total = 0;
for (let i = 0; i < review.length; i++) {
    console.log(review[i]);
    total += review[i];
}
let avg = total / review.length;
console.log(`Average is : ${avg}`);
