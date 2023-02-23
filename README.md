## Getting Started
Before running the development server, make sure to install the dependencies by running the following command:
```bash
npm i
```
Next, create a .env.local file at the root directory of the project, and add the necessary environment variables:

```bash
GOOGLE_ID="google client id"
GOOGLE_SECRET="google client secret"
GITHUB_ID="github client id"
GITHUB_SECRET="github client secret"
MONGO_URL="mongodb database url"
```
Make sure to replace the values of these variables with your own credentials.

Once the environment variables are set up, you can start the development server by running the following command:
```bash
npm run dev
# or
yarn dev
```
This will start the server and you can access your application by visiting http://localhost:3000 in your web browser.
