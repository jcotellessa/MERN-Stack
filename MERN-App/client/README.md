This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

IBM Cloudant service credentials

{
"apikey": "PyRt7o3Nw9dbEkm5pnDRkOCpRo4y9cT40skR6-6utLUJ",
"host": "cf3098d3-0dc1-446c-a2a7-a9b1115f6b45-bluemix.cloudantnosqldb.appdomain.cloud",
"iam_apikey_description": "Auto-generated for key b4274ebf-6b55-4ef6-bac6-afe175e2dc24",
"iam_apikey_name": "Service credentials-1",
"iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
"iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/7f030e221b4140de85a5f724939af220::serviceid:ServiceId-39eeb45c-5bce-4568-aedb-83e3208d6b6f",
"password": "c9d8b0666e5c7e19e855fdc14a3c311c9d1b673a0cf2ebdb161e2b5586f8bdf5",
"port": 443,
"url": "https://cf3098d3-0dc1-446c-a2a7-a9b1115f6b45-bluemix:c9d8b0666e5c7e19e855fdc14a3c311c9d1b673a0cf2ebdb161e2b5586f8bdf5@cf3098d3-0dc1-446c-a2a7-a9b1115f6b45-bluemix.cloudantnosqldb.appdomain.cloud",
"username": "cf3098d3-0dc1-446c-a2a7-a9b1115f6b45-bluemix"
}

Start the DB first mongod

If there is a problem

Make sure there is a data/db folder to store the data

mkdir -p /System/Volumes/Data/data/db
sudo chown -Rv <your_user_name> /System/Volumes/Data/data/db
sudo mongod --dbpath /System/Volumes/Data/data/db

Start the DB, thene the server then the Client

Also there may be problems and you will need to lookup host reset
