import { Tab, Tabs } from "nextra-theme-docs";

# Setting up the Vizzly Config

The Vizzly config contains information about the connection to your database, and defines the data sets to make available to your users.

To make this process simple, we'll use the Vizzly CLI.

#### Install the Vizzly CLI

```
npm i @vizzly/cli -g
```

#### Create the private & public certificates

```
vizzly create-key-pair
```

#### Create the Vizzly config file

<Tabs items={["Postgres", "MariaDb", "BigQuery", "Elasticsearch"]}>
<Tab>

```
vizzly init-config -i postgres
```

</Tab>

<Tab>

```
vizzly init-config -i mariadb
```

</Tab>
<Tab>

```
vizzly init-config -i bigquery
```

</Tab>

<Tab>

```
vizzly init-config -i elasticsearch
```

</Tab>
</Tabs>

#### Use SQL to build your data set

Manually specifying all the fields to make available in your data set can be a time consuming and error-prone exercise.
This is why the `data-set-from-sql` Vizzly command exists, and converts a basic SQL statement into the Vizzly data set format
that you can copy into your Vizzly config.

<Tabs items={["Postgres", "MariaDb", "BigQuery", "Elasticsearch"]}>
<Tab>

```
vizzly data-set-from-sql -i postgres \
-s \
'SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;'
```

</Tab>

<Tab>

```
vizzly data-set-from-sql -i mariadb \
-s \
'SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;'
```

</Tab>
<Tab>

```
vizzly data-set-from-sql -i bigquery \
-s \
'SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;'
```

</Tab>

<Tab>

```
vizzly data-set-from-sql -i elasticsearch \
-s \
'SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;'
```

</Tab>
</Tabs>

You can then copy the JSON output that represents a Vizzly data set into the `dataSets` array in your Vizzly config file.
Remember, after making changes to the config file, we recommend validating the config by running;

```
vizzly validate
```
