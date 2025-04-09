import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    { 
      status: 'ok',
      message: 'Setup endpoint is working'
    },
    { status: 200 }
  );
} 