


const library = [  

    { 
 
        author: 'Bill Gates', 
 
        title: 'The Road Ahead', 
 
        readingStatus: true 
 
    }, 
 
    { 
 
        author: 'Steve Jobs', 
 
        title: 'Walter Isaacson', 
 
        readingStatus: true 
 
    }, 
 
    { 
 
        author: 'Suzanne Collins', 
 
        title:  'Mockingjay: The Final Book of The Hunger Games',  
 
        readingStatus: false 
 
    } 
 
 ]; 
 
  
 
//  1. Tìm và trả về object có author là 'Steve Jobs'. 

var yourauthor = 'Steve Jobs';
var myinfor = library.find (function (user){
return user.author == yourauthor ;
})

console.log(myinfor )
 
//  2. Thay đổi readingStatus của object đó thành false. 
 
myinfor.readingStatus = false;
console.log(myinfor)

//  3. Trả về mảng chỉ chứa title các object. 

  var title = library.map(function (user){
    return user.title ;
    })
console.log(title)

//  4. Filter những object mà title chứa chuỗi 'the'. 

var resuilthe = library.filter(function(object){
    return object.title.toLowerCase().includes('the'.toLowerCase())
    // return object.title.indexOf('The') != -1
    // object.title.toLowerCase().includes("The".toLowerCase())
})
console.log(resuilthe)

//  5. Thêm thuộc tính price: 100000 cho mỗi object. 
 
var addPrice = library.filter(function(item){
    
    return item.price = 1000
})
console.log(addPrice)

//  6. Thêm một object mới vào mảng trên. 
 
//      { 
//          author: 'Huyen Chip',  
 
//          title: 'Xach ba lo len va di',  
 
//          readingStatus: false,  
 
//          price: 110000 
 
//      } 

var addObject = 
     { 
         author: 'Huyen Chip',  
 
         title: 'Xach ba lo len va di',  
 
         readingStatus: false,  
 
         price: 110000 
 
     } 
     library.push(addObject)
console.log(library)
     
//  7. Filter những object có readingStatus là false. 
 
var searchFalse = library.filter(function(item){
    return item.readingStatus == false
})
console.log(searchFalse)

//  8. Sắp xếp mảng trên dựa vào thứ tự Alphabet của thuộc tính title. 

var sortArr = library.sort((a, b) => (a.title > b.title) ? 1 : -1)
console.log(sortArr)



// bài tập thêm

//câu 1 

var user = {
    name: 'Hieu',
    age: 18,
    appearence:{
        hairColor: 'black',
        skinColor: 'yellow',
        height: 1700,
        weight: 68
    }
}
function getKeys (object, result = [] ){
   var  keys = result
    for( var key in object ){
  keys.push(key)
 if( typeof object[key] === 'object'){
    getKeys(object[key], keys)
 }
    }
}
// câu 2
//  write function to insert  element at index of array
// viết hàm chèn phần tử vào chỉ mục của mảng


var arr = [21,4,5,-1]
function insertElement(arr, index, element){
     arr.plice(index,0, element)
    return arr
}
 console.log(insertElement(arr,1, 15));