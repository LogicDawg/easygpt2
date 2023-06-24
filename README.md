# EasyGPT 

####To get everything started:  

psql < easygpt  
Run npm start on both server and client folder.  
local api is on port 3005.  

####Packages used in this project:  
#####Client-Side:  

react-router for routing and navigation.  
react-jwt for handling and creating jwt tokens.  
axios for making api calls with async and await.  
react-bootstrap for styling.  


#####Server-Side  
bcrypt for hashing passwords, and verifying.  
jsonchema to create form validation.  
openai to make api calls to OpenAI.  
pg to use postgresql with express.  
colors to give text color in Console. 



The Title of my site is: EasyGPT   
The url is: https://easygpt.onrender.com/  

EasyGPT has modules you can click on for easy AI prompts such as SQL queries, image generation and also essay writer. With a simple prompt the AI will kick out its best solution. Though I will say the images are quite hilarious!  

The website features a signup and login, to limit people unless they have a log in. I was then able to create protected routes to keep unauthorized visitors away.  With each module there is a simple form to keep user interaction to a minimum this was by design to make it as fast as possible for the end user to get the results they want. The modules I created are highly adaptable and more can be added relatively quickly.  


Tests can be found with the src files, these were created to test functionality. They were test using jest.  

Someone new to the site will want to sign up first. After signing up you will be brought to login page where you will sign in with your new credentials. Once logged in you will be brought to the home page, where you will have modules you can click on to do various AI tasks. You click the module of your choice and type in a description or prompt of what you want. Click submit and then shortly after you will recieve a response. Once back on the homepage any requests will be shown along with thier AI response.  

API is there to display the functionality of the app, I created a backened api with node for authentication and registration. This goes to a postegresql database.  

####For the technology used:   
React for the frontend.  
Node.js and Express.js for backend functionality.  
Postegresql for the database.  
For styling react-bootstrap  

The API calls made to the chatGPT are structured in a way to give the best results, minus the image generation becuase there is really no way to teach the AI about the image unless we do uploads and edits which cost more money. The chat generation can be taught with examples of what the user is looking for.