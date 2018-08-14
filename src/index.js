/**
 * @name QtPie
 * @author missingbinaries
 */

class QtPie {
    constructor(args) {
        this.args = args;
    }

    /**
     * Call someone cute
     * @param {*} args 
     */
    qt(args) {
        if(typeof args !== 'string') throw `Qtpie must be a string`;
        if(args === `you`) {
            return console.log(`${args} are qt af`);
        }
        return console.log(`${args} is qt af`);
    }
}

module.exports = QtPie;