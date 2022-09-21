---
sidebar_position: 1
---

# Identity Callback

The purpose of the identity callback is to securely identify the current user. This information will be signed with your private key, and validated with the public key you upload to Vizzly.

The callback is an async function that returns an identity config, the typescript definition of which is outlined below.

```tsx
type IdentityConfig = {
    // What data sets does this person
    // have access too? 

    // If strings are provided, then an additional callback is required.
    dataSets?: (string | DataSet)[];

    /*
      This is your Vizzly organisation ID, we provide this to you.
    */
    organisationId: string;

    /*
      A unique reference to the current user. For example a unique 
      user ID, that you don't mind being publicly viewable.
    */
    userReference: string;

    /*
      This is the ID of the dashboard you want the user to be shown
      when they first land on your page.
    */
    initialDashboard: string;

    /*
      A signature that ensures all other attributes
      haven't been tampered with, and originates
      from your servers and hasn't been spoofed.
    */
    integritySignature: string;

    secureFilters: {
      [dataSetId: string]: {
        // Corresponds to the `publicField` set in the data set config.
        field: string;

        // The operation of the filter
        op: ">"
            | "<"
            | "="
            | ">="
            | "<="
            | "is_one_of"
            | "is_not_one_of"
            | "starts_with"
            | "ends_with"
            | "contains_substring"
            | "does_not_contain_substring";

        // The value to compare the field too.
        value: any;
      }[];
    };
  };
```

### Finding parameters
To find your `organisationId` and `initialDashboard` values, see the [parameters](/parameters) doc.

### Controlling data set access
If you're running the Vizzly query engine, the `dataSets` value of the identity config is where you can control what data sets your
users have access too. For example, say you have 3 data sets defined in the configuration file of your Vizzly query engine, which have IDs
`das_1`, `das_2` and `das_3`, then you could return an identity config which only specifies `das_1` and `das_2` in the `dataSets` parameter, and
prevent the user from having access to the third data set.

### Multi-tenancy with secure filters
To secure access to your data sets, you must provide a list of secure filters for each data set that is available to the user. For example, say you have
a data set with an ID of `das_1`, and you want to only show users there own data from this data set, you might specify a `secureFilters` value of:

```ts
{
  secureFilters: {
    "das_1": [{
      field: "User ID",
      op: "=",
      value: 1
    }]
  }
  // ... rest of identity config
}
```

These secure filters will be signed and sent to the Vizzly query engine by the Vizzly react embed, where they will be validated using your organisation's public key and ensure that each user only ever has access to their own data.

### Public data set access
To define a data set which is available to all users in a non-multi-tenant environment, you'll need to explicitly define this by setting an empty list of secure filters for the data set. For example, if this public data set has an ID of `das_1`, then the `secureFilters` value will be defined as;
```ts
{
  secureFilters: { "das_1": [] },
  // ... rest of identity config
}
```

### Reducing impact of a private key compromise
If your private key becomes compromised, then one way to reduce the impact of this is to also [provide secure filters on your data sets defined in the config of your Vizzly query engine.](/deployment/self-hosted-query-engine#optional-secure-filters)

### Integrity signature
For help with signing the identity config and generating the `integritySignature` value, please see the [security docs](/security) for generating the private and public keys, as well as [this nextJs example identity callback](https://github.com/vizzly-co/library-examples/blob/50091b6451da18b7fd159593a8d73c233a4c5259/examples/next-js/pages/api/identity.js#L37-L45).