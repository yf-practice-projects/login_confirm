import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			id:"test",
			credentials: {
				username: {
					label: "Username:",
					type: "text"
				},
				password: {
					label: "Password:",
					type: "password"
				},
			},
			async authorize(credentials) {
				const user = { id: "32", name: "john", password: "pass" }
				try {
					if (credentials?.username === "test") {
						console.log("ok")
						return user
					}
				} catch (error) {
					console.log(error)
					return null
				}
				return null
				
				// if (credentials?.username === user.name) {
				// 	return user
				// } else {
				// 	return null;
				// }
			}
		})
	],
	pages: {
		signIn:"/"
	},
	secret:"aaa",
	session: {
		strategy:"jwt"
	},
	callbacks: {
		async redirect({ url, baseUrl }) {
			// ユーザーをサインイン後に別のページにリダイレクトさせたい場合
			// console.log(url)
			// console.log(baseUrl)
			// console.log("REDIRECT")
			return "/after";
		},
		async jwt({ token, user }) {
			console.log(token)
			console.log(user)
			console.log("jwt")
			// サインイン時、ユーザー情報がuserにセットされる
			try {
				if (user) {
					token.id = user.id;
				}
			} catch (error) {
				console.log(error)
			}

      return token;
    },
    async session({ session, token }) {
			// JWTトークンの内容をセッションに反映
			// console.log(session)
			// console.log(token)
			// console.log("session")
      // session.user!.id = token.id;
      return session;
    }
	}
	
}
