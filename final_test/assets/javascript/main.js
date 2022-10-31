// Tạo một ứng dụng web, cho phép nhập vào 2 số a và b. Hiển thị tất cả các số nguyên tố trong khoảng a và b.  Nhập trên HTML
var result = document.querySelector('#check')

result.onclick = function () {
    var numberA = document.querySelector('#number_a').value
    var numberB = document.querySelector('#number_b').value
    var ul = document.querySelector('.result_snt')
    var resultArr = []

    if(numberA <  numberB){
        for(let i = numberA; i <= numberB; i++){
            resultArr.push(i)
        }
    }
    if(numberA > numberB){
        for(let i = numberB; i <= numberA; i++){
            resultArr.push(i)
        }
    }
 
    var result = resultArr.filter(function(i){
    var flag = true;
        if(i < 2){
             flag = false
          }
          else{
            for(let n = 2; n < i - 1; n++){
            if( i % n == 0){
                flag = false
                }
            }
        }
if(flag == true){
    return i
}        
    })


for(s = 0; s < result.length; s++){
    document.write( result[s] + ", ");
}
}


// Viết một function có tên numberOneTriangle(). Hàm có tham số truyền vào là một số nguyên trong khoảng (1-10) có tác dụng in ra hình tam giác
// 
var draw = document.querySelector('.triangle button')

draw.onclick = function() {
var triangle = document.querySelector('input#triangle').value
    if( triangle >= 1 && triangle <= 10){
        numberOneTriangle(triangle)
    }
    else{
        alert('bạnh phải nhập trong khoảng 1 đến 10')
    }
}

function numberOneTriangle(T) {
	for(i=1; i<=T; i++) {
		for(j=1; j<=i; j++) {
			document.writeln(" * ")
		}
        //enter
		document.writeln("<br/>")
    }
}





