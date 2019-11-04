const SETTING = {
    name: "LUCKY LOTTO!",
    count: 6,
    maxNumber: 45
}
let colorSet = new Set();
let {name, count, maxNumber} = SETTING;
function getRandomNumber(maxNumber){
        while(true){
            let num = Math.floor(Math.random()*maxNumber);
            if(colorSet.has(num) === false){
                colorSet.add(num);
                break;
            }
        }
}
console.log(name);
for(let i=0; i<count; i++){
    getRandomNumber(maxNumber);
}

console.log(colorSet.values());