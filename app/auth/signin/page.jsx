'use client';

import { useState } from 'react';
import { Auth } from 'aws-amplify';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async () => {
        try {
            await Auth.signIn(email, password);
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
