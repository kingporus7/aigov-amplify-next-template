import { CognitoIdentityProviderClient, SignUpCommand, InitiateAuthCommand } from '@aws-sdk/client-cognito-identity-provider';

const client = new CognitoIdentityProviderClient({
    region: process.env.NEXT_PUBLIC_COGNITO_REGION
});

export async function signUp(email, password) {
    const command = new SignUpCommand({
        ClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
        Username: email,
        Password: password,
        UserAttributes: [{ Name: 'email', Value: email }]
    });
    return client.send(command);
}

export async function signIn(email, password) {
    const command = new InitiateAuthCommand({
        AuthFlow: 'USER_PASSWORD_AUTH',
        ClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
        AuthParameters: {
            USERNAME: email,
            PASSWORD: password
        }
    });
    return client.send(command);
}
