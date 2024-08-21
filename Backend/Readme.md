## Step 1: Creating the nodejs express app
1. Install Node.js: If you haven’t already, download and install Node.js from nodejs.org.
2. Initialize the Project:
mkdir my-express-api
cd my-express-api
npm init -y

This will create a package.json file with default settings.

3. Install Express:
npm install express

4. Create the index.js file. Inside this we will define the express server, API endpoints
5. Run the express server

Add this line under the script section inside the package.json file
"start": "node index.js",

Then to run the program use following command
npm start

## Connecting postgres DB
1. Install postgres package
npm install pg

2. Create the database and user table in the postgres database
User
userId
username
password
email
