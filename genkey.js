const dictionary = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function zeroFillString(str, size){
    return str.padStart(size, '0');
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
function genkeyId(workerMachineId){
    let str = "";
    let currentMillis = Date.now();
    let wmid0f = zeroFillString(workerMachineId, 2);
    let rand = getRandomInt(1000);
    let rand0f = zeroFillString(rand.toString(), 3);
    let num = parseInt(currentMillis + rand0f + wmid0f);
    let base = dictionary.length;

    while (num !== 0) {
        let res = Math. floor(num / base);
        let m = num % base;
        let char = dictionary.charAt(m);
        str = char + str;

        num = res;
    } 

    return str;
}

exports.genkeyId = genkeyId;