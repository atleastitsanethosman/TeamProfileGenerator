const Manager = require("../lib/Manager");

describe('Manager class', () => { 
    // constants for intern to test.
    const eName = 'Ian Hennessey';
    const eId = '0004';
    const eMail = 'ianhennessey@fakeemail.com';
    const eOfficeNumber = '001';
    
    it("New Intern returns a role of Intern", () =>{
        expect(new Manager(eName, eId, eMail, eOfficeNumber).getRole()).toBe('Manager')
    });
    it("New Employee returns a name in all uppercase", () => {
        expect(new Manager(eName, eId, eMail, eOfficeNumber).getName()).toBe(eName.toUpperCase())
    });
    it("Gives employee ID matching input", () => {
        expect(new Manager(eName, eId, eMail, eOfficeNumber).getId()).toBe(eId)
    });
    it("Populates email address as passed to function", () =>{
        expect(new Manager(eName, eId, eMail, eOfficeNumber).getEmail()).toBe(eMail)
    });
    it("Returns office number via getOffice method", () =>{
        expect(new Manager(eName, eId, eMail, eOfficeNumber).getOffice()).toBe(eOfficeNumber)
    });

})