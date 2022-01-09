class User {
    constructor(
        name,
        password,
    ){
        this.name = name;
        this.password = password;
    }

    setPassword(password){ this.password = password; }
    setName(name){ this.name = name; }

    getName(){ return this.name; }
    getPassword(){ return this.password; }

    auth(name, password){
        if(name === this.name && password === this.password){ 
            return true;
        }else{
            return false;
        }
    }

}

module.exports = User;