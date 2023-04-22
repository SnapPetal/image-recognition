const { Stack, Duration } = require('aws-cdk-lib');
const nodejs = require('aws-cdk-lib/aws-lambda-nodejs');

class ImageRecognitionStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    new nodejs.NodejsFunction(this, 'extract-image-metadata', {
      entry: './functions/extract-image-metadata/index.js',
    });

    new nodejs.NodejsFunction(this, 'rekognition', {
      entry: './functions/rekognition/index.js',
    });

    new nodejs.NodejsFunction(this, 'store-image-metadata', {
      entry: './functions/store-image-metadata/index.js',
    });

    new nodejs.NodejsFunction(this, 'thumbnail', {
      entry: './functions/thumbnail/index.js',
    });

    new nodejs.NodejsFunction(this, 'transform-metadata', {
      entry: './functions/transform-metadata/index.js',
    });
  }
}

module.exports = { ImageRecognitionStack }
