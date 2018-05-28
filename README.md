# Voting Booth

Polling application with mock authentication. 

Back End: Node.js, Express, Postgres, Sequelize
Front End: React, Redux, Sass

## Run it locally!

1. Clone the git repository & navigate to the directory

```
$ git clone git@github.com:JulianHinsch/voting-booth.git
$ cd voting-booth
```

Make sure you have Postgres installed locally, create a database called "voting_booth"

Start the server

```
$ cd server
$ npm install
$ npm start
```

Start the front-end
(In a new tab)

```
$ cd ..
$ cd client
$ npm install
$ npm start
```

Compile Sass code (only necessary if you wish to make changes)
(In a new tab)

```
$ npm run sass
```

## TODO: (Updated 5/28/18)

- Don't track header open in react, only use styles
- Don't track window width
- Write tests
- Combine Header and Subheader components