# Voting Booth

Create polls for the public!

Back End: Node.js, Express, Postgres, Sequelize
Front End: React, Redux, Sass

## Run it locally!

1. Clone the git repository & navigate to the directory

```bash
$ git clone git@github.com:JulianHinsch/voting-booth.git
$ cd voting-booth
```

Make sure you have Postgres installed locally, create a database called 'voting_booth'.
You can configure the app to use your database credentials using an environment variable called 'DATABASE_URL'.

2.  Start the server

```bash
$ cd server
$ npm install
$ npm start
```

3.  Start the front-end
(In a new tab)

```bash
$ cd client
$ npm install
$ npm start
```

4.  Compile Sass code (only necessary if you wish to make changes)
(In a new tab)

```
$ cd client
$ npm run sass
```

## TODO: (Updated 8/29/18)

- Write tests
- Add auth systems, prevent voting more than once
- Add a general 404 page
- Improve error handling and loading
- Refactor form validation methods
