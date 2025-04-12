let height=document.querySelector('.height');
let base=document.querySelector('.base');
let result=document.querySelector('.result');
let check=document.querySelector('.check ');


let sum=0;
for (let i=10; i>0; i--){
    sum=sum+i;
}
console.log(sum);

let addition =0;
function add(a){
if(a<1){
    console.log(addition);
}else{
    console.log(a);
    addition = addition + a;
    a--;
    add(a);
}
}
add(10);

let   vadda= new Promise(function(resolve, reject){
  
    setTimeout(() => {
        resolve("done!");
        }, 2000);
    })
    .then (function(vadda){
    console.log(vadda);
    })




    let promise = new Promise(function(resolve, reject){
        resolve('done!');
       
        })
        .then (function(promise){
        console.log(promise);
        })
       
        let vada = new Promise(function(resolve, reject){
            setTimeout(() => {
                resolve("Data received");
                }, 2000);
            })
            .then (function(vada){
            console.log(vada);
            })

            
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User data loaded");
    }, 1500); 
  });
}