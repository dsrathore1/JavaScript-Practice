var para = document.getElementsByClassName("para")[0].innerHTML;
console.log(para);

var title = document.querySelector('.heading');
console.log(title);

var counter = document.querySelector(".num");
var follower = document.querySelector("#follower");

let count = 0;

setInterval(() => {
    if (count < 1000) {
        count++;
        counter.innerText = count;
    }
}, 1);

setTimeout(() => {
    if(count < 1000){
        follower.innerText = "Your Followers are " + count;  
    }
}, 5000);