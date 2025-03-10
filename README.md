## NodeJS Assignment 3

This project is a User Management System built using Node.js, Express.js, and EJS as the templating engine. The application allows users to register, view, edit, and delete user data, with dynamic rendering using EJS. It follows the Model-View-Controller (MVC) architecture and demonstrates middleware usage, form validation, and structured Express.js application design.

### Getting Started

```sh
git clone https://github.com/sudo-pro/NodeJS_Assignment_3
cd NodeJS_Assignment_3
npm i
npm start

```

### Assignment Workflow

```sh
gh repo create NodeJS_Assignment_3 --private
mkdir NodeJS_Assignment_3
cd NodeJS_Assignment_3
git init .
git remote add origin git@github.com:sudo-pro/NodeJS_Assignment_3.git

npm init -y
npm i express ejs body-parser
npm i nodemon -D
echo "node_modules" > .gitignore
echo "## NodeJS Assignment 3" > README.md
touch server.js

```

#### Implementaions

| Method | Endpoint      | Description                                                            |
| ------ | ------------- | ---------------------------------------------------------------------- |
| `GET`  | `/`           | Displays a form where users can enter their name                       |
| `POST` | `/add-user`   | On form submission stores the user in an array or JSON file            |
| `GET`  | `/users`      | Displays all stored users dynamically using a template engine          |
| `GET`  | `/edit/:id`   | Shows an editable input field pre-filled with the user's existing name |
| `POST` | `/update/:id` | On form submission update the user in an array or JSON file            |
| `GET`  | `/delete/:id` | Removes a user from the data source                                    |

#### Repository Structure

```
$ROOT
├── controllers/               # Contains the logic for handling requests and responses
├── middlewares/               # Middleware functions for request validation and processing
├── models/                    # Database models for Sequelize
├── public/                    # Directory for static files (CSS, icons etc.)
├── routes/                    # Definitions of application routes
├── views/                     # EJS templates for rendering HTML views
├── .gitignore                 # Specifies files and directories to be ignored by Git
├── package.json               # Project metadata and dependencies
├── server.js                  # Entry point for the server application
└── README.md                  # Project documentation
```

### Justification for Using EJS

EJS (Embedded JavaScript) was chosen as the templating engine for this project due to its simplicity and ease of use. EJS allows developers to embed JavaScript code directly within HTML, making it straightforward to generate dynamic content. This feature is particularly beneficial for projects that require quick rendering of views based on user input or data from a database.

When compared to Pug, another popular templating engine, EJS offers a more familiar syntax for those who are accustomed to HTML. Pug uses a whitespace-sensitive syntax that can be less intuitive for new developers. EJS's syntax is more readable and maintainable, as it closely resembles standard HTML, which can reduce the learning curve for new team members.

Additionally, when comparing EJS to Handlebars, another widely used templating engine, EJS provides more flexibility in terms of embedding JavaScript logic directly within the templates. Handlebars enforces a logic-less philosophy, which can lead to more separation of concerns but may require additional helper functions for complex logic. EJS's ability to include JavaScript directly allows for quicker prototyping and dynamic content generation.

In summary, the strengths of EJS include:
- **Simplicity**: Easy to learn and use, especially for those familiar with HTML.
- **Maintainability**: Clear and readable syntax that makes it easier to manage templates.
- **Flexibility**: Ability to embed JavaScript directly within HTML, allowing for dynamic content generation.
