# Development

Steps to run the App on Dev

* Deploy the DB on docker

```
docker compose up -d
```

* Create a copy of env.template and Rename .env.template to .env

* Change the values of the variables on .env file

* Execute the command ``` npm install ``` to instal dependencies

* Run the app ``` npm run dev ```

* If it's your first time running the app it's neccesary to set up some changes related with the DB

    - Execute the following command to create the tables on DB based on the Prisma Schema
        ``` npx prisma migrate dev --name init```
    - Then you need be able to open your DB with some DB Manager like tablePlus
    - if you can be able to open the DB run the following command to create seed data to start working ``` npm run seed```







#Prisma

Explanation of Prisma commands, also you can see the updated infor on the following link: https://www.prisma.io/docs/getting-started/quickstart

``` npx prisma migrate dev --name init```
This command did three things:

1. It created a new SQL migration file for this migration in the prisma/migrations directory.
2. It executed the SQL migration file against the database.
3. It ran prisma generate under the hood (which installed the @prisma/client package and generated a tailored Prisma Client API based on your models).