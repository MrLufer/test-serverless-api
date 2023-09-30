# Serverless - AWS Node.js Typescript

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).

For detailed instructions, please refer to the [documentation](https://www.serverless.com/framework/docs/providers/aws/).

## Installation/deployment instructions

Depending on your preferred package manager, follow the instructions below to deploy your project.

> **Requirements**: NodeJS `lts/fermium (v.14.15.0)`. If you're using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to ensure you're using the same Node version in local and in your lambda's runtime.

### Using NPM

- Run `npm i` to install the project dependencies
- Run `npx sls deploy` to deploy this stack to AWS

### Using Yarn

- Run `yarn` to install the project dependencies
- Run `yarn sls deploy` to deploy this stack to AWS


### Project structure

The project code base is mainly located within the `src` folder. This folder is divided in:

- `functions` - containing code base and configuration for your lambda functions
- `libs` - containing shared code base between your lambdas

```
.
my-serverless-project/
├── src/
│   ├── functions/
│   │   ├── handler/
│   │   │   ├── hello.ts       # Lambda function handler file
│   │   │   ├── goodbye.ts     # Lambda function handler file
│   │   │   └── ...
│   │   └── index.ts           # Import/export of all lambda configurations
│   │
│   ├── libs/
│   │   ├── apiGateway.ts      # API Gateway specific helpers
│   │   ├── handlerResolver.ts # Sharable library for resolving lambda handlers
│   │   ├── lambda.ts          # Lambda middleware
│   │   └── ...
│   │
│   ├── models/                 # Data models used by your application
│   │   ├── person.ts          # Person data model
│   │   ├── persona.ts         # Persona data model
│   │   ├── favorite.ts        # Favorite data model
│   │   └── ...
│   │
│   ├── services/
│   │   ├── index.ts           # Export all services from this file
│   │   └── ...
│   │
│   ├── index.ts               # Main entry point of your Serverless app
│   └── ...
│
├── serverless.ts              # Serverless service file
├── package.json
├── tsconfig.json              # TypeScript compiler configuration
├── tsconfig.paths.json        # TypeScript paths
└── webpack.config.js          # Webpack configuration
```

