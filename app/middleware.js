
import { NextResponse } from 'next/server'


const config = {
	matcher: ['/samples/:path*'],
}

export { config };

export default function middleware(request) {
	console.log(request);
	return new NextResponse(
		JSON.stringify({ success: false, message: 'authentication failed' }),
		{ status: 401, headers: { 'content-type': 'application/json' } }
	)
};