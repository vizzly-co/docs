# React

This guide sets up a very simple React application, with the Vizzly dashboard installed.

First, we need to install the Vizzly CLI

```
npm i @vizzly/cli -g
```

Next, we will run the command to initialize a react project in the `my-vizzly-frontend` directory.

```
vizzly init-frontend -t react -n my-vizzly-frontend
```

Then we will change directory into the project, install the dependencies and start the app.

```
cd my-vizzly-frontend && \
yarn install && \
yarn start
```

If successful, you will see a localhost URL in your terminal. If you visit that in your browser,
you will see a welcome message from us, and details on the next steps.
