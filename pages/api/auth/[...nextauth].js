import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import db from '../../../lib/dbConnect'
import User from '../../../models/user'



export default NextAuth({
    providers: [
        CredentialsProvider({
            type: "credentials",
            async authorize(credentials) {
                await db.connect();
                try {
                    let user = await User.findOne({ email: credentials.email });
                    if (!user) {
                        throw new Error("Invalid credentials");
                    }
                    let isMatch = await bcrypt.compare(
                        credentials.password,
                        user.password
                    );
                    if (!isMatch) {
                        throw new Error("Invalid credentials");
                    }
                    return {
                        id: user_id,
                        email: user.email,
                    }
                } catch (error) {
                    throw new Error("Invalid credentials");
                } finally {
                    await db.disconnect()
                }



            },
        })
    ],
    pages: {
        signIn: "/auth/signIn"
    }
})