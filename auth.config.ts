import CredentialsProvider from '@auth/core/providers/credentials'

export default {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        console.log("credentials", credentials)
        const authResponse = await fetch("/api/protected/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        })

        if (!authResponse.ok) {
          return null
        }

        const user = await authResponse.json()

        return user
      },
    }),
  ],
}
