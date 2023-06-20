function numberOneTriangle(){
}
let aNumber = prompt(`nhao vao so nguyen a tu 1 den 10:`)
    a = Number(aNumber)
    for (let i = 0; i < a; i++) {
        for(j = 0; j <= i; j++){
            document.writeln(" * ")
        }
        document.writeln("<br/>")
    }