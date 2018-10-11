const execute = require('./execute');
const printer = require('./print');

class Todeclare{
    constructor(){
        this.date = Date.now();
    }
}
Todeclare.prototype.add = execute.add;
Todeclare.prototype.derive = execute.derive;
Todeclare.prototype.print = printer.print;
Todeclare.prototype.print2 = printer.print2;

Todeclare.prototype.printSelf = function () {
    console.log(this.date);
};

const newInst = new Todeclare();

module.exports = newInst;
