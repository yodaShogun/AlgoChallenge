let char = "hidden The secret message endpass";
char = char.split(" ")

char.pop()
char.shift()

console.log(char.join(" "));