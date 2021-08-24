// const perOne = (friend) => {
//     console.log(`Hey ${friend()}, I'll call back you in few mintues. Talk to later`);
// }

// const perTwo = ()=>{
//     console.log(`Hey, It's ok but it is important call me soon`);
// }

// const friend = ()=>{
//     return "naman"
// }

// perOne(friend);
// perTwo();

const perOne = (friend, callFriend) => {
    console.log(`Hey ${friend}, I'll call back you in few mintues. Talk to later`);
    callFriend();
}

const perTwo = ()=>{
    console.log(`Hey, It's ok but it is important, call me soon`);
}

function ya (){
    console.log("Ya");
}

perOne("Naman", ya);
perTwo();

