# HMS SERVER

This project was created to be a template when starting a new [node-ts-express](https://github.com/shantoislam6/node-ts-express) project.

## Features

1. ESNext features are enabled through TypeScript Compiler (tsc), including **ES6 import/export** feature.
2. SQL database implementation with **[Drizzle ORM](https://drizzle.io/)** for **PostgreSQL dialect** (you can change PostgreSQL anytime).
3. API documentation with [Swagger](https://swagger.io/).
4. Records are never deleted from the database. They are marked as deleted.
5. Cache management with [Redis](https://redis.io/).

## API Documentation

API documentation of this project was created with [Swagger](https://swagger.io/).  
You can access the Swagger configuration file from [this link](https://app.swaggerhub.com/apis/mucahitnezir/express-starter/).  
You can also discover the interactive documentation by going to `/docs` when you run the application.

## Database Selection

This project is compatible with SQL-based databases. You can change the default dialect (PostgreSQL) at any time.
To do this, firstly select your database from the table below.
Modify the `dialect` property in `src/config/db.ts` and install required npm package(s) for this database.
For more info, visit [Drizzle ORM docs](https://docs.drizzle.io/).

## Installation

1. Firstly, you have to install npm packages with `yarn install` command.
2. Create empty postgres database in docker
   2.1. Create empty redis database in docker
3. Create **.env** file by copying _.env.sample_ file in **root directory**.
4. Modify .env file.
5. Use `yarn run drizzle:migrate` command to create database tables.
6. Finally, your app will run successfully with `yarn dev` command.

## Engine Requirements

- Node.js version: >= 20
- npm version: 8

## Scripts

- `build`: Removes the `dist` directory, runs database migrations, and compiles TypeScript files.
- `dev`: Runs the server in development mode using nodemon and TypeScript compiler.
- `start`: Starts the server in production mode.
- `drizzle:generate`: Generates PostgreSQL schema using drizzle-kit.
- `drizzle:pull`: Introspects the PostgreSQL schema using drizzle-kit.
- `drizzle:push`: Pushes changes to the PostgreSQL schema using drizzle-kit.
- `drizzle:drop`: Drops the PostgreSQL schema using drizzle-kit.
- `drizzle:check`: Checks the PostgreSQL schema using drizzle-kit.
- `drizzle:up`: Runs migrations and applies changes to the PostgreSQL schema using drizzle-kit.
- `drizzle:studio`: Opens drizzle-kit studio on port 8000 with verbose logging.
- `migrate`: Runs the database migration script.

## Database Management

The following commands are used for managing the PostgreSQL database:

- `drizzle:generate`: Generates the PostgreSQL schema based on the defined models.
- `drizzle:pull`: Introspects the PostgreSQL database schema and generates corresponding model definitions.
- `drizzle:push`: Pushes any changes made in the model definitions to the PostgreSQL database schema.
- `drizzle:drop`: Drops the entire PostgreSQL database schema.
- `drizzle:check`: Checks the consistency of the model definitions with the current PostgreSQL database schema.
- `drizzle:up`: Runs any pending database migrations and applies changes to the PostgreSQL database schema.
- `drizzle:studio`: Opens the drizzle-kit studio, providing a graphical interface for managing the PostgreSQL database schema.

## Authentication Endpoints

| Route             | HTTP Verb | Request Body                                                                                    | Description                      |
| ----------------- | --------- | ----------------------------------------------------------------------------------------------- | -------------------------------- |
| /auth/register    | `POST`    | {"firstName": "John", "lastName": "Doe", "email": "john.doe@example.com", "password": "123456"} | Create new user.                 |
| /auth/login       | `POST`    | {"email": "john.doe@example.com", "password": "123456"}                                         | Login endpoint.                  |
| /auth/me          | `GET`     | Empty                                                                                           | Fetch current user.              |
| /auth/me          | `PUT`     | {"firstName": "John", "lastName": "Doe", "email": "john.doe@example.com"}                       | Update current user.             |
| /auth/me          | `DELETE`  | Empty                                                                                           | Delete current user.             |
| /auth/me/password | `PUT`     | {"current": "current-password", "password": "new-password"}                                     | Update password of current user. |

## Contribution

Anyone interested in the project can contribute to this repository. To do this, first fork the repository.
Then make the changes in your repository. Finally, send a pull request to this repository.

## License

**HMS-Server** is licensed under the **pro-lab-software**.
