
// var a = 10;
// var b = 15;
// var c = '10'


// console.log(a > b);

// console.log(a == c);

// console.log(a === c)

// var x = 5;
// var y = 6;
// console.log(x !== y)
7

// var number = prompt()
// var number = Number(number)
// var number2 = number % 3
// if (number % 3 != 0){
// alert('number không chia hết chon 3 và dư '+ number2  )
// }
// else if(number % 3 == 0){
//     alert(number / 3)}


//máy tính

var calculation = String(prompt('Điền phép tính bạn muốn(vd : +(cộng), -(trừ), *(nhân), **(lũy thừa) .... :'
+'   '))
var a = prompt('Number1 :')
console.log(typeof a)
// if(typeof a != 'number'){
//     confirm('bạn phải nhập giá trị là số')
// }

var b = prompt('Number2 :')
console.log(typeof b)

// if(typeof b != 'number'){
//     confirm('bạn phải nhập giá trị là số')
// }
var result;
if (calculation === '+' 
|| calculation === 'cộng' ){
result = a + b
}
else if(calculation == '-'  || calculation == 'cộng'){
    result = a - b
}
else if(calculation == '*'  || calculation == 'nhân'){
    result = a * b
}
else if(calculation == '/' || calculation == 'chia' && calculation !== '0'){
    result = a / b
}
else if(calculation == '%'  || calculation == 'chia lấy dư'){
    result = a % b
}
else if(calculation == '**'  || calculation == 'lũy thừ'){
    result = a ** b
}
else if(typeof result != isNaN(result) 
){
    confirm('phép tính không hợp lệ')
}
else{
    confirm('phép tính không hợp lệ')
}
confirm('result(kết quả):' + a + calculation + b+ '=' + result)



// xác định số nguyên tố

var number = prompt('xác định số có phải là số nguyên tố');
console.log(typeof number)
// if(typeof number != 'number'){
//   nhap = undefined
//     confirm('số không hợp lệ')
// }
var nhap = true;
if (number < 2){
    nhap = false;
}
else{
    for(var x = 2; x < number - 1 ;x++){
        // console.log(x)
        if(number % x == 0){
            nhap = false;
            break;
        }
    }
}

// if(number == 2){
//     confirm('số nguyên tố')
// }
if (nhap == true ){
    confirm('số nguyên tố')
}
// else if(typeof number != 'number'){
//     confirm('số không hợp lệ')
    
// }
else{ confirm('không phải là số nguyên tố')}
// function snt(n){
//     var number = true;
//     if (n<2){
//         number = false
//     }
//     else if(
//         for(var x = 2 ; x < number -1; x++){
    
//         }
//     )
// }
// if ( number < 2 || number % x == 0){
//     confirm('số nguyên tố')
   
// }
// else{
//     confirm('không phải là số nguyên tố')
// }
// var number = Number(prompt('number'))
// console.log(Number.isInteger(number))