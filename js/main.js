//var sum = 0;
//var sub;
//var result = 0;
//var result;
var x;
//var addnum = document.getElementById('add');
var subnum = document.getElementById('sub');
var input = document.getElementsByTagName('input')
var result = document.getElementById('answer')

// document.getElementById('add').addEventListener('click', function addup(){
//     sum += parseFloat(input.value) + parseFloat(beg.value);
//     render();
// })

// document.getElementById('add').addEventListener('click',  function adding(){
//     result += parseFloat(input.value);
//     //input.value = result.value = '';
//     //render();
// })
//console.log(adding)

function myFunction(){
    //var result = +0;
    //var y = input.value
    //var z = result.value;
    x += input.value + result.value;
    document.getElementsByTagName("span").innerHTML = x;
  }
console.log(y) 
console.log(myFunction)






// function init() {
//     og =  0;
    
//     render();
//   }


// function render() {
//     result.textContent = (sum >= 0 ? '+' : '') + sum;
//     result.style.color = sum >= 0 ? 'green' : 'red';
//   }


//   init();


//   var n = 5;
//   n += 3;
//   n -= 7;
//   n = n - 1;