import { SessionStrategy } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
export const authOptions = {
  secret: process.env.NEXT_AUTH_SECRET || '',
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_AUTH_GOOGLE_ID || '',
      clientSecret: process.env.NEXT_AUTH_GOOGLE_SECRET || ''
    })
  ],
  callbacks: {
    async session({ session, token }: any) {
      return session;
    }
  },
  session: {
    strategy: 'jwt' as SessionStrategy
  }
};