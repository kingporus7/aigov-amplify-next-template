import { signIn } from '@/utils/cognito';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { email, password } = await request.json();
        const result = await signIn(email, password);
        const token = result.AuthenticationResult.IdToken;
        return NextResponse.json({ token }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
