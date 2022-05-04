---
title: 'Installing Vizzly'
excerpt: 'Get started using Vizzly in your react app'
date: '2022-05-04T09:00:00.000Z'
author: James Bowers
ogImage:
  url: '/images/logo.svg'
---

Install the Vizzly components library, by running either
`yarn add @vizzly/components`
or
`npm install @vizzly/components`

in the directory where you `package.json` resides.

Then, use the Vizzly component builder to create your component. Once you've completed this, you can take the react code snippet and paste it into your project.

Here's an example of a Vizzly React component that render a table component.

```jsx
import {Table} from "@vizzly/components";

export default function() {
  return (
    <Table
      host="https://app.vizzly.co"
      componentId="cmp_5363be6938f040f9b398538be49bb874"
      fieldNaming={{
        age: 'Age',
        'house price': 'House Price',
        salary: 'Salary'
      }}
      fields={[
        'age',
        'salary',
        'house price'
      ]}
      sortBy={[
        {
          direction: 'desc',
          field: 'age'
        }
      ]}
      filters={[]}
    />
  );
};
```
__This example uses the Vizzly library version 0.0.33__

More up-to-date examples can be seen on our [storybook](https://vizzly-co.github.io/library-storybook), or in our [example projects](https://github.com/vizzly-co/library-examples).