// Code your solutions in this file
// for( let age = 30; age < 40; age++ ){
//     console.log(`i'm ${age} years old. Happy birthday to me!`);
   
// }

// let names =["Guadalupe","Ollie", " Aki" ];
// function writeCards(names, event){
  
//     for(let i= 0; i < names.length; i++){

//         console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
//     }
//     console.log(answer)
// }
function writeCards(names, event) {
    let output = [];
    for (let i = 0; i < names.length; i++) {
        output.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return output;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}


