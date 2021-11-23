var myArr = [1, 22, 33, -2, 9, 22];
console.log(myArr);
console.log(myArr[2]);
console.log(myArr[myArr.length - 1]);

var matrix = [
	[1, 2, 12, 3],
	[33, 44, 12, 1],
	[3, 4, 5, 1212],
];

console.log(matrix[1][1]);

// push
myArr.push(2333);
console.log(myArr);

// pop
myArr.pop();
myArr.pop();
myArr.pop();
console.log(myArr);

// add in front
myArr.unshift(123);
console.log(myArr);

// delete from front
myArr.shift();
console.log(myArr);
