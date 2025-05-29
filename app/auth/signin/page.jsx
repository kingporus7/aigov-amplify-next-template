'use client';

import { useState } from 'react';
import { Amplify } from 'aws-amplify';
import awsconfig from '../../src/config/amplify-config';

// Initialize Amplify
Amplify.configure(awsconfig);

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async () => {
        try {
            await Amplify.Auth.signIn(email, password);
            window.location.href = '/';
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h1>Sign In</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignIn}>Sign In</button>
            {error && <p>{error}</p>}
        </div>
    );
}
