---
sidebar_position: 7
---

# Security

Keeping your data, and your customer's data secure is our highest priority. With this in-mind, we require that the identity config is signed using a private key, so that we can verify the integrity and origin of the config.

### Setting up organisation key-pairs
To work securely with Vizzly, you'll first need to create a key pair and add it to your organisation. The private key will be stored on your servers, and you'll share the public key with Vizzly on the [public keys page of your dashboard](/organisation/key-pairs).

#### Generating the Elliptical Curve certificate

First, run the following command to generate the private key:

```shell
openssl ecparam -name secp256r1 -genkey -noout -out ecprivkey.pem
```

This private key now located in `ecprivkey.pem` should be securely stored on your server. This private key will be used to sign the identity config to ensure its integrity and origin.

Next, we will create the public key that allows anyone to verify the identity config originated from your servers, and has not been tampered with. Let's generate it by running the following command:

```shell
openssl ec -in ecprivkey.pem -pubout -out ecpubkey.pem
```

The last step is saving the contents of `ecpubkey.pem` to the Vizzly servers. You can do that on [the organisation key pairs page](/organisation/key-pairs).

### Signing the identity config
If you're utilising JavaScript on your backend servers, you can use Vizzly's library to aid the signing of the identity config.
An example of how to achieve this [is provided in the Vizzly examples repository](https://github.com/vizzly-co/library-examples/blob/b947ec9dd6ef1b1a92cb6cd63f5c5e84ddf1cebd/examples/static-next-js/pages/api/identity.js#L21-L38).