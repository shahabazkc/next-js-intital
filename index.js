
let arr = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];
console.log(arr);
function hourglassSum(arr) {
    // Write your code here
    let largestSum;
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            // console.log(arr[row][col],arr[row][col+1],arr[row][col+2]);
            // console.log(arr[row+1][col+1]);
            // console.log(arr[row+2][col],arr[row+2][col+1],arr[row+2][col+2]);
            let sum = arr[row][col] + arr[row][col + 1] + arr[row][col + 2] + arr[row + 1][col + 1] + arr[row + 2][col] + arr[row + 2][col + 1] + arr[row + 2][col + 2];
            // console.log("Sum is: ", sum);

            if (largestSum !== undefined) {
                if (sum >= largestSum) largestSum = sum;
            }
            else {
                largestSum = sum;
            }

        }
        // console.log("end")
    }
    return largestSum;
}
console.log(hourglassSum(arr))