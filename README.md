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



### HTML Deliverable
# <span style="border-bottom: 2px solid black;"></span>
• **HTML Pages -** Four HTML pages were created; home page, about page, budget page, and scoreboard page. HTML tags were used.

• **Links -** The home page (once you login) automatically links the user to the budget page. The budget page also has a submit button that will save all their information to the database, but it just brings them back to the budget tab for now.

• **Text -** The budget template and “About” page have a lot of textual descriptions.

• **Placeholder for 3rd party service calls -** Retrieved a saving quote from another service/website.

• **Images -** Uploaded an image from another website on my “About” tab. 

• **DB/Login -** Input box for a username and password and a submit button for login. The user’s data from the budget spreadsheet will be stored in the database.

• **WebSocket -** As the budget is used, a savings percentage based on how the user stayed within their budget will be broadcast on the scoreboard.


### CSS Deliverable
# <span style="border-bottom: 2px solid black;"></span>
• **Prerequisites -** Simon CSS deployed to my production environment. Link to my GitHub repository on the home page. Updated my README file.

• **Header, footer, and main content body -** Used the proper CSS styling breakdowns and used flex.

• **Navigation elements -** The tabs, links, and buttons change to a lighter color when you hover over it with your mouse. I removed hyperlink underlines.

• **Responsive to window resizing -** The app looks good on a desktop, ipad, and laptop. When you shrink and expand the webpage, the website properly adjusts.

• **Application elements -** Bootstrap was used; login and submit buttons. Used good margins, padding, colors, and whitespace.

• **Application text content -** Text is displayed with consistent font and similar color schemes and layouts throughout the different tabs.

• **Application images -** I added a border and curved edges around my photo on the about page.

### JavaScript Deliverable
# <span style="border-bottom: 2px solid black;"></span>
• **Prerequisites -** Simon JS deployed to my production environment. Link to my GitHub repository on the home page. Updated my README file.

• **Login -** When you enter your username and password it stores them in a key pair in the local storage and takes you to the budget page.

• **Database -** The user input data from the budgeted categories will be saved (the actual data values will not be because generally these values will vary month to month) in the local storage. This shows support for future database data.

• **WebSocket -** For now I have functions written using the local storage, to then insert the users into the scoreboard, but in the future this will be replaced with a websocket.

• **Application logic -** The app sends a message to the screen once the person has submitted their budget template. Outputs how much they saved compared to how much they spent.

### Service Deliverable
# <span style="border-bottom: 2px solid black;"></span>
•	**Node.js/Express HTTP service -** done!

•	**Static middleware for frontend -** done!

•	**Calls to third party endpoints –** Random photo API generator

•	**Backend service endpoints -** Placeholders for login that stores the current username on the server and will output a savings score for them using endpoints in my index.js file. 

•	**Frontend calls service endpoints -** I did this using the fetch function in my budget.js file which then connects to the backend service endpoint of outputting the username and percentage score on the scoreboard tab.

### Login Deliverable
# <span style="border-bottom: 2px solid black;"></span>
•	**MongoDB Atlas database created -** done!

•	**Stores data in MongoDB -** done!

•	**User registration -** Creates a new account in the database.

•	**Existing user –** Stores the budget scores under the same user if the user already exists.

•	**Use MongoDB to store credentials –** Stores both username and their scores.

•	**Restricts functionality –** You cannot do anything until you have logged in. 
