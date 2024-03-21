import { NextResponse } from 'next/server'

export default async function middleware() {
  const res = NextResponse.next()

  return res
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|_next/data|favicon.ico).*)'],
}
