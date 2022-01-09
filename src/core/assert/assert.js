function assert(value){
    if(!value){
        throw new Error('Invalid Value');
    }else{
        console.log('Success');
    }
}

module.exports = assert;