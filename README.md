# BL home assistant

Please clone this directory and read the manual in order to understand how to run the application.

## Server Setup

1. Enter the repository `./server`.
2. In the email I've sent you, you can find a `.env` file, please place it in the root directory of the server app.
3. Run `yarn install` in order to install all of the dependencies required for the project.
4. In order to connect **MySQL database** using **docker-compose**, please run `docker-compose up --build -d`.
5. You need to run the migrations in order to use the models that I've created, please run:

   1. `yarn typeorm:migrate`
   2. `typeorm:run-migrations`

6. You can run the server locally on port **5000**, using `yarn start`.
7. In the email I've sent you, you can find a file called `bl.postman_collection.json`, please import it into **Postman** in order to easily create orders and companies.
