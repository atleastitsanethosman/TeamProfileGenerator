// calling packages and classes from library.
const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const organization = []

// question array for manager data to call at start of function.
const managerPrompt = [
    {
        type: 'input',
        name: 'name',
        message: 'Welcome to the Organization Vizualization tool\nPlease enter the name of the Manager of the Organization\n',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the employee id for the Manager.\n'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the manager email.\n',
        validate(value) {
            const pass = value.match(/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i);
            if (pass) {
                return true;
            }
            return 'Please enter a valid email!'
        }
    }, 
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter the Manager's office number.\n"

    }
];

// question array for new engineer.
const newEngineerPrompt = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the Engineer\n',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the employee id for the Engineer.\n'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the employee email.\n',
        validate(value) {
            const pass = value.match(/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i);
            if (pass) {
                return true;
            }
            return 'Please enter a valid email!'
        }
    }, 
    {
        type: 'input',
        name: 'github',
        message: "Please enter the Engineers GitHub username.\n"

    }
];

// question array for new intern.
const newInternPrompt = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the intern\n',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the employee id for the intern.\n'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the employee email.\n',
        validate(value) {
            const pass = value.match(/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i);
            if (pass) {
                return true;
            }
            return 'Please enter a valid email!'
        }
    }, 
    {
        type: 'input',
        name: 'school',
        message: "Please enter the Interns School.\n"

    }
];

// Question array for adding a new employee or exiting the function.
const newEmpPrompt = [
    {
        type: "list",
        name: "employeeType",
        message: "Would you like to add an employee to the organization?\n",
        choices: [
            "Add an Engineer.",
            "Add an Intern.",
            new inquirer.Separator(),
            "No, I am done.",
        ],
    },
]

// function to create new engineer.
function newEngineer() {
    inquirer.prompt(newEngineerPrompt).then((answers) =>{
        organization.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
        console.log(JSON.stringify(organization));  //need to remove this line to pass to function.
    newEmp();
    });
};

// function to create new intern.
function newIntern() {
    inquirer.prompt(newInternPrompt).then((answers) =>{
        organization.push(new Intern(answers.name, answers.id, answers.email, answers.school));
        console.log(JSON.stringify(organization));  //need to remove this line to pass to function.        
    newEmp();
    });
};

// function to handle choice of new employee to add or end function.
function newEmp() {
    inquirer.prompt(newEmpPrompt).then((answers) => {
    console.log(JSON.stringify(answers)); //need to remove this line to pass to actual function.
        switch (answers.employeeType) {
            case "Add an Engineer.":
                newEngineer();
                break;
            case "Add an Intern.":
                newIntern();
                break;
            case "No, I an done.":
                makePage(); //fill in function to generate HTML.
                break;
        };
    })
}


function start() {
    inquirer.prompt(managerPrompt).then((answers) => {
        organization.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));
        console.log(JSON.stringify(organization));  //need to remove this line to pass to function.        
        newEmp()
    });

}

start();