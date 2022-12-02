var counter = document.querySelector(".counter");
var message = document.querySelector(".message");

let count = 1;
setInterval(() => {
  if(count<100){
  count++;
  counter.innerText = count;
  }
  if(count===100)
  {
    document.getElementById('view').innerText = "HEY!";
  }  
}, 100)

setTimeout(() => {
  message.innerText = "Any message you can pass here for your loved one";
}, 10000)
