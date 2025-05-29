import { Amplify } from 'aws-amplify';

Amplify.configure({
    Auth: {
        region: process.env.NEXT_PUBLIC_COGNITO_REGION || 'us-east-2',
        userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || '494c6554-df1f-4bf0-9dc1-2f2364a0841a',
        userPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID || '37d133d1-66d3-c495-352e-907e12f33198',
        mandatorySignIn: true
    },
    API: {
        endpoints: [
            {
                name: 'SageMakerAPI',
                endpoint: process.env.NEXT_PUBLIC_SAGEMAKER_ENDPOINT || 'aigov-endpoint-1748448103',
                region: 'us-east-2'
            }
        ]
    }
});
