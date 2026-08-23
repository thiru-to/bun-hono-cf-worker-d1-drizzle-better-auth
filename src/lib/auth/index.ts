import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { betterAuth } from "better-auth";
import {sendEmail} from "@/lib/email";
import db from "../../db";
import { account, session, user, verification } from "../../db/schema/auth";


const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const appleClientId = process.env.APPLE_CLIENT_ID;
const appleClientSecret = process.env.APPLE_CLIENT_SECRET;



export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",
		schema: { user, session, account, verification },
	}),

	emailAndPassword: {
		enabled: true,
		requireEmailVerification: true,
		sendResetPassword: async ({ user, url, token }, request) => {
            void sendEmail(
                user.email,
                "Reset your password",
                `Click the link to reset your password: ${token} ${url}`,
            );
        },
	},
	socialProviders: {
		...(googleClientId && googleClientSecret
			? {
					google: {
						clientId: googleClientId,
						clientSecret: googleClientSecret,
					},
				}
			: {}),
		...(appleClientId && appleClientSecret
			? {
					apple: {
						clientId: appleClientId,
						clientSecret: appleClientSecret,
					},
				}
			: {}),
	},

	emailVerification: {
		sendOnSignUp: true,
		autoSignInAfterVerification: true,
		sendVerificationEmail: async ({ user, url }) => {
			sendEmail(
				user.email,
				"Verify your email address",
				`Click the link to verify your email: ${url}`,
			);
		},
		async beforeEmailVerification(user, request) {
			console.log(user, request);
		},
		async afterEmailVerification(user, request) {
			console.log(user, request);
		},
	},

	session: {
		cookieCache: {
			enabled: true,
			maxAge: 5 * 60, // Cache duration in seconds
		},
	},

	rateLimit: {
		enabled: true,
		window: 60, // time window in seconds
		max: 5, // max requests in the window
	},

	advanced: {
		cookiePrefix: "aing-auth-",
	},
});

export type AuthType = {
	user: typeof auth.$Infer.Session.user | null
	session: typeof auth.$Infer.Session.session | null
  }