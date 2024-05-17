// lib/definitions.ts

import { JWTPayload } from 'jose';

export interface SessionPayload extends JWTPayload {
  userId: string;
  expiresAt: Date;
  // Add more properties as needed based on your session payload requirements
}
