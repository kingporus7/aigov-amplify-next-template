import { Amplify } from 'aws-amplify';

Amplify.configure({
    Auth: {
        region: process.env.NEXT_PUBLIC_COGNITO_REGION,
        userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID,
        userPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
        mandatorySignIn: true
    },
    API: {
        endpoints: [
            {
                name: 'SageMakerAPI',
                endpoint: process.env.NEXT_PUBLIC_SAGEMAKER_ENDPOINT,
                region: 'us-east-2'
            }
        ]
    }
});

export default Amplify;
