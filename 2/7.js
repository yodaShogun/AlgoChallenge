let vowel = ['a','e','i','o','u','y']
let phrase = "Ayibobo Ayiti"

for(let i=0; i<phrase.length; i++){
    if(vowel.includes(phrase[i]))
        phrase = phrase.replace(phrase[i-1],"*")
}
console.log(phrase);