const farm = [1680, 640] // length, width

function euclidesHCF(high, low){   
    let rem = high % low;

    if (rem === 0){
        return low

    } else return euclidesHCF(low , rem);
}

console.log(euclidesHCF(farm[0],farm[1]));