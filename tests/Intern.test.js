const Intern = require("../lib/Intern");

describe('Intern class', () => { 
    // constants for intern to test.
    const eName = 'Ian Hennessey';
    const eId = '0004';
    const eMail = 'ianhennessey@fakeemail.com';
    const eSchool = 'Michigan State University';
    
    it("New Intern returns a role of Intern", () =>{
        expect(new Intern(eName, eId, eMail, eSchool).getRole()).toBe('Intern')
    });
    it("New Employee returns a name in all uppercase", () => {
        expect(new Intern(eName, eId, eMail, eSchool).getName()).toBe(eName.toUpperCase())
    });
    it("Gives employee ID matching input", () => {
        expect(new Intern(eName, eId, eMail, eSchool).getId()).toBe(eId)
    });
    it("Populates email address as passed to function", () =>{
        expect(new Intern(eName, eId, eMail, eSchool).getEmail()).toBe(eMail)
    });
    it("Returns School in all uppercase via getSchool method", () =>{
        expect(new Intern(eName, eId, eMail, eSchool).getSchool()).toBe(eSchool.toUpperCase())
    });

})