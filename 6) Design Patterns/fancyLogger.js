 class FancyLogger {

    constructor(){

        if(FancyLogger.instance == null){

            this.logs = [];
            FancyLogger.instance = this;


        }

        return FancyLogger.instance;
    }

    log(message) {

        this.logs.push(message);
        console.log(`Fancy : ${message}`);
    }

    printLogCount() {

        console.log(`${this.logs.length} logs`);
    }
}


let logger = new FancyLogger();
Object.freeze(logger); // prevents other people to add or remove entities from this class 
export default logger;