import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
  '/',  // homepage
  '/sign-in(.*)', 
  '/sign-up(.*)',
  '/dashboard/(.*)', // Allow Clerk UI components to work in dashboard routes
])

export default clerkMiddleware(async (auth, request) => {
  // Public routes don't require authentication
  if (isPublicRoute(request)) {
    return;
  }
  
  // Admin login page is public but we may want to authenticate later
  if (request.nextUrl.pathname === "/") {
    return;
  }

  // Protect all other routes with authentication
  await auth.protect()
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}