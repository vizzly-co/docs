---
title: 'What are secure filters on Vizzly?'
excerpt: 'Learn about securing your data with secure filters on Vizzly.'
date: '2022-05-04T09:00:00.000Z'
author: James Bowers
ogImage:
  url: '/images/logo.svg'
---

In some cases, your data set will contain sensitive information that can only be viewed by certain users.

Vizzly's secure filters lets you achieve this by marking some filters as "secure". This means that the when Vizzly receives a query with a secure filter, we'll check that the field and correct operator are used in the query, and has been signed with your organisation's private key. [Learn more about organisation key pairs](/doc/organisation-key-pair).

For example, you might have a table component, where you only want to show a particular user's data. Therefore you might define a secure filter which ensures that a filter is set on the `user_id` field, with the `=` operator. To securely sign this filter with a value, for example `usr_12345`, a request is made to your backend servers asking for the secure filters to be sent to Vizzly. It is on your server where you'll set the value of the `user_id` to filter.

Here is an example using the Vizzly components library, version 0.0.32.
```ts
import * as VizzLib from "@vizzly/components";

// DO NOT DO THIS IN YOUR APP!
// This is for example purposes only.
// Instead, you should store this securely.
const PRIVATE_KEY = `
-----BEGIN EC PRIVATE KEY-----
MHcCAQEEIA0BNHNTsZ/LqUuiqs4pg60itVs3ASfPB5fcUKRKq3GNoAoGCCqGSM49
AwEHoUQDQgAEGiAeatkVJPojPZ6CU8d+WA3jUkRbw/3ezbKiAa1gFcSXlhXDgNrx
zKcAS3PCBAo/cyN6UVn6dILucbgCTQrpcA==
-----END EC PRIVATE KEY-----
`;

const VIZZLY_QUERY_TTL = 60;

export default async function handler(req, res) {
  // TODO authenticate the user, and ensure they're
  // allowed access to the Isly region data.

  const vizzAuth = VizzLib.auth({
    privateKey: PRIVATE_KEY,
    ttlInMinutes: VIZZLY_QUERY_TTL,
  });

  const field = "Region";
  const operator = "=";
  const value = "Islay";
  let regionSecuredFilter = await vizzAuth.signFilter({
    field,
    operator,
    value,
  });

  res.status(200).json({ secureFilters: [regionSecuredFilter] });
}
```

For up-to-date examples of how you might do this, [feel free to take a look at our examples repo on GitHub](https://github.com/vizzly-co/library-examples)