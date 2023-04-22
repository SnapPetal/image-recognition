const cdk = require("aws-cdk-lib");
const { ImageRecognitionStack } = require("../lib/image-recognition-stack");

const app = new cdk.App();
new ImageRecognitionStack(app, "ImageRecognitionStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
