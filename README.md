
### Sign up for an API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

### Configure environment variables using dotenv package
	1. Install the dotenv package
	```
	npm install dotenv
	```
	2. Create a new `.env` file in the root of your project
	3. Fill the `.env` file with your API key like this:
	```
	MEAN_CLOUD_API_KEY=**************************


### To Run Project

**(Currently, prod mode allows you to see the results of the API fetch)**:
- cd into your new folder and run in prod mode 
- `npm install`
- `npm run build-prod to generate a dist folder for prod`
- `npm run start to run the Express server on port 8087`

**Note:** The web page can be accessed with `localhost:8081`

. Open browser at http://localhost:8081/