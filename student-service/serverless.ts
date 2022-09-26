import type { AWS } from '@serverless/typescript';

import functions from '@functions/index';
// import { lookupService } from 'dns';

const serverlessConfiguration: AWS = {
  service: 'student-serv',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild','serverless-deployment-bucket', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    profile: 'sls',
    //we are still on this stage it wil come end of your  URL
    stage : 'dev',
    
    // NAME the stack
    // why this important bz then aws will not generate any stack name for you. 
    stackName : '${self:service}-stack-${self:provider.stage}',
    apiName : '${self:service}-${self:provider.stage}',
    region : 'us-west-2',
    endpointType : 'regional',
    deploymentBucket:{
              name: 'student-serv',
    },
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      // create functions under environement variable
      DBHOSTNAME: 'student-service.cluster-cz2ospugur3f.ap-northeast-1.rds.amazonaws.com',
      DBPORT: '5432',
      DBNAME:'studentdb',
      DBUSERNAME:'postgres',
      DBPASSWORD : '12345678',
      DBSCHEMA: 'public',
      

    },
  },
  // import the function via paths
  functions: functions,
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk','pg-native'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  //   allowedHttpHeaders:
  //   'Accept,Authorization,Content-Type,Content-Length,x-api-key',
  },
};

module.exports = serverlessConfiguration;
