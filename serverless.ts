import type { AWS } from "@serverless/typescript";
import { getPeople, postFavorite, getFavorites } from "./src/functions/index";

const serverlessConfiguration: AWS = {
  service: "test-serverless-api",
  frameworkVersion: "3",
  plugins: [
    "serverless-esbuild",
    "serverless-offline",
    "serverless-aws-documentation",
  ],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
  },
  // import the function via paths
  functions: { getPeople, postFavorite, getFavorites },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node14",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
    "serverless-offline": {
      httpPort: 3000, // Puerto en el que se ejecutará la API localmente
    },
    documentation: {
      models: {
        favoriteId: "id favorite",
        name: "nombre del personaje",
        starship: "nave del personaje",
      },
    },
  },
  resources: {
    Resources: {
      TodosTable: {
        Type: "AWS::DynamoDB::Table",
        Properties: {
          TableName: "yourTableName",
          AttributeDefinitions: [
            {
              AttributeName: "favoriteId",
              AttributeType: "S",
            },
          ],
          KeySchema: [
            {
              AttributeName: "favoriteId",
              KeyType: "HASH",
            },
          ],
          ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1,
          },
        },
      },
    },
  },
};

module.exports = serverlessConfiguration;
