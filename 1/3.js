let title = "Ayiti se yon BEL PEYI" 
title = title.toLowerCase().split(" ")

for(let el = 0; el<title.length; el++){
    title[el] = title[el].charAt(0).toUpperCase()+title[el].slice(1)
}

console.log(title.join(" "));