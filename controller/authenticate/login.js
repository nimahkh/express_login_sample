var login =function(user,password){

    console.log(user,password)
    if(user==="nima@nima.com" && password==="nima"){
        return true;
    }
    else{
        return false;
    }
}

module.exports=login;