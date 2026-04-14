import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/', '/api/webhooks(.*)'])

export default clerkMiddleware(async (auth, req) => {
  const url = req.nextUrl
  const hostname = req.headers.get('host') || ''

  // Define allowed domains (localhost and your production domain)
  const allowedDomains = ['localhost:3000', '127.0.0.1:3000', 'yourdomain.com']
  const isAllowedDomain = allowedDomains.some(domain => hostname.includes(domain))

  // Extract subdomain (handle localhost and IPs by checking for dots)
  const hostParts = hostname.split('.')
  const isIp = hostParts.every(part => !isNaN(parseInt(part)))
  const isLocalhost = hostname.includes('localhost')
  
  const subdomain = (hostParts.length > 1 && !isIp && !isLocalhost) ? hostParts[0] : null

  // Rewriting logic
  // 1. Skip if the path already starts with /org or is a system route
  if (url.pathname.startsWith('/org') || url.pathname.startsWith('/api') || url.pathname.startsWith('/_next')) {
    return NextResponse.next()
  }

  // 2. Perform subdomain rewrite
  if (isAllowedDomain && subdomain && subdomain !== 'www' && subdomain !== 'app') {
    return NextResponse.rewrite(new URL(`/org/${subdomain}${url.pathname}`, req.url))
  }

  if (!isPublicRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
