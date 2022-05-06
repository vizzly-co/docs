---
title: 'Supported field types in CSV uploads'
excerpt: 'Discover what formats we support for certain data types in the CSV upload.'
date: '2022-05-06T09:00:00.000Z'
author: James Bowers
ogImage:
  url: '/images/logo.svg'
---

As a CSV doesn't provide the data types of each field, in Vizzly we predict the field types based on what we can parse.

Currently the rules are strict, but are working on expanding these rules. If there's a format you'd like us to support, please let us know.

## Date Times
- ISO 8601
- MM/DD/YYYY hh:mm
- YYYY-MM-DD

## Date
- ISO 8601
- YYYY/MM/DD

## Time
- ISO 8601

## Decimal
We currently only support decimals with a `.` deliminator. Thousands separators are currently not supported. For example `3,000.45` is not supported, but `3000.45` is.

Only numeric characters and `.` are allowed to correctly parse a float.

## Integer
Only numeric characters are allowed to correctly parse an integer. If non-numeric characters are found, then we'll treat this as a string.

## String
This is the default field type for any field we cannot parse.