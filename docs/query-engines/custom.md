---
sidebar_position: 10
---

# Custom

Roll your own query engine layer by transforming Vizzly queries into Vizzly formatted results.

If you have complex query or authentication requirements, you may prefer to roll your own API endpoint
to benefit from your existing authentication or query functionality.


## Examples
- [Next JS project](https://github.com/vizzly-co/library-examples/blob/c1906a671aab4c050e90e1c8bd4a489790d2545e/examples/static-next-js/pages/custom.jsx)

```typescript
import Vizzly from "@vizzly/dashboard";

<Vizzly.Dashboard
  type='custom'
  runQueriesCallback={async (queries) => {
    const response = await fetch('/api/create-results', {
      method: "post",
      body: JSON.stringify({ queries })
    });

    if(response.ok) {
      const results = await response.json();

      return results;
    } else {
      console.error('Failed to run query.');

      return null;
    }
  }}
  identityCallback={async () => {
    const response = await fetch("/api/identity");
    if(response.ok) {
      const identityConfig = await response.json();

      return identityConfig;
    };

    return null;
  }}
/>
```