import { NextResponse, type NextRequest } from "next/server";

function localeFromPath(pathname: string) {
  if (pathname === "/fr" || pathname.startsWith("/fr/")) {
    return "fr";
  }

  if (pathname === "/nl" || pathname.startsWith("/nl/")) {
    return "nl";
  }

  return "en";
}

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(
    "x-buildmychatbot-locale",
    localeFromPath(request.nextUrl.pathname),
  );

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
