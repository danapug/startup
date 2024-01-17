# **Budget**

### Specification Deliverable
#### **Elevator Pitch:** 

Are you stressed with budgeting and finances? The budget tracker website is perfect for college students who are unaware of how much money they spend each week . This app will allow students to become their own masters and take control of their expenses. Users can input budget price goals and actual amounts for income and expenses in each category. Understanding and managing your expenses will allow you to experience true financial freedom!



#### **Design:**

	![Budget Design Layout](https://github.com/danapug/startup/assets/156227779/92413e6a-c19f-4d4d-8aae-786a4fa26e24)

	 	 	 


#### **Key Features:**

• Secure login over HTTPS

• Display of budget categories

• User input for each category

• Displays the variance in dollars of expected and actual

• Displays a motivational quote to keep saving

• Realtime leaderboard scores posted based on savings and income percentage 






#### **Technologies:**

• **HTML -** Uses correct HTML structure for application. Two HTML pages. One for login and one for budgeting. 
 
• **CSS –** An appealing and user-friendly budget application with proper font, color choice, and contrast. 
 
• **JavaScript -** Provides login, category display, user input for how much they wanted to budget and how much they actually 				did, and display how well they saved in regards to other people using the app (will not show monetary value, but 			instead be a percentage).
 
• **Service -** Backend service with endpoints for login and retrieving input for each category.
	
• **DB/Login -** Store users, budget goal, and actual amount spent in database. Register and login users. Credentials securely 				stored in database. Can't use the budget until authenticated.
 
• **WebSocket -** As each user fills out the budget, their overall savings percentage compared to their expenses and income are 			broadcast to all other users.
 
• **React -** Application ported to use the React web framework.


