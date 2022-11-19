function uncrypt(arg) {
    
    return caption
}

let arg = '>5K <0Y <3W <3K <6U <3Q', mainBase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',decrypt = '';
let index;

arg = arg.toUpperCase().split(' ');


    for (i of arg) {
        for (el of i) {
            if (i[0] == '<')
                index = mainBase.indexOf(i[2]) - parseInt(i[1])
            else
                index = mainBase.indexOf(i[2]) + parseInt(i[1])
        }
        decrypt += mainBase[index]
    } 

console.log(decrypt);