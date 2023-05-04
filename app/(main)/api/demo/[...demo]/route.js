import { NextResponse } from 'next/server';
import DemoService from '@/service/DemoSerive';

export async function GET(req, { params }) {
	let demo = params.demo;
	if (!demo.length || demo.length < 2) {
		return NextResponse.json({ code: 404 });
	}

	let data = await DemoService.getJSON(...demo);
	return NextResponse.json(data);
}