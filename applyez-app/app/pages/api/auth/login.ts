import type { NextApiRequest, NextApiResponse } from 'next'
import { signIn } from '@/auth'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { email, password } = req.body;
    const result = await signIn('credentials', { email, password });

    if (result?.error) {
      // Handle specific sign-in errors if returned by signIn function
      return res.status(401).json({ error: result.error });
    }

    res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Login error:', error);
    
    if (error.type === 'CredentialsSignin') {
      res.status(401).json({ error: 'Invalid credentials.' });
    } else {
      res.status(500).json({ error: 'Something went wrong.' });
    }
  }
}
