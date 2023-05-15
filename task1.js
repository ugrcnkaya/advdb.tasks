/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('srh1');

// Insert a few documents into the sales collection.
db.getCollection("movies").drop()
db.getCollection('movies').insertMany([
    {
        title: 'Inception',
        director: 'Christopher Nolan',
        actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
        duration: 148,
        genre: 'Science Fiction',
        year: 2010,
      },
      {
        title: 'The Prestige',
        director: 'Christopher Nolan',
        actors: ['Hugh Jackman', 'Christian Bale', 'Scarlett Johansson'],
        duration: 130,
        genre: 'Drama',
        year: 2006,
      },
      {
        title: 'The Dark Knight',
        director: 'Christopher Nolan',
        actors: ['Christian Bale', 'Heath Ledger', 'Gary Oldman'],
        duration: 152,
        genre: 'Action',
        year: 2008,
      },
      {
        title: 'Interstellar',
        director: 'Christopher Nolan',
        actors: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
        duration: 169,
        genre: 'Science Fiction',
        year: 2014,
      },
      {
        title: 'Titanic',
        director: 'James Cameron',
        actors: ['Leonardo DiCaprio', 'Kate Winslet', 'Billy Zane'],
        duration: 194,
        genre: 'Romance',
        year: 1997,
      },
      {
        title: 'The Dark Knight Rises',
        director: 'Christopher Nolan',
        actors: ['Christian Bale', 'Tom Hardy', 'Anne Hathaway'],
        duration: 165,
        genre: 'Action',
        year: 2012,
      },
      {
        title: 'The Departed',
        director: 'Martin Scorsese',
        actors: ['Leonardo DiCaprio', 'Matt Damon', 'Jack Nicholson'],
        duration: 151,
        genre: 'Crime',
        year: 2006,
      },
      {
        title: 'Rush Hour (Jackie Chan)',
        director: 'Brett Ratner',
        actors: ['Jackie Chan', 'Chris Tucker'],
        duration: 98,
        genre: 'Action',
        year: 1998,
      },
      {
        title: 'Rush Hour 2',
        director: 'Brett Ratner',
        actors: ['Jackie Chan', 'Chris Tucker', 'Zhang Ziyi'],
        duration: 90,
        genre: 'Action',
        year: 2001,
      },
      {
        title: 'Rush Hour 3',
        director: 'Brett Ratner',
        actors: ['Jackie Chan', 'Chris Tucker', 'Max von Sydow'],
        duration: 91,
        genre: 'Action',
        year: 2007,
      },
]);



/* 
List All 
db.movies.find()

List Only Interstellar
db.getCollection("movies").find({title:'Interstellar'})

List all actors with all details.
List the names of all actors (only once, no repetitions)

db.getCollection("movies").distinct("actors")


List the all information for movies which are directed by Christopher Nolan
db.movies.find({director: 'Christopher Nolan'})



List the all information for movies in which Leonardo di Caprio is an actor
db.movies.find({ actors: 'Leonardo DiCaprio' })




*/
