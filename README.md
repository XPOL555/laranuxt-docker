## Introduction

This project is a dockerized version of [Nuxt 2](https://nuxtjs.org/guide) and [Laravel 6](https://laravel.com/docs/6.x/installation)

## Getting started

1.  Copy [laravel's configuration file](https://laravel.com/docs/6.x/configuration) `api/.env.local` into`api/.env` 
1.  Copy `nuxt/.env.local` into`nuxt/.env` 
1.  Run `docker-composer up` or start ![image](uploads/723be85325c497c10e0c3ec8ecc668ec/image.png) `services` from the `docker-compose.yml` file (this may take up to 5 minutes for the first time)
1.  Run `docker-compose exec php composer install`
1.  Run `docker-compose exec php artisan migrate --seed` (change `ADMIN_EMAIL`, `ADMIN_PASSWORD` and `ADMIN_USER` in `app/.env` if you like)
1.  Run `docker-compose exec php bash -c "php artisan migrate --seed"` to init the laravel db and seeding the admin user
1.  Run `docker-compose exec php bash -c "php artisan passport:keys"` to create the passport keys files

That's it! Try to open http://laranuxt.localhost


## Nuxt contains also 
1.  Vue Apollo as module: https://github.com/nuxt-community/apollo-module for GraphQL Client
1.  Auth Nuxt module: https://auth.nuxtjs.org/ configured to work with laravel passport
1.  Uses Vuetify as frontend framework: https://vuetifyjs.com/en/

## Laravel contains also
1.  GraphQL Lite https://graphqlite.thecodingmachine.io/docs/features.html
1.  [Passport already configured ](https://laravel.com/docs/6.x/passport#introduction)and integrated with nuxt auth module

