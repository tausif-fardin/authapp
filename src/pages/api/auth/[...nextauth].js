import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';
import connectMongo from '@/database/conn';
import Users from '@/model/Schema';
export default NextAuth({
  providers: [
    //google provider
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials, req) {
        connectMongo().catch((error) => {
          error: 'Connection failed';
        });

        const result = await Users.findOne({ email: credentials.email });
        if (!result) {
          throw new Error('No user found with this email');
        }

        const checkPassword = await compare(
          credentials.password,
          result.password
        );

        if (!checkPassword || result.email !== credentials.email) {
          throw new Error("username or password doesn't match");
        }
        return result;
      },
    }),
  ],
});
