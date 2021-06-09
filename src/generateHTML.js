function createEmployee(employees) {
    var htmlCard = ''
    employees.forEach(element => {
        switch (element.getRole) {
            case 'Manager':
                htmlCard += `
                <div class="card col-sm-6 col-md-4 col-lg-3">
                    <div class="card-header">
                        <h2>${element.getName}</h2>
                        <h3>Manager <i class="bi bi-diagram-3"></i></h3>
                    </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${element.getId}</li>
                  <li class="list-group-item">Email: <a href="mailto:${element.getEmail}">${element.getEmail}</a></li>
                  <li class="list-group-item">Office Number: ${element.getOffice}</li>
                </ul>
              </div>
              `
                break;
        
            case 'Engineer':
                htmlCard +=`
                <div class="card col-sm-6 col-md-4 col-lg-3">
                    <div class="card-header">
                        <h2>${element.getName}</h2>
                        <h3>Engineer <i class="bi bi-tools"></i></h3>
                    </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${element.getId}</li>
                            <li class="list-group-item">Email: <a href="mailto:${element.getEmail}">${element.getEmail}</a></li>
                            <li class="list-group-item">GithubProfile: <a href="https://github.com/${element.getGitHub}" target="_blank">${element.getGitHub}</a></li>
                    </ul>
                </div>`
                break;

            case 'Intern':
                htmlCard +=`
                <div class="card col-sm-6 col-md-4 col-lg-3">
                    <div class="card-header">
                        <h2>${element.getName}</h2>
                        <h3>Intern <i class="bi bi-pencil"></i></h3>
                    </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${element.getId}</li>
                            <li class="list-group-item">Email: <a href="mailto:${element.getEmail}">${element.getEmail}</a></li>
                            <li class="list-group-item">School: ${element.getSchool}</li>
                    </ul>
                </div>`
                break;
        }
    });
    return htmlCard;
}

function generateHTML(employees) {
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
      </head>
    <body>
        <div class="container-fluid bg-success bg-gradient text-white">
            <h1 class="container-fluid ">Ian Hennessey Organization  <i class="bi bi-diagram-3"></i></h1>
        </div>
        <div class="container-fluid">
    
            <div class="row">
            ${createEmployee(employees)}
            </div>

            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
        </body>
        </html>
            `
}

module.exports = generateHTML;