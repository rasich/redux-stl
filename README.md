### `npm i`

### `json-server src/db.json`

### `npm start`

##
## Technical test assignment

1.	 Generate new project with create react app
2.	Create new repo on your github or bitbucket account and put that project there
3.	The main task is:
●	the App is consist of two pages.
●	the main page contains the list of users with following info: name, phone, email, country, age. 
●	also each user needs to have 2 buttons - update and delete. So, when you click on delete button the user should be removed from the list. When you click update button - it should open new page with user’s details, which you can update and save updates.

So, that means we have one main page with the list of users and one details page.
Details page - is a form. On that form we have 5 inputs:
●	Name - text input
●	Phone - text input
●	Email - text input
●	Country - select (let’s just put three options there: Australia, Russia, USA)
●	Age - number input.

On main page, please add opportunity to sort users by name

You can store data with users info in some file like fixtures.js as mock data on frontend. 

Design doesn’t matter. It’s up to you. Please, don’t use many external libraries. Actually, you can use React Redux, React router. For styles you can use @material-ui/styles or whatever you want for css. 

Would be really nice if you could write your custom component for input and select.

And if you want you can deploy it on Heroku.

