let normalString = "Ayibobo Ayiti", reverseString=''

for(let i=normalString.length-1; i>=0; i--){
    reverseString +=normalString[i]
}

console.log(reverseString.replaceAll(" ",""));