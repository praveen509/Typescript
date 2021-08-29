var num = 0;
var count = 0;
for (num = 0; num <= 10; num++) {
    if (num % 2 == 0) {
        continue;
    }
    count++;
}
console.log("The count of odd values between 0 and 10 is: " + count);
