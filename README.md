# **Budget**

### Specification Deliverable
#### **Elevator Pitch:** 

Does budgeting and finances feel daunting? The Budget Tracker is perfect for college students because it is user friendly, efficient, and will create financial awareness. Budget Tracker will allow users to become their own masters and take control of their expenses. Users can input budget price goals and actual amounts for income and expenses in each category. Understanding and managing expenses will allow college students to begin developing financial freedom and independence early on!



#### **Design:**

![Budget Design Layout](https://github.com/danapug/startup/assets/156227779/b7c1059b-f87d-4c8f-85e7-92dfd65619cb)


	 	 	 


#### **Key Features:**

• Secure login over HTTPS

• Display of budget categories

• User input for each category

• Displays the dollar variance between expected and actual for each category

• Displays a motivational quote about budgets and saving

• Realtime leaderboard scores posted based on savings and income percentage 






#### **Technologies:**

• **HTML -** Uses correct HTML structure for application. Two HTML pages. One for login and one for budgeting. 
 
• **CSS –** An appealing and user-friendly budget application with proper font, color choice, and contrast. 
 
• **JavaScript -** Provides login, category display, user input for goal and actual amount budgeted, and displays a leaderboard percentage of how well the user stayed within budget in regards to the other users (will not show monetary value, but instead be a percentage based on income and staying within budget).
 
• **Service -** Backend service with endpoints for login, retrieving input for each budget category, and retrieving motivational quotes about budgeting from another service/website.
	
• **DB/Login -** Store users, user's budget goals, and user's actual amount spent in the database. Register and login users. Credentials securely stored in database. The user can't use the budget tab until they sign-in.
 
• **WebSocket -** As each user fills out the budget, a savings percentage in regards to how well they stayed within budget will be broadcast to other users.
 
• **React -** Application ported to use the React web framework.


