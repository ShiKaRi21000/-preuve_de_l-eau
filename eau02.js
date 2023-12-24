
function reversedArgument (){
    const argument = process.argv
    for (let i = argument.length; i > 0; i--){
        if (i <= 2) {

        }

        else if (argument === ""){
            console.log("error")
            break
        }

        else {
            console.log(argument[i - 1])
        }
    }
}