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
  };
```

### Finding parameters
To find your `organisationId` and `initialDashboard` values, see the [parameters](/parameters) doc.

### Integrity signature
For help with signing the identity config and generating the `integritySignature` value, please see the [security docs](/security) for generating the private and public keys, as well as [this nextJs example identity callback](https://github.com/vizzly-co/library-examples/blob/50091b6451da18b7fd159593a8d73c233a4c5259/examples/next-js/pages/api/identity.js#L37-L45).