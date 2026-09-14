import { NextResponse } from "next/server";

// Simple in-memory storage (easily swapped with Supabase, MongoDB, Loops, or Resend)
const waitlistEmails: { email: string; timestamp: string }[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Check if already registered
    const exists = waitlistEmails.some((entry) => entry.email === normalizedEmail);
    if (!exists) {
      waitlistEmails.push({
        email: normalizedEmail,
        timestamp: new Date().toISOString(),
      });
      console.log(`[Work24x7.ai Waitlist] New signup: ${normalizedEmail}`);
    }

    return NextResponse.json({
      success: true,
      message: "You're on the priority waitlist! We'll notify you upon private beta access.",
    });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json(
      { error: "Failed to process request. Please try again." },
      { status: 500 }
    );
  }
}
