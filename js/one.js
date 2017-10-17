var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello world!';
function multiply(num1,num2) {
    var result = num1 * num2;
    return result;
}
var number1 = parseInt(document.getElementById("num1").value);
var number2 = parseInt(document.getElementById("num2").value);
var resultAll = parseInt(document.getElementById("oneresult").value);
function res1(event) {
    number1 = event.target.value;
    document.getElementById("oneresult").value = multiply(number1,number2);
}
function res2(event) {
    number2 = event.target.value;
    document.getElementById("oneresult").value = multiply(number1,number2);
}

var myImage = document.getElementById('img1');
myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/one.png'){
        myImage.setAttribute('src','images/two.png');
    }else{
        myImage.setAttribute('src','images/one.png');
    }
}

var myButton = document.querySelector('button');
function setUserName(){
    var myName = prompt('请输入你的姓名');
    if(myName == ''|| myName == null){
        myName = prompt('请重新输入用户名');
    }else{
        localStorage.setItem('name',myName);
        myHeading.innerHTML = '欢迎 ,'+ myName;
    }
}
// if(!localStorage.getItem('name')){
//     setUserName();
// }else{
//     var newUserName = localStorage.getItem('name');
//     myHeading.innerHTML = 'good ,' + newUserName;
// }
myButton.onclick = function(){
    setUserName();
}

