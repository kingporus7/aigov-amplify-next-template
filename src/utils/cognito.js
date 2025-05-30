import { CognitoIdentityProviderClient, SignUpCommand, InitiateAuthCommand } from '@aws-sdk/client-cognito-identity-provider';

const client = new CognitoIdentityProviderClient({
    region: process.env.NEXT_PUBLIC_COGNITO_REGION || 'us-east-2'
});

const getClientId = () => {
    const clientId = process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID || 'amplifyAuthUserPoolAppClient2626C6F8ACTD5IHaLdCs';
    if (!clientId) {
        console.error('Environment variable NEXT_PUBLIC_COGNITO_CLIENT_ID is not set');
        throw new Error('Cognito Client ID is not defined');
    }
    console.log('Using Cognito Client ID:', clientId); // Debug
    return clientId;
};

export async function signUp(email, password) {
    try {
        const command = new SignUpCommand({
            ClientId: getClientId(),
            Username: email,
            Password: password,
            UserAttributes: [{ Name: 'email', Value: email }]
        });
        return await client.send(command);
    } catch (error) {
        console.error('SignUp error:', error);
        throw error;
    }
}

export async function signIn(email, password) {
    try {
        const command = new InitiateAuthCommand({
            AuthFlow: 'USER_PASSWORD_AUTH',
            ClientId: getClientId(),
            AuthParameters: {
                USERNAME: email,
                PASSWORD: password
            }
        });
        return await client.send(command);
    } catch (error) {
        console.error('SignIn error:', error);
        throw error;
    }
}
