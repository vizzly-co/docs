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

### Signing the identity config
If you're utilising JavaScript on your backend servers, you can use Vizzly's library to aid the signing of the identity config.
An example of how to achieve this [is provided in the Vizzly examples repository](https://github.com/vizzly-co/library-examples/blob/90026e292e021172608a7262cbf40a4f737bac7e/examples/next-js/pages/api/identity.js#L30-L58).
