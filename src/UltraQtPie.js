const QtPie = require('./QtPie.js');

/**
 * @extends QtPie
 */

class UltraQtPie extends QtPie {
    constructer(args) {
        args.super();
    }

    /**
     * Call someone ULTRA cute
     * @param {string} args 
     */
    ultraQt(args) {
        if(typeof args !== 'string') throw `ULTRA Qtpie must be a string`;
        if(args === `you`) {
            return console.log(`${args} are ULTRA qt`);
        }
        return console.log(`${args} is ULTRA qt`);
    }
}

module.exports = UltraQtPie;