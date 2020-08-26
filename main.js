class Timer{
    constructor(timeout, callback, ...args){
        this.timeout = timeout;
        this.callback = callback;
        this.args = args;
        this.timer = setTimeout(callback, timeout, ...args);
    }

    stop(){
        clearTimeout(this.timer);
    }

    restart(){
        clearTimeout(this.timer);
        setTimeout(this.callback, this.timeout, ...this.args);
    }
}

module.exports = function(timeout, callback, ...args){
    // 
    if(callback) return new Timer(...arguments);
    // 
    else return new Promise((resolve) => { setTimeout(resolve, timeout) });
};