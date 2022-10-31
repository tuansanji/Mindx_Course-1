/*/
1. Tính tổng các số trong mảng.
2. In ra các số chẵn trong mảng.
3. Tính tổng các số lẻ trong mảng.
4. In ra các số chia hết cho 3.
5. Tính tổng các số nhỏ hơn 20.
6. In ra các số không nhỏ hơn 15.
7. Tìm số bé nhất, lớn nhất trong mảng.*/



const arr = [ 3, 10, 1, 16, 30, 5, 2, 30, 99, 9];
document.write(arr)

//1. Tính tổng các số trong mảng.
// var sum = 0
// var i = 0;
// while (i < arr.length){
//     sum += arr[i];
//     i++
// }
// console.log(sum)
//cách 1
var sum = 0;
for (var i = 0; i < arr.length;i++){
    sum += arr[i];}
    console.log('tổng các số : ' + sum)

//cách 2 

// var sum = arr.reduce(function(accumulator, item){
//     return accumulator + itemcontractionsaccumulator
// })
// console.log('tổng các số : ' + sum)


//2. In ra các số chẵn trong mảng.
 var newArr2 = arr.filter(function(item){
    return item % 2 == 0
 })
 console.log('số chẵn : ' + newArr2);
  

 //3. Tính tổng các số lẻ trong mảng.

var newArr3 = arr.filter(function(item){
    if (item % 2 == 1){
        return item % 2 == 1
    }
})

var sum3 = 0;
for (
    var i3 = 0; i3 < newArr3.length; i3++
){
    sum3 += newArr3[i3]
}

console.log('tổng các số lẻ : '+ sum3);


//4. In ra các số chia hết cho 3.

var newArr4 = arr.filter(function(item3){
    return item3 % 3 == 0
 })
 console.log('số chia hết cho 3 : ' + newArr4)

//5. Tính tổng các số nhỏ hơn 20.
var newArr5 = arr.filter(function(item5){
    return item5 < 20
})

// cách 1
//  var sum5 = 0

// newArr5.forEach(function(item5){
//     sum5 += item5
// })


//cách 2
// var sum5 = newArr5.reduce(function(accumulator, item5){
//     return accumulator + item5;})


//cách 3

var sum5 = newArr5.reduce((sum5,item5) => sum5 + item5, 0)
//cách 4
// var sum5 = 0
// for(
//     var i5 = 0; i5 < newArr5.length; i5++
// ){
//     sum5 += newArr5[i5]
// }
console.log('tổng các số nhỏ hơn 20 : ' + sum5)

//6. In ra các số không nhỏ hơn 15.

var newArr6 = arr.filter(function(item){
    return item >= 15
 })
 console.log( 'số không nhỏ hơn 15: ' + newArr6);


//7. Tìm số bé nhất, lớn nhất trong mảng.*//


// var max = arr.reduce(function(accumulator, item7){
//     return (accumulator > item7 ) ? accumulator : item7
// })

// var min  = arr.reduce(function(accumulator, item7){
//     return (accumulator < item7 ) ? accumulator : item7
// })

// 
var maxInNumbers = Math.max.apply(Math, numbers); 
var minInNumbers = Math.min.apply(Math, numbers);

console.log('số lớn nhất trong mảng : ' + max)
console.log('số nhỏ nhất trong mảng : ' + min)
