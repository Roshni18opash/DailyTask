//Array Methods with Example:

//.map() method
let arr=[1,2,3,4,5]
let num=arr.map(val=>val*val)
console.log(num);//[1,4,9,16,25]
//.filter()
let arr1=[1,2,3,4,5,6]
 let even=arr1.filter(num=>num%2===0);
console.log(even);//[2,4,6]
//.reduce()
let arr2 = [10, 20, 30];
let sum = arr2.reduce((total, num) => total + num, 0);
console.log(sum);//60
//.include()
let arr3=[1,2,3,4,5,6]
let include=(arr3.includes(3))
console.log(include); //true
//remove duplicate
let arr4=[1,1,3,6,6,8,9,4,1]
let newarr4=[...new Set(arr4)];
console.log(newarr4);
//sorting
console.log(newarr4.sort((a,b)=>a-b));
//string to array
let string="Roshni"
let arr5=string.split(``)
console.log(arr5);//[ 'R', 'o', 's', 'h', 'n', 'i' ]
//push(add at end)
let arr6=[11,22,33];
arr6.push(44)
console.log(arr6);//[11,22,33,44]
//pop(remove from end)
let arr7=[11,22,33,44]
arr7.pop()
console.log(arr7);//[11,22,33]
//unshift (add at start)
let arr8=[22,33,44]
arr8.unshift(11);
console.log(arr8);//[11,22,33,44]
//shift (Remove from start)
let arr9=[11,22,33]
arr9.shift()
console.log(arr9);[22,33]
//length (size of Array)
console.log(arr9.length);//2
//concat (merge two array)
let a=[1,2,3],b=[4,5,6]
console.log(a.concat(b));//[1,2,3,4,5,6]
//join (array-->string)
let arr10 = ["HTML", "CSS", "JS"];
console.log(arr10.join(" ")); // HTML CSS JS
//toString
let x=[1,2,3]
console.log(x.toString(x)); //1,2,3
//slice
let arr11 = [1, 2, 3, 4];
console.log(arr11.slice(1, 3)); // [2,3]
//splice (add,remove,change)
let abc = [1, 2, 3];
abc.splice(1, 1, 33);
console.log(abc); // [1,33,3]
//reverse (reverse the array)
let pqr=[33,22,11]
console.log(pqr.reverse());//[11,22,33]
//sort (sorting)
let xyz=[33,88,77,55]
xyz.sort((a,b)=>a-b)
console.log(xyz);//[ 33, 55, 77, 88 ]
//indexof(find index)
console.log(xyz.indexOf(77));//2
//include (exit or not)
console.log(xyz.includes(77));//true
//map(transform array)
console.log(xyz.map(x=>x*2));//[ 66, 110, 154, 176 ]
//filter
let ar = [1, 2, 3, 4];
console.log(ar.filter(x => x % 2 === 0)); // [2,4]
//reduce
let arrr = [10, 20, 30];
console.log(arrr.reduce((a, b) => a + b, 0)); // 60
//foreach(loop)
let r = [1, 2, 3];
r.forEach(x => console.log(x));
//1
//2
//3
//find(first match)
let ab = [5, 12, 8];
console.log(ab.find(x => x > 10)); // 12
//findindex(index of match)
let lm = [5, 12, 8];
console.log(lm.findIndex(x => x > 10)); // 1
//some(any true)
let op = [1, 3, 5];
console.log(op.some(x => x % 2 === 0)); // false
//every(all true)
let u = [2, 4, 6];
console.log(u.every(x => x % 2 === 0)); // true
//flat(flatten array)
let y = [[1, 2], [3, 4]];
console.log(y.flat()); // [1,2,3,4]
//fill (fill value)
let q = [1, 2, 3];
q.fill(0);
console.log(q); // [0,0,0]
//isArray (check array)
console.log(Array.isArray([1, 2])); // true
//form(create array)
console.log(Array.from("HELLO")); // ['H','E','L','L','O']
//entries(index+value)
let j = ['a','b'];
for (let [i,v] of j.entries()) {
  console.log(i, v);
}




















