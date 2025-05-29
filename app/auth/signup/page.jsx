'use client';

import { useState } from 'react';
import { Amplify } from 'aws-amplify';
import awsconfig from '../../src/config/amplify-config';

// Initialize Amplify
Amplify.configure(awsconfig);

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async () => {
        try {
            await Amplify.Auth.signUp({
                username: email,
                password,
                attributes: { email }
            });
            window.location.href = '/auth/signin';
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h1>Sign Up</h1>
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
            <button onClick={handleSignUp}>Sign Up</button>
            {error && <p>{error}</p>}
        </div>
    );
}
