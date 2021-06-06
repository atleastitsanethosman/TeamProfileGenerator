const Employee = require("../lib/Employee");

describe('Employee class', () => { 
    // constants for employee to test.
    const eName = 'Ian Hennessey';
    const eId = '0004'
    const eRole = 'Manager'
    
    it("New employee returns a role of employee", () =>{
        expect(new Employee(eName, eId, eRole).getRole()).toBe('Employee')
    });
    it("New Employee returns a name in all uppercase", () => {
        expect(new Employee(eName, eId, eRole).getName()).toBe(eName.toUpperCase())
    });
    it("Gives employee ID matching input", () => {
        expect(new Employee(eName, eId, eRole).getId()).toBe(eId)
    });
    it("Populates email address using convention of no spaces and all lowercase characters", () =>{
        expect(new Employee(eName, eId, eRole).getEmail()).toBe('ianhennessey@fakeemail.com')
    });

})