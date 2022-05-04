---
title: 'Organisation key pairs on Vizzly'
excerpt: 'Learn about uploading your public key to use for secure filters'
date: '2022-05-04T09:00:00.000Z'
author: James Bowers
ogImage:
  url: '/images/logo.svg'
---

Organisation key pairs are used for Vizzly's secure filters feature.

To provide a secure filter to Vizzly, you'll first need to create a key pair. The private key will be stored on your servers, and you'll share the public key with Vizzly on the [public keys page of your dashboard](/organisation/key-pairs).

### Generating the Elliptical Curve certificate

First, run the following command to generate the private key:

`openssl ecparam -name secp256r1 -genkey -noout -out ecprivkey.pem`

This key should be securely stored on your server, and used when using the Vizzly library to sign the filters. [See more about that here](/doc/what-are-secure-filters).

Next, you need to create the public key that you'll upload to Vizzly. You can do this by running the following command:

`openssl ec -in ecprivkey.pem -pubout -out ecpubkey.pem`