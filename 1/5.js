let operand = "5 45 123 12"
operand = operand.split(" ")
let some = 1


for(let x=0; x<operand.length; x++){
    if(Number(operand[x])){
        if(operand[x].length>=2){
            var z = 0
            for(let y of operand[x]){
                    z += parseInt(y)
            }
                some *= z
        }else
            some *= parseInt(operand[x])
    }
}
console.log(some);