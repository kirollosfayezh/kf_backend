---
title: UAE PASS integration: login and signing for your app
summary: How a UAE business adds UAE PASS login, signing or data sharing to its app: the four onboarding phases, account linking and the UX rules.
tag: Web Development
tags: UAE PASS, digital identity, OAuth 2.0, app integration, e-signature, UAE
order: 78
media: https://images.unsplash.com/photo-1733065108435-3789ed8faf55
alt: A man in a white kandura and ghutra talks on his phone outdoors on a sunny day
caption: UAE PASS lives on the user's phone, so signing in and signing documents can start with one confirmation there.
stats: 3|UAE PASS feature families: login, signing and eSeal, data sharing; 4|onboarding phases, from first request to go-live; 3|account levels, from SOP1 basic to SOP3 qualified
---

A private business in the UAE can add UAE PASS to its website or mobile app for login, for digital signatures and eSeals, and for user-approved data and document sharing. You apply as a service provider with a valid UAE trade licence, get your use case approved, build against the staging environment, pass an assessment, and only then receive production credentials. The technical part is standard OAuth 2.0; most of the work is in account linking and following the official user-journey rules.

Last checked: 6 November 2026

## What UAE PASS offers a private business

UAE PASS is the UAE's national digital identity, used to sign in to government services. The Ministry of Finance's Federal Supplier Register, for example, uses UAE PASS for sign-in. Adding it to your own app lets the same users sign in or sign documents without creating another password.

The official documentation lists three capabilities:

| Capability | Available to | Typical use in a private app |
|---|---|---|
| Authentication | Government and private organisations | "Sign in with UAE PASS" on a portal or mobile app |
| Digital signature and eSeal | Government and private organisations | Customers sign a contract or form; your company seals documents it issues |
| Data and document sharing | Private organisations only | With the user's consent, request a document held by another entity |

The documentation also covers web registration, facial biometric confirmation of transactions, and hash signing, where a document's hash is signed rather than the whole file. Each feature has its own questionnaire during onboarding, so decide early which ones you need.

## Before you apply: who is the service provider

The service provider is your business, not your developer. The onboarding team asks private entities for a valid UAE trade licence and guides you according to the emirate where you are registered. A software studio outside the UAE can build and test the integration, but the application, the agreement and the credentials belong to the licensed UAE company.

Prepare three things before you submit the request:

- **The features you want**: login only, or login plus signing, eSeal or data sharing.
- **A workflow diagram** of the user journey, based on the standard use cases in the official guidelines.
- **UI mock-ups (wireframes)** of every screen where UAE PASS appears.

Use cases that depart from the standard guidelines need management approval, which the documentation warns can extend the process. Designing around the standard scenarios is usually the faster route.

## The four onboarding phases

The documentation splits onboarding into four phases. Here is what happens in each, and who does it.

| Phase | Your side | The UAE PASS onboarding team |
|---|---|---|
| Initiation | Submit the request on the developer portal (entity type: private), fill in the feature questionnaires, send the workflow diagram and mock-ups | Asks for the trade licence, sends reference material, evaluates and approves the use case |
| Development | Integrate against staging, then ask for the staging assessment | Issues staging credentials, starts the Service Provider Agreement (an MOU for government entities) |
| Assessment | Fix any issues found, record videos of every tested scenario, sign the agreement | Runs the assessment against a checklist, a second round if needed, and gets management approval |
| Go-live | Submit the go-live form, build on production, tell them the go-live date | Issues production credentials, runs a production assessment, gives you service desk access for support |

Two practical points come out of this table. First, the redirect URL you register for staging must be a development or staging address; the production redirect URL is only needed after assessment sign-off. Second, client credentials are specific to a channel. Credentials approved for your website are not to be reused in your mobile app without the team's approval, so if you need both, include both in the use case from the start.

## How the login works technically

### Web applications

UAE PASS authentication is based on OAuth 2.0. Your app sends the user to the authorization endpoint, receives an authorization code on your redirect URL, exchanges it for an access token on your server, and then reads the user's profile from the user-info endpoint. Staging uses `stg-id.uaepass.ae` and production uses `id.uaepass.ae`, each with authorize, token, userinfo and logout endpoints.

For testing, developers and testers need a user on the staging environment and the staging UAE PASS app installed on a test device. When a user logs out of your portal, the documentation says you should also log them out of UAE PASS through its logout endpoint, with a redirect back to your site.

### Mobile apps

A mobile app needs extra steps, because the user confirms the login in the UAE PASS app on the same phone. In short, your app:

1. Registers its own custom URI scheme with the operating system.
2. Starts the OAuth flow in a WebView.
3. Intercepts the UAE PASS app's scheme, swaps the callback for your app's scheme and opens the UAE PASS app.
4. Receives the user back through your scheme and opens the original callback URL in the WebView.
5. Watches for your OAuth redirect URI, which marks the end of the login.

The documentation warns you to use your own scheme, not the demo app's, in both staging and production, or users can be sent to the wrong app. Sample apps exist for iOS and Android.

## Account levels and linking existing users

UAE PASS accounts come in three levels, which the documentation calls Strength of Profile (SOP):

- **SOP1, basic**: email and mobile verified by OTP, Emirates ID not verified. Limited services, and no document signing.
- **SOP2, advanced**: verified, with signing at the advanced level.
- **SOP3, qualified**: verified by biometrics, with signing at the qualified level.

For an SOP1 user, UAE PASS does not return the Emirates ID number, so your app must show a clear message instead of failing silently. State in your use case diagram which levels your service accepts.

The harder question is what happens when someone signs in with UAE PASS and you already have customers in your database. The guidelines describe three paths, and expect all three in the same release:

- **Automatic linking**: match a verified, unique attribute, such as a verified Emirates ID number, a verified unique email, or a verified email and mobile number together.
- **Manual linking**: ask the user to sign in once with their existing username and password (or answer security questions), then link the accounts.
- **New user registration**: pre-fill your sign-up form from the UAE PASS profile and ask only for the fields your business needs.

In every case you store the **UUID** that UAE PASS returns and use it for later sign-ins. Linking on email alone is not recommended, and linking a verified account with an unverified one (in either direction) is discouraged.

## UX rules the assessment checks, and your fallbacks

The onboarding team checks your journey against the standard implementation guidelines before approval, during the staging assessment and after go-live. The rules that most often change an existing app:

- **Keep the flows separate.** "Sign in with UAE PASS" must not be merged into your local login or registration flow.
- **No passwords in the UAE PASS journey.** Do not ask a new UAE PASS user to create a username and password, do not email them one, and do not offer a password change during UAE PASS sign-in.
- **The user starts the login.** Do not trigger UAE PASS authentication on the user's behalf.
- **Full journey, not a side feature.** UAE PASS users should reach the same services as local users. Using it only to update an email address, for example, is to be avoided.
- **Official buttons and messages.** Use the published button designs (English and Arabic versions exist) and follow the text message guidelines for errors.

Fallbacks follow from the same rules. Because the flows are independent, your existing login stays available for customers without a UAE PASS account. Plan clear screens for the cases that will happen: an SOP1 user where you need a verified ID, a user who cancels in the UAE PASS app, and a returning customer whose details do not match any account. Each one needs a next step, not an error code.

## Where KF Tech Solutions fits

We build web and mobile apps and the backends behind them, including API integrations with outside systems. For UAE PASS, that means the OAuth flow on your server, the mobile app-to-app handover, account linking against your existing customer data, and the screens and mock-ups your use case submission needs. The application and the agreement stay in your company's name. We work with businesses in Egypt and the Gulf, and you can see how we approach integrations in [Connecting the systems you already run](/blog/api-integration-connecting-business-systems) and our [API and backend service](/services/api-and-backend).

## Common questions

### Can a private company use UAE PASS?

Yes. Authentication and digital signature or eSeal are available to government and private organisations, and data and document sharing is available to private organisations only. Private entities need a valid UAE trade licence to start onboarding.

### Can a developer outside the UAE do the integration?

The developer can build and test it, but the service provider applying for onboarding is the UAE-licensed business. Credentials, the Service Provider Agreement and the go-live approval are issued to that business.

### Is UAE PASS the same as OpenID Connect login?

The web integration is based on OAuth 2.0 with authorize, token, userinfo and logout endpoints, and the mobile requirements mention OAuth 2.0 or OpenID Connect. What makes it different is the approval process and the user-journey rules on top.

### Do we have to remove our existing login?

No. The guidelines require the UAE PASS flow to be independent of your local login, so your current sign-in remains for users who do not use UAE PASS.

### How long does onboarding take?

The documentation does not give a fixed time. It depends on how quickly your use case is approved, how many assessment rounds you need, and whether your journey follows the standard use cases. Non-standard cases need extra approval.

### Should we add UAE PASS to an app we have not built yet?

If your users are UAE residents, plan for it from the first version, because linking rules shape your user table. If you are still testing the idea, read [Have an app idea? Start small with an MVP](/blog/mobile-app-mvp-egypt), and see what drives the [cost of an app in the UAE](/blog/app-development-cost-uae). More for UAE businesses is on our [UAE page](/uae).

If you want UAE PASS in your website or app, [tell us what you are building](/contact) or [book a free call](/book), and we will map the onboarding and the integration with you.

## Sources

- [UAE PASS documentation: overview and capabilities](https://docs.uaepass.ae)
- [UAE PASS: onboarding process for service providers](https://docs.uaepass.ae/getting-onboarded-with-uae-pass/onboarding-process-for-uae-pass-service-providers)
- [UAE PASS: user account types](https://docs.uaepass.ae/quick-start-guide-uae-pass-staging-environment/user-account-types)
- [UAE PASS: web integration endpoints](https://docs.uaepass.ae/feature-guides/authentication/web-application/endpoints)
- [UAE PASS: mobile integration requirements](https://docs.uaepass.ae/feature-guides/authentication/mobile-application/requirements)
- [UAE PASS: user linking](https://docs.uaepass.ae/feature-guides/authentication/user-linking)
- [UAE PASS: standard implementation guidelines](https://docs.uaepass.ae/guidelines/use-cases/standard-implementation-guidelines)
- [UAE PASS: button guidelines](https://docs.uaepass.ae/guidelines/design-guidelines/uaepass-button-guideline)
- [Ministry of Finance: Federal Supplier Register](https://mof.gov.ae/en/public-finance/government-procurement/federal-supplier-register/)
