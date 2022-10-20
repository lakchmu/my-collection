# My Collection

## DB And Nginx Setup

```bash
$ docker-compose up
```

## Prod Setup
```bash
$ docker-compose -f docker-compose.prod.yml up --build -d
```

## Url

http://localhost:8080/

## Init DB

```bash
$ npx prisma migrate dev --name my-collection init
```