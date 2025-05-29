import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = { data: [] }; // Placeholder for SageMaker API
        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
