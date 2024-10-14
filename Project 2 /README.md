

## React Quiz App Documentation

This project demonstrates how to build a simple quiz game using React, AWS Amplify, and Amazon Cognito for user authentication. It covers setting up the environment, creating the React app, adding authentication, implementing quiz functionality, and deploying to AWS with CI/CD.

### Project Overview

The React quiz app allows users to register, log in and take a simple quiz. 

*   The app uses **Amazon Cognito** for user registration and sign-in.
*   The quiz questions and answers are **hardcoded** within the application.
*   The app is built with **React** and utilizes **AWS Amplify** for deployment and CI/CD.

### Setting Up the Environment

1.  **Install Node.js:** Download and install Node.js from [nodejs.org](https://nodejs.org/).
2.  **Install Amplify CLI:** Use the following command in your terminal to install the Amplify CLI:

    ```bash
    npm install -g @aws-amplify/cli
    ```

   
3.  **Configure Amplify:** Run the command `amplify configure` to configure the CLI with your AWS account. This involves:
    *   Signing in to the AWS console.
    *   Selecting your AWS region.
    *   Creating an IAM user with **AdministratorAccess-Amplify** policy.
    *   Entering the access key ID and secret access key for the created IAM user.
    *   Creating an AWS profile on your local machine.

### Creating the React App

1.  **Create React App:** Use the following command to create a new React app:

    ```bash
    npx create-react-app my-quiz-app
    ```

    Replace `my-quiz-app` with your desired app name.
2.  **Navigate to App Directory:** Change your working directory to the newly created React app folder:

    ```bash
    cd my-quiz-app
    ```

   
3.  **Initialise Amplify Project:** Run the command `amplify init` within the React app directory to initialise an Amplify project. This involves:
    *   Providing a name for your Amplify project.
    *   Confirming the default configuration settings.
    *   Selecting your AWS profile.

### Adding Authentication

1.  **Add Authentication:** Run the command `amplify add auth` to add authentication using Amazon Cognito.
2.  **Configure Authentication:** Select the default configuration and choose email as the sign-in method.
3.  **Deploy Authentication:** Run the command `amplify push` to deploy the authentication settings to AWS.
4.  **Install Amplify UI Libraries:** Install the necessary libraries to integrate the authentication UI into your React app:

    ```bash
    npm install aws-amplify @aws-amplify/ui-react
    ```

   
5.  **Update `App.js`:** Import necessary components and configure your app to use the Amplify Authenticator component.

### Implementing Quiz Functionality

1.  **Create Quiz Components:** Create a `Quiz.js` component to handle the quiz logic and a `QuizData.js` file to store quiz questions and answers.
2.  **Import Quiz Component:** Import the `Quiz` component into your `App.js` file.

### Deploying to AWS with CI/CD

1.  **Create GitHub Repository:** Create a new GitHub repository for your project.
2.  **Push Local Code to GitHub:** Initialise a Git repository in your project directory, commit your changes, and push to the remote GitHub repository.
3.  **Connect Amplify to GitHub:** Navigate to the **Hosting Environments** section in the AWS Amplify console and connect your GitHub repository to Amplify.
4.  **Configure CI/CD:** Enable full-stack CI/CD and create or select a service role that grants Amplify Hosting access to your AWS resources.
5.  **Deploy to Amplify:** Deploy your app to Amplify, which will build and deploy your app whenever changes are pushed to your GitHub repository.



