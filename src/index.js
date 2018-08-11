/**
 * @name QtPie for the qt in u
 * @author missingbinaries
 */


class QtPie {
    constructor(args) {
        this.args = args;
    }

    qt(args) {
        if(typeof args !== 'string') throw `Qtpie must be a string`;
        return console.log(`${args} is qt af`);
    }
}

module.exports = QtPie;