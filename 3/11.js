let minMax = [45,50,10000,1000,500]
let maxValue = minMax[0], minValue = minMax[0]

for(let idx = 0; idx<minMax.length; idx++){
    if(maxValue<minMax[idx])
        maxValue = minMax[idx]
    else if(minValue>minMax[idx])
        minValue = [minMax[idx]]
    else{
        maxValue = maxValue
        minValue = minValue
    }

}

console.log(`MaxValue: ${maxValue} , MinValue:${minValue}`);
