---
sidebar_position: 11
---

# Security

Keeping your data, and your customer's data secure is our highest priority. With this in-mind, we require that the identity config is signed using a private key, so that we can verify the integrity and origin of the config.

### Setting up organisation key-pairs
To work securely with Vizzly, you'll first need to create a key pair and add it to your organisation. The private key will be stored on your servers, and you'll share the public key with Vizzly on the [public keys page of your dashboard](https://app.vizzly.co/organisation/key-pairs).

#### Generating the Elliptical Curve certificate
Vizzly provides a CLI tool, that allows you to generate the required certificates.

1. `npm i @vizzly/cli -g`
2. `vizzly create-key-pair`

You'll see the private and public certificates written to your current working directory.

The next step is saving the contents of your public key, (default file name is `vizzly-public.pem`) to your Vizzly account. You can do that on [the organisation key pairs page](https://app.vizzly.co/organisation/key-pairs).

### Generating the access tokens
See the [identity callback documentation](/callbacks/identity) for details on how to generate access tokens to authorize data and dashboard access.


### SSL termination

The query engine runs by default without SSL enabled. Therefore to deploy this securely, you will need to terminate SSL at a layer in-front of
the query engine, and then only allow traffic from this layer to reach the query engine. For example, on cloud providers you can terminate the SSL on the
load balancer and then setup security groups to only allow traffic from that load balancer to reach the query engine.

If you require terminating SSL on the query engine itself, please get in-touch.