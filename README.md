# Deploy Basic Auth Example to Layer0

A demo deployment of Basic Auth Example app to Layer0.

## Demo

[rishi-raj-jain-yg-basic-auth-example-default.layer0-limelight.link](https://rishi-raj-jain-yg-basic-auth-example-default.layer0-limelight.link)

## Try It Now

[![Deploy with Layer0](https://docs.layer0.co/button.svg)](https://app.layer0.co/deploy?repo=https://github.com/rishi-raj-jain/basic-auth-example)

## Getting Started

### Clone This Repo

Use `git clone https://github.com/rishi-raj-jain/basic-auth-example.git` to get the files within this repository onto your local machine.

### Install dependencies

On the command line, in the project root directory, run the following command:

```bash
npm i
```

### Run the Basic Auth app locally on Layer0

Run the Basic Auth app with the command:

```bash
0 dev
```

Load the site: http://127.0.0.1:3000

### Testing production build locally with Layer0

You can do a production build of your app and test it locally using:

```bash
0 build && 0 run -p
```

Setting --production runs your app exactly as it will be uploaded to the Layer0 cloud using serverless-offline.

## Deploying to Layer0

Deploying requires an account on Layer0. [Sign up here for free](https://app.layer0.co/signup). Once you have an account, you can deploy to Layer0 by running the following in the root folder of your project:

```bash
0 deploy
```

See [deploying](https://docs.layer0.co/guides/deploying) for more information.