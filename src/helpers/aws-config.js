import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: 'AKIAZWCUWBVASOZX3TT7',
  secretAccessKey: '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',
  region: 'ap-south-1',
});

const s3 = new AWS.S3();
export default s3;

