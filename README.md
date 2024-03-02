NodeJS Notes API

## Description

The Notes API allows users to register accounts, log in securely, and manage their notes. Each user can create, update, delete, and retrieve their notes through a set of well-defined API endpoints. The API ensures data security by employing JWT tokens for user authentication and authorization.


## Features

- **User Authentication**: Secure user registration and login functionalities using JWT tokens.
- **CRUD Operations**: Create, read, update, and delete operations for managing notes.
- **Protected Routes**: Access to notes endpoints is restricted to authenticated users only.
- **Error Handling**: Comprehensive error handling for various scenarios, ensuring robustness.
- **Environment Variables**: Configuration via environment variables using dotenv for easy deployment.
- **Scalable and Maintainable**: Built using best practices to ensure scalability and maintainability.



## Installation

1. Clone the repository: 
   git clone https://github.com/codal-umistri/jwt_verification.git

2. Install dependencies:
   step-1:- cd jwt_verification
   step-2:- npm install


## Usage

1.Set up environment variables:

Create a ".env" file in the root directory as per ".env.example." file

2.Start the server:

npm start


## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **MySQL**: Relational database management system for storing user data and notes.
- **JWT (JSON Web Tokens)**: Secure method for transmitting information between parties.
- **Bcrypt**: Library for hashing passwords securely.
- **Dotenv**: Module for loading environment variables from a .env file.
- **Swagger-JSDoc**: Tool to define and document API in Swagger format using JSDoc comments.
- **Swagger-UI-Express**: Middleware to serve Swagger UI for visualizing and interacting with the API documentation.

