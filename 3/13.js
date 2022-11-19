let segment = [0,1,2,3,4]
let t = []

for(let x=0; x<segment.length; x++){
    let n = 0
    switch(x){
        case 0:
            t = segment.reverse()
            console.log(t);
            break;
        case 1:
            n = parseInt(t.splice(-1))
            t.reverse()
            t.push(n)
            console.log(t);
            break;
        case 2:
            n = t.splice(-2)
            t.reverse()
            t.push(n[0])
            t.push(n[1])
            console.log(t);
            break;
        case 3:
            n = t.splice(-3)
            t.reverse()
            t.push(n[0])
            t.push(n[1])
            t.push(n[2])
            console.log(t);
            console.log("Index of 3:"+t.indexOf(3));
            break;
    }
}
