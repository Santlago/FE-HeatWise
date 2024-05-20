// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Delete the session cookie by setting the response header
  res.headers.set('Set-Cookie', 'session=; Max-Age=0; path=/; HttpOnly; Secure; SameSite=Lax');

  return res;
}

export const config = {
  matcher: '/empresa', // Apply middleware to the root path or adjust as necessary
};
