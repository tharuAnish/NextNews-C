import { NextResponse } from "next/server"

export default function middleware(request) {
  console.log(request)
  return NextResponse.next()
}
