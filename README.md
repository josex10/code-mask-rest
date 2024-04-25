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

* Execute the following commands for prisma
```
    npx prisma migrate dev
    npx prisma generate 
```

* Execute the seed endpoint [create the base of the DB](localhost:3000/api/seed)