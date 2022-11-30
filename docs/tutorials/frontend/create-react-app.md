---
sidebar_position: 1
---

# Create React App

To get started with the [Vizzly Dashboard](https://www.npmjs.com/package/@vizzly/dashboard) component, this tutorial will take you through using [Create React App (CRA)](https://github.com/facebook/create-react-app),
a very popular way of getting started with a React application.

### Prerequisites
To make the most of this tutorial, it's worth checking you've met these following prerequisites;

- A test private certificate [generated using the Vizzly CLI](/security), **which you do not intend to use in production**.
- The public key is uploaded to your Vizzly account [on the public keys page](https://app.vizzly.co/organisation/key-pairs).
- The Vizzly query engine is running with a valid Vizzly config and data sets you wish to make available.
- The public key for your test certificate is located in the Vizzly config.

#### 1. Setup the CRA project with Vizzly.
```shell
npx create-react-app my-vizzly-app && \
cd my-vizzly-app && \
yarn add @vizzly/dashboard
```

#### 2. Generate the test identity config
Use the `vizzly access-tokens` command to generate a temporary identity signature that you can use instead of
creating the identity config endpoint.

To see how to use this command, you can run;
```
vizzly access-tokens --help
```

You can find your dashboard ID and organization ID on the [live dashboards page of your account](https://app.vizzly.co/dashboards).

<details>
  <summary>Example `vizzly access-tokens` command</summary>

```sh
vizzly access-tokens \
  -o org_9817c013a80944... \
  -d dsh_42496c1c55e24b... \
  -u "user 123456" \
  -t editor \
  --private-key vizzly-private.pem
```
</details>


#### 4. Copy the identity config
Once you've ran the `access-tokens` command, you'll see the identity config JSON object printed out to the console.

You will then need to copy this JSON content and paste it into following code snippet, and save it to `src/App.js`.

***WARNING***
Be careful not to commit the identity config as it contains a signature that will provide access to your underlying data.
Ideally this will be generated using a development private/public key pair, and not the one you intend to run in production.

```jsx title='src/App.js'
import React from 'react';
import Vizzly from '@vizzly/dashboard';

// Generated using `vizzly access-tokens` CLI command.
const IDENTITY_CONFIG = {/*  Identity config. (JSON output from vizzly access-tokens CLI)   */ };

// Change this host to point wherever the Vizzly query engine is running.
// NOTE If you're running the query engine with a `VIZZLY_BASE_PATH` environment variable, then include that base path here too.
const VIZZLY_QUERY_ENGINE_ENDPOINT = 'http://0.0.0.0:8000';

function App() {
  return (
    <>
      <Vizzly.Dashboard
        type='self-hosted'
        vizzlyDockerImageEndpoint={VIZZLY_QUERY_ENGINE_ENDPOINT}
        identityCallback={async () => IDENTITY_CONFIG}
        />
    </>
  );
};

export default App;
```

#### 5. Run it

To run the app, from the base directory of the folder containing the CRA, execute the following command;

```
yarn start
```
