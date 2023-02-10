// promises

function checkIsSuccess(data){
    return new Promise(function(resolve, reject){
        if(data === "success"){
            return resolve("successfully executed");
        }
        else{
            return resolve("unsuccessfully executed");
        }
    })
}

console.log(checkIsSuccess("success"));