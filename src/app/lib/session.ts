import 'server-only';
import { SignJWT, jwtVerify, JWTPayload } from 'jose';
import { SessionPayload } from '@/app/lib/definitions';
import { cookies } from 'next/headers';
import { getById } from '../actions/empresa/get-by-id';
import { redirect } from 'next/navigation';

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = ''): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    });
    return payload as SessionPayload;
  } catch (error) {
    console.log('Failed to verify session');
    return null;
  }
}

export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, expiresAt });

  cookies().set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  });
}

export async function getSession() {
  try {
    const cookieStore = cookies();
    const sessionCookie = cookieStore.get('session');

    if (!sessionCookie) {
      // No session cookie found
      return null;
    }

    const session = await decrypt(sessionCookie.value);

    if (!session || !session.userId) {
      // Invalid or incomplete session data
      return null;
    }

    const userId = session.userId;
    console.log(session);

    // If userId is a number, it must be asserted correctly
    if (typeof userId !== 'string' && typeof userId !== 'number') {
      throw new Error('Invalid userId type');
    }

    const user = await getById(userId as number);
    console.log(session.userId);
    return user;
  } catch (error) {
    console.error('Error retrieving session:', error);
    return null;
  }
}

export async function deleteSession() {
  cookies().delete('session');
}
