const Engineer = require("../lib/Engineer");

describe('Engineer class', () => { 
    // constants for engineer to test.
    const eName = 'Ian Hennessey';
    const eId = '0004';
    const eMail = 'ianhennessey@fakeemail.com';
    const eGitHub = 'atleastitsanethosman';
    
    it("New engineer returns a role of Engineer", () =>{
        expect(new Engineer(eName, eId, eMail, eGitHub).getRole()).toBe('Engineer')
    });
    it("New Employee returns a name in all uppercase", () => {
        expect(new Engineer(eName, eId, eMail, eGitHub).getName()).toBe(eName.toUpperCase())
    });
    it("Gives employee ID matching input", () => {
        expect(new Engineer(eName, eId, eMail, eGitHub).getId()).toBe(eId)
    });
    it("Populates email address as passed to function", () =>{
        expect(new Engineer(eName, eId, eMail, eGitHub).getEmail()).toBe(eMail)
    });
    it("Returns GitHub id as passed to fucntion", () =>{
        expect(new Engineer(eName, eId, eMail, eGitHub).getGitHub()).toBe(eGitHub)
    });

})