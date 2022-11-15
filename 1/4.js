let a=2, b=3, n=20
let aMultiple = [], bMultiple = [], any = [], both = []

for(let i=1; i<=n; i++){
    if(i%a==0 && i%b!=0)
        aMultiple.push(i)
    else if(i%b==0 && i%a!=0)
        bMultiple.push(i)
    else if(i%b!=0 && i%a!=0)
        any.push(i);
    else
        both.push(i);
}


console.log(`Multiple a: ${aMultiple}->total nonb: ${aMultiple.length}`);
console.log(`Multiple b: ${bMultiple}->total nonb: ${bMultiple.length}`);
console.log(`a&b: ${both}->total nonb: ${both.length}`);
console.log(`pas de multiple: ${any}->total nonb: ${any.length}`);