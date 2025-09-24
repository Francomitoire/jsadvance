"use strict"

let globalVar = ""

function scopeTest(paramVar) {
    let functionVar = ""
    if(true){
        let blockVar = ""
        function closureFunction(){
            globalVar = "Im a global variable"
            paramVar = "Im a parameter variable"
            functionVar = "Im a function variable"
            blockVar = "Im a block variable"
            
            console.log(globalVar)
            console.log(paramVar)
            console.log(functionVar)
            console.log(blockVar)
        }
        return closureFunction()
    }
}
scopeTest("")