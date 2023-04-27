# Lavell-s-NoteNest

## Description 

This code is for a simple note taker application that allows users to create, read, update, and delete notes. The application is built using the Express.js framework for the back-end and plain JavaScript for the front-end.

The application allows users to view a list of notes, create new notes, view existing notes, edit notes, and delete notes. The front-end communicates with the back-end through API calls, and the back-end stores notes in a JSON file.

## User Story

AS A small business owner <br>
I WANT to be able to write and save notes <br>
SO THAT I can organize my thoughts and keep track of tasks I need to complete <br>

## Acceptance Criteria

GIVEN a note-taking application <br>
WHEN I open the Note Taker <br>
THEN I am presented with a landing page with a link to a notes page <br>
WHEN I click on the link to the notes page <br>
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty  fields to enter a new note title and the note’s text in the right-hand column <br>
WHEN I enter a new note title and the note’s text <br>
THEN a Save icon appears in the navigation at the top of the page <br>
WHEN I click on the Save icon <br>
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes <br>
WHEN I click on an existing note in the list in the left-hand column <br>
THEN that note appears in the right-hand column <br>
WHEN I click on the Write icon in the navigation at the top of the page <br>
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column <br>


## Deployed URL

https://lavells-note-nest.herokuapp.com/notes

https://github.com/bragceo/Lavell-s-NoteNest

Note: 

In order to deploy my URL on Heroku I had to install Heroku CLI. See instructions here: https://devcenter.heroku.com/articles/heroku-cli


Because my note taking application has an Express.js back end, I needed to modify the main server file to use Heroku's PORT environment variable. I also had to create a Procfile. Lastly, I followed the Heroku’s deployment instructions once you create a new app (instructions also found here: https://coding-boot-camp.github.io/full-stack/heroku/heroku-deployment-guide)


## Overview of NoteNest

Back-end:

Import required modules and initialize the Express app.
Set the path for the JSON file to store notes.
Configure the app to parse URL-encoded and JSON data.
Serve static files from the 'public' directory.
Define routes for the home page and the notes page.
Define API routes for getting, saving, and deleting notes.
Start the server on port 3000.

Front-end:
Get DOM elements for note title, note text, save button, new note button, and the note list.
Define helper functions to show and hide elements.
Keep track of the active note.
Define functions to interact with the back-end API (getNotes, saveNote, deleteNote).
Define the renderActiveNote function to display the active note or clear the input fields for a new note.
Define functions to handle user interactions like saving a note, deleting a note, viewing a note, and creating a new note.
Define the renderNoteList function to display the list of note titles in the sidebar.
Define the getAndRenderNotes function to fetch notes from the back-end and render them in the sidebar.
Add event listeners for saving, creating a new note, and updating the save button's visibility.
Call the getAndRenderNotes function to fetch and display notes on page load.


## How the Code Works

Below are the relevant parts of the code and how they work:

Server.js
 
This is the main file for handling all the backend operations.
 
An express.js application is created and configured to receive data. FS library is used to read and write to db.json file.
 
The public folder is served as static files

API ROUTES
 
 
GET /api/notes                              
 
This gets all the data from db.json and returns it as response.

POST /api/notes


This method is used to save the new note saved by the user. A unique ID is generated and is attached to the note object and then it is saved to db.json. The newly added note is returned as response

DELETE /api/notes/:id
 
This method deletes the note whose ID is sent be the client. This is done by getting all the data from the json file and filtering it to remove the note with that particular ID.

Application is served on localhost:3000



## How to run the application
 
You can run the application by running this command in the application directory
node index.js


Then to access your application, open your browser and go to http://localhost:3000

I also deployed this application on Heroku (detailed applications above)


## Special Thanks 

Shout out to the awesome Instructors and TAs who worked with me through numerous challenges. These indiviudals include: Diego, Enrique Gomes, and Erik Hoverstein. 

Additional resources used: Build a Notes App using NodeJs, Express, MongoDB & Passport - CRUD






## Authors 

Lavell Juan<br>


## Credits 

N/a

## License 

Please refer to license in repo 
