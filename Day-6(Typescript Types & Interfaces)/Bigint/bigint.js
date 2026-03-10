// const maxNumber=Number.MAX_SAFE_INTEGER;
//target value change in configure file also in lib[same value]
//for using bigint
var maxNumber = 9007199254740991n;
//@ts_ignore
console.log(maxNumber);
var anotherBigNumber = BigInt("90071992547409925");
console.log(anotherBigNumber);
var sum = maxNumber + anotherBigNumber;
console.log(sum);
