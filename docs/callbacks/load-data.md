---
sidebar_position: 2
---

# Load Data Callback

This callback loads all the current user's data, for a data set. This data is then queried in the browser's memory, using Vizzly's in-browser query engine.

We strongly advise that this strategy is only used for small data sets, as the user will see a loading screen whilst this data is loaded.

The data returned from this callback, should be in the following format:

```ts
export type Result = {
  content: any[][];
  fields: {
    name: string;
    dataType: 'number' | 'boolean' | 'string' | 'date_time';
  }[];
};
```

```json
{
  "fields": [
    {
      "name": "Order ID",
      "dataType": "number"
    },
    {
      "name": "Order Date",
      "dataType": "date_time"
    },
    {
      "name": "Status",
      "dataType": "string"
    },
    // ...
  ],
  content: [
    [100354678, "2020-10-01", "received"],
    [100354679, "2020-10-02", "completed"],
    [100354680, "2020-10-03", "refunded"],
    // ...
  ]
}
```

An implementation of this can be seen in [the nextJS example repo](https://github.com/vizzly-co/library-examples/blob/b962329aa4e0d8ba3c49595e69120e1be8cdcfbb/examples/next-js/pages/in-browser.jsx#L14-L26).


### Multi-tenancy

As this strategy involves loading all the data that's available to a user into the browser, any required authorisation and authentication of access to the data will be done in this load data callback. All data returned from this callback will be available to the user.