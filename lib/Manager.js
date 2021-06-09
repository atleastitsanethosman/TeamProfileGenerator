const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email, 'Manager');
        this.office = office;
    }
    getOffice() {
        return this.office;
    }
}

module.exports = Manager