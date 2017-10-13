#Week of 19 HW: AngularJS Advanced To-Do

### Overview

In this activity, you'll create an advanced AngularJS to-do list application. This assignment requires you to create AngularJS directives, controllers, routes, and a service to display, edit, create, and delete within your to-do list application. You'll also use Node, Express and MongoDB so that users can save there to-dos and the status.

### Instructions

1. Your application will have 3 states [List State](hw_state_1.png), [Create State](hw_state_2.png), [Completed State](hw_state_3.png)

2. Create a MongoDB database called `angularToDo`.

3. Using mongoose, then create an ToDo schema and model

4. ToDos should have each of the following fields:

	* `todo` (The actual to-do)

	* `completeBy` (date to complete the to-do by)

	* Creating `documents` in your `todos` collection similar to  
	    ```js
	    {
	      todo: 'Learn more about AngularJS directives',
	      completeBy: '1974-07-18T00:00:00Z'
	    }
	    ```
5. Create a Node/Express/MongoDB/AngularJS app called `angularToDo`. Running this application will:

	* Create a Bootstrap layout similar to that displayed in mockups above. This should be a SPA (Single Page Application) that uses [`ui-router`](https://github.com/angular-ui/ui-router) to navigate between the Angular states **without** changing the route within Express.
		* If you want to try out another CSS framework, feel free to use an alternative to Bootstrap.

	* You'll need several Express routes for your app:

		* `/api/todos` (get) - your AngularJS service will use this to query MongoDB for all saved todos

		* `/api/todo` (post) - your AngularJS service will use this to save a todo to the database

		* `/api/todo` (put) - your AngularJS service will use this to update a saved todo in the database

		* `*` (get) - will load your single HTML page in app/index.html. Make sure you put this after all other GET routes

	* The layout should include three AngularJS routes named `list`, `create` and `completed`.

		* **list** - shows all of the to-dos that are not completed and uses an AngularJS filter to display them in the "Overdue", "Due Today", and "Due Later" sections. Also, allows the user to check the box to "complete" the task.

		* **create** - provides a view for the user to be able to create a todo and save it in the database.

		* **completed** - shows all of the todo's that are completed and allows the user to un-check them to "un-complete" them
    
    * The to-do's themselves on the view should be a directive that is used on the `list` and `completed` state.

------------------------------------

### Bonus: Edit To-Do's

* Add the ability for a user to edit a to-do and save that to the database

-------
### One More Thing
If you have any questions about this project or about the material we covered, the instructor and your TAs are only a Slack message away.

**Good Luck!**

## Copyright
Coding Boot Camp (C) 2017. All Rights Reserved.
