const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, 'Engineer');
        this.github = github;
    }
    getGitHub() {
        return this.github;
    }
}

module.exports = Engineer

