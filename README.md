Elevator Pitch 
	The budget tracker website is targeted to college students who are unaware of how much money they spend each week and specifically in what areas (food, activities, rent, tuition) they spend the most. This website will allow students to become their own masters and take control of their expenses to allow less stress in regards to finances. The app will allow them to input expenses in each major category and input their income. If the individual was successful at not spending more than they made, than a inspirational quote about saving money will appear and they will be placed somewhere on the leaderboard, if not they will get a quote on staying with in your means and not going in debt. The leaderboard scores will be calculated based on if you stayed with in your budget and if so, and how much money you put towards your savings based on your income (this will be a percentage). Understanding and managing your expenses and income will allow you to experience true financial freedom.

Design:

		 	 	 


Key Features:
•	Secure login over HTTPS
•	Display of budget categories
•	User input for each category
•	Displays the variance in dollars of expected and actual
•	Displays a motivational quote to keep saving


Technologies:
•	HTML - Uses correct HTML structure for application. Two HTML pages. One for login and one for budgeting. 
•	CSS – An appealing and user-friendly budget application with proper font, color choice, and contrast. 
•	JavaScript - Provides login, category display, user input for how much they wanted to budget and how much they actually did, and display how well they saved in regards to other people using the app (will not show monetary value, but instead be a percentage).
•	Service - Backend service with endpoints for:
    o	login
    o	retrieving input for each category
•	DB/Login - Store users, budget goal, and actual amount spent in database. Register and login users. Credentials securely stored in database. Can't use the budget until authenticated.
•	WebSocket - As each user fills out the budget, their overall savings percentage compared to their expenses and income are broadcast to all other users.
•	React - Application ported to use the React web framework.
