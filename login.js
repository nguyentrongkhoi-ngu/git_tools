function login(username, password){

    if(username === "" || password === ""){
        console.log("Please enter username and password");
        return;
    }

    if(username === "admin" && password === "123456"){
        console.log("Login success");
    }else{
        console.log("Login failed");
    }
}