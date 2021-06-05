const Employee = require("../lib/Employee");

describe('Employee class', () =>{
    it("New employee returns a role of employee", () =>{
        expect(new Employee('Greg').getRole().toBe('Employee'))
    });
    
})