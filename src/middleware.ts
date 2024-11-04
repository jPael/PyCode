import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { apiAuthPrefix, authRoutes, defaultLoginRedirect, publicRoutes } from "./routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
	const { nextUrl } = req;
	const isLoggedIn = !!req.auth;

	const isAPIAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
	const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
	const isAuthRoutes = authRoutes.includes(nextUrl.pathname);

	if (isAPIAuthRoute) return null;

	if (isAuthRoutes) {
		if (isLoggedIn) return Response.redirect(new URL(defaultLoginRedirect, nextUrl));

		return null;
	}

	if (!isLoggedIn && !isPublicRoute) {
		return Response.redirect(new URL("/", nextUrl));
	}
});

export const config = {
	matcher: [
		// Skip Next.js internals and all static files, unless found in search params
		"/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
		// Always run for API routes
		"/(api|trpc)(.*)",
	],
};
