# natterbase

A rest api for the natterbase test

### HOW TO USE

`git clone ` repo

Then, run `npm install`

After which you run `npm start` to start the app

API is listening on `localhost:3030`

#### Requests

Login - [POST] `localhost:3030/login` body: {username: "admin", password: "admin"}

Get all COUNTRIES - [GET] `localhost:3030/countries` header: {auth_token: "the_auth_token"}

Add a Country - [PUT] `localhost:3030/countries` header: {auth_token: "the_auth_token"}, body: {countryToAdd: "country_to_add"}

Delete a Country - [DELETE] `localhost:2020/countries` header: {auth_token: "the_auth_token"}, body: {country: "country_to_delete"}

