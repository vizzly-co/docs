---
sidebar_position: 2
---

# Self-hosted query engine

To make it easy to get started, Vizzly provides a docker image that when ran, will provide an endpoint that transforms Vizzly queries into Vizzly results. You will provide it read-only credentials to your underlying database, and it will run queries safely against your database. [Learn more about Vizzly security here](/security).

We're currently developing the docker image, and it will be delivered soon.

### Limitations

#### Large numbers
Currently, the self-hosted docker image supports a precision of up to `9007199254740991`. The accuracy of operations performed on numbers greater than this number may be incorrect.
