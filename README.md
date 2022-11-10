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

## Links

- [Routing and Route Auth in Nuxt](https://techformist.com/routing-auth-nuxt/)
- [Auth Middleware life example](https://stackblitz.com/edit/nuxt-starter-eqwqp8?file=pages%2Fsecret.vue)