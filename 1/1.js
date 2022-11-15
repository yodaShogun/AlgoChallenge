let ip = "127.0.0.1"
ip = ip.replaceAll('.','')
let sum = 0

for(let i=0; i<ip.length; i++){
    sum+= parseInt(ip[i])
}
console.log(sum*1);