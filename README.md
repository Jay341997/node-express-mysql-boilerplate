## Quick start

1. Clone the repository
2. Setup the database on `.env` (there's an example file there to be used with MySQL )
3. Install the dependencies with `npm`
4. Create the development and test databases you have setup on `.env`
5. Run the database migrations with `npm run sequelize db:migrate`
6. Add some seed data to the development database with `npm run sequelize db:seed:all`
7. Run the application in development mode with `npm run dev`
8. Access `http://localhost:3000/v1/users` and you're ready to go!


## Scripts

This boilerplate comes with a collection of npm scripts to make your life easier, you'll run them with `npm run <script name>` or `yarn run <script name>`:

- `dev`: Run the application in development mode
- `start`: Run the application in production mode (prefer not to do that in development)
- `lint`: Lint the codebase
- `sequelize`: Alias to the [Sequelize CLI](https://github.com/sequelize/cli)
- `console`: Open the built-in console, you can access the DI container through the `container` variable once it's open, the console is promise-friendly. Click [here](https://github.com/talyssonoc/node-api-boilerplate/wiki/Application-console) to know more about the built-in console
- `cleanup`: Removes the files from the example application


This boilerplate is open to suggestions and contributions, documentation contributions are also important! :)
