# Create React App

[Create React App (CRA)](https://github.com/facebook/create-react-app) is a popular set of tools used to setup and maintain a React project. This guide is all about getting started with it!

#### 1. Setup the CRA project with Vizzly.

```shell
npx create-react-app my-vizzly-app && \
cd my-vizzly-app && \
yarn add @vizzly/dashboard
```

#### 2. Adding the react component

Replace the `src/App.js` file with;

```jsx
import React from "react";
import Vizzly from "@vizzly/dashboard";

function App() {
  return (
    <Vizzly.Dashboard
      type="self-hosted"
      vizzlyDockerImageEndpoint={"<< Your query engine endpoint >>"}
      identityCallback={async () => {
        throw new Vizzly.NewVizzlyImplementation();
      }}
    />
  );
}

export default App;
```

#### 3. Run it

To run the project, execute the following CLI command in your shell

```
yarn start
```

Once done, a page in your web browser will open, where you will see a welcome message from us, and details on the next steps.
