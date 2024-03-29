// Task 12 (changes to starter code's html templates): Updated Bootstrap link to newest version. Removed link to own CSS file (redundant). Added inline CSS. Replaced jumbotron with a simple header. Renamed title and h1. Added spacing between cards. Added a simple footer. Added Google font. Also added separate columns for manager, engineer(s) and intern(s).

// Creates the team (passing in team array; which contains objects created via userPrompts arrays).
const generateTeam = team => {

  // Creates the manager html.
  const generateManager = manager => {
    return `
    <div class="manager-area col-12 d-flex justify-content-center gap-3 mt-3">
    <div class="card employee-card">
      <div class="card-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i> ${manager.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="engineer-area col-12 d-flex justify-content-center gap-3 mt-3">
        `;
  };

  // Creates the html for engineers.
  const generateEngineer = engineer => {
    return `
    <div class="card employee-card">
    <div class="card-header">
      <h2 class="card-title">${engineer.getName()}</h2>
      <h3 class="card-title"><i class="fas fa-glasses mr-2"></i> ${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank"
            rel="noopener noreferrer">${engineer.getGithub()}</a></li>
      </ul>
    </div>
  </div>
        `;
  };

  // Creates the html for interns.
  const generateIntern = intern => {
    return `
    <div class="card employee-card">
    <div class="card-header">
      <h2 class="card-title">${intern.getName()}</h2>
      <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i> ${intern.getRole()}</h3>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">University: ${intern.getSchool()}</li>
      </ul>
    </div>
  </div>
        `;
  };

  // Empty array to "hold" team html.
  const html = [];

  // *CREDIT: Coder’s understanding of the below developed thanks to Xpert Learning Assistant’s (2024) answer to “explain this: [code below pasted]”.
  // Filters team array to only include objects with role value of "Manager", then maps over the filtered array and calls generateManager function (passing in manager object) which gets HTML for each manager; then pushes this html up to the team array.
  html.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManager(manager))
  );
  // As above but for objects with role value as "Engineer". Because there could be more than one; uses join("") method to concatenate the HTML elements into a single string before pushing up to html array.
  html.push(team
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => generateEngineer(engineer))
    .join("")
  );

  // Pushes HTML to html array (closing engineer column div and opening intern column div)
  html.push(`</div>
  <div class="intern-area col-12 d-flex justify-content-center gap-3 mt-3">`)

  // As above but for objects with role value as "Intern".
  html.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => generateIntern(intern))
    .join("")
  );

  // Uses join("") to concatenate all HTML elements of html array into single string, then returns it.
  return html.join("");

}

// Exports function to generate entire page.
module.exports = team => {

  return `
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>Software Engineering Team</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
  <script src="https://kit.fontawesome.com/c502137733.js"></script>
  <style>
    body {
      font-family: 'Roboto', sans-serif;
    }

    header {
      background-image: url("../images/cyber-technology-background.jpg");
      background-position: cover;
    }
  </style>
</head>

<body>
  <header class="container-fluid text-center p-3">
    <h1>Our Software Engineering Team</h1>
  </header>
  <div class="container">
    <div class="row">
        ${generateTeam(team)}
      </div>
    </div>
  </div>
  <footer class="container py-3 my-4 border-top">
    <div class="row text-center">
      <a class="col-4 text-body-secondary" href="https://fonts.google.com/specimen/Roboto?query=roboto">Font by Google
        Font</a>
      <p class="col-4 text-body-secondary">© 2024 Code Em</p>
      <a class="col-4 text-body-secondary" href="http://www.freepik.com">Header Image by Freepik</a>
    </div>
  </footer>
</body>

</html>
    `;
};