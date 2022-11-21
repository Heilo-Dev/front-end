import axios from "axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  session: {
    strategy: "jwt",
  },
  providers: [
    // ...add more providers here
    CredentialsProvider({
      name: "Credentials",
      credentials: {},

      async authorize(credentials) {
        const data = credentials as {
          email: string;
          password: string;
        };
        const res: any = await axios
          .post("https://heilo-services.onrender.com/api/v1/user/login", data)
          .then((data) => data)
          .catch((error) => error);

        if (res) {
          // Any object returned will be saved in `user` property of the JWT
          return {
            id: res.data.data.user._id,
            email: res.data.data.token,
            name: res.data.data.user.name,
          };
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          // throw new Error(res.response.data.error);
          return null;
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
