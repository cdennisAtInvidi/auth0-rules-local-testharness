# What is it?

The *auth0-rules-local-testharness* library provides an easy way to deploy, execute, and test the output of Auth0 Rules using a local
 sandbox environment. It is very simple to use, and requires under 5 minutes to get started testing your Auth0 Rules! 

See here for further documentation on [Auth0 Rules](https://auth0.com/docs/rules).

Depending on your needs there are several pragmatic ways to test Rules without resorting to actually deploying and executing
them in a webtask sandbox environment. One solution is to use the [webtask runtime](https://github.com/auth0/webtask-runtime).
Doing this offers a series of components that replicate the behaviour of the runtime component of https://webtask.io.

However, sometimes you just want to execute your Rule against the same sandbox environment it will be deployed to at runtime in
Auth0, and test everything works as expected. You may also wish to write your Rules using a test driven development approach, and gain real feedback as you code - this is where this npm module can help.  It actually takes your Rule script, and any `user`, `context` and `callback` you give it, then spins up a local vm, executes your Rule passing the results to the provided callback, and finally tears the environment down again.

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, among others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a free Auth0 Account

1. Go to [Auth0](https://auth0.com/signup) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
