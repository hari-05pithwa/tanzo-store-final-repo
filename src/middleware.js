// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware();

// export const config = {
//   matcher: [
//     "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
//   ],
// };

// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// const isAdminRoute = createRouteMatcher(['/admin(.*)']);

// export default clerkMiddleware(async (auth, req) => {
//   if (isAdminRoute(req)) {
//     const session = await auth();
    
//     // Replace with your actual email address
//     const adminEmail = "your-email@example.com"; 
    
//     if (!session.userId || session.sessionClaims?.email !== adminEmail) {
//        return NextResponse.redirect(new URL("/", req.url));
//     }
//   }
// });

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";









// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// const isAdminRoute = createRouteMatcher(['/admin(.*)']);

// export default clerkMiddleware(async (auth, req) => {
//   if (isAdminRoute(req)) {
//     const session = await auth();
    
//     // This looks for the "email" field in the JWT template we created
//     const userEmail = session.sessionClaims?.email;
//     const adminEmail = "haripithwa2005@gmail.com".toLowerCase();
//     // DEBUG: Check your VS Code terminal to see this output
//     console.log("Attempting admin access. Email found in session:", userEmail);

//     // const adminEmail = "haripithwa2005@gmail.com"; 

//     if (!session.userId || userEmail !== adminEmail) {
//        console.log("Access Denied. Redirecting to home.");
//        return NextResponse.redirect(new URL("/", req.url));
//     }
    
//     console.log("Access Granted to Admin.");
//   }
// });

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };
















// middleware.js
// middleware.js






import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  '/', 
  '/sign-in(.*)', 
  '/sign-up(.*)', 
  '/explore(.*)', 
  '/product(.*)',
  '/api(.*)' 
]);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect(); // Use 'await' if you are on Next.js 15
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};