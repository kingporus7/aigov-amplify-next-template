import { signUp } from '@/utils/cognito';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { email, password } = await request.json();
        await signUp(email, password);
        return NextResponse.json({ message: 'Sign-up successful' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
