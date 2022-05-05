---
title: 'What are secure filters on Vizzly?'
excerpt: 'Learn about securing your data with secure filters on Vizzly.'
date: '2022-05-04T09:00:00.000Z'
author: James Bowers
ogImage:
  url: '/images/logo.svg'
---

In some cases, your data set will contain sensitive information that can only be viewed by certain users.

Vizzly's secure filters lets you achieve this by marking some filters as "secure". A secure filter, is one that we'll check the field and operator are used in the query, and that it has been signed with your organisation's private key. [Learn more about organisation key pairs](/doc/organisation-key-pair).

When a component renders, and the `authEndpoint` property has been provided, we'll make a request to this endpoint that must return the signed filters in this format:

```typescript
{
  secureFilters: string[];
}
```

The array of strings will contain the signatures for each secure filter. We recommend using the Vizzly SDK to generate these signatures as it makes this as simple as:

```js
const field = "user_id";
const operator = "=";
const value = anAuthenticatedUserId;

const vizzAuth = VizzLib.auth({
  privateKey,
  ttlInMinutes: 60,
});

let securedFilter = await vizzAuth.signFilter({
  field,
  operator,
  value
});
```

A full example can [be seen on our examples repo on GitHub](https://github.com/vizzly-co/library-examples)