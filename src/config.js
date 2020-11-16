const config = {
  s3: {
    REGION: 'us-east-2',
    BUCKET: 'notes-app-upload-test1234',
  },
  apiGateway: {
    REGION: 'us-east-2',
    URL: 'https://uark9ol3fa.execute-api.us-east-2.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'us-east-2',
    USER_POOL_ID: 'us-east-2_qMYqAh7W1',
    APP_CLIENT_ID: '1smlsm5iarajave54fkvo1m9g3',
    IDENTITY_POOL_ID: 'us-east-2:51b50401-485c-4a3d-9ad7-aaa85b4b6eea',
  },
};
