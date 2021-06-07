const Employee = require("../lib/Employee");

describe('Employee class', () => { 
    // constants for employee to test.
    const eName = 'Ian Hennessey';
    const eId = '0004'
    const eMail = 'ianhennessey@fakeemail.com'
    
    it("New employee returns a role of employee", () =>{
        expect(new Employee(eName, eId, eMail).getRole()).toBe('Employee')
    });
    it("New Employee returns a name in all uppercase", () => {
        expect(new Employee(eName, eId, eMail).getName()).toBe(eName.toUpperCase())
    });
    it("Gives employee ID matching input", () => {
        expect(new Employee(eName, eId, eMail).getId()).toBe(eId)
    });
    it("Populates email address as passed to function", () =>{
        expect(new Employee(eName, eId, eMail).getEmail()).toBe(eMail)
    });

})