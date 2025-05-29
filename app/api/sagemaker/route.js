import { NextResponse } from 'next/server';

export async function GET() {
    try {
        // Placeholder for SageMaker API call
        const response = { data: [] };
        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
