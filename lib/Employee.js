class Employee {
    constructor (name, id, role) {
        this.name = name;
        this.id = id;
        this.role = role;
    };
    getName () {
        return this.name.toUpperCase();
    };
    getId () {
        return this.id;
    };
    getEmail () {
        return `${this.name.split(' ').join('').toLowerCase()}@fakeemail.com`;
    };
    getRole () {
        return 'Employee';
    };

};

module.exports = Employee;