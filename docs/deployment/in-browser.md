---
sidebar_position: 1
---

# In-browser

Benefit from Vizzly's in-browser query engine, by fetching the user's data set when the dashboard first loads.

In some cases, the data set you'll want to make available to each of your customers will be small, and in such a case you can instruct the Vizzly React component to load the entirety of a data set into the browser. The Vizzly React component will then manage all of the queries on the client’s browser and therefore no further network calls or database queries will be made for each render of the chart.

## Examples
- [Next JS project](https://github.com/vizzly-co/library-examples/blob/c1906a671aab4c050e90e1c8bd4a489790d2545e/examples/static-next-js/pages/in-browser.jsx)

```jsx title="/src/Dashboard.jsx"
import { Components as Vizzly, VizzlyGlobalStyles } from '@vizzly/components';

export const RenderVizzlyStudio = () => (
  <>
    <VizzlyGlobalStyles />
    <Vizzly.LocalDataStudio
      loadDataCallback={async (dataSet) => {
        // TODO Your code to fetch the data set for
        // the current customer.

        const data = [
          {
            name: "James",
            age: 26,
            city: "London"
          },
          // ...
        ];

        return data;
      }}
      identityCallback={async () => {
        // TODO Your code to obtain the identity config the dashboard

        const identityConfig = {
          // ...
        };

        return identityConfig;
      }}
    />
  </>
);
```

## Multi-tenancy
To make this work in a multi-tenancy environment, the dataset that’s downloaded must only contain data for the currently active user.

As this download happens in a JS callback function, you're in complete control over how that happens, so long as you return the data in the format Vizzly requires.

## Limitations
The trade-off here is the initially blocking network call required to load all the data that’s available to a user for querying.

This option should only be used if the total size of the data sets are small, under 1MB.