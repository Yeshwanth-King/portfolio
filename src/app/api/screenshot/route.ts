import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    if (!url) {
        return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
    }

    try {
        // Use a free screenshot service (no API key required)
        const screenshotUrl = `https://api.screenshotlayer.com/api/capture?access_key=${process.env.SCREENSHOT_LAYER_KEY || 'demo'}&url=${encodeURIComponent(url)}&viewport=1200x800&format=PNG&fullpage=1`;

        const response = await fetch(screenshotUrl);

        if (!response.ok) {
            throw new Error(`Screenshot API error: ${response.status}`);
        }

        const imageBuffer = await response.arrayBuffer();

        return new NextResponse(imageBuffer, {
            headers: {
                'Content-Type': 'image/png',
                'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
            },
        });
    } catch (error) {
        console.error('Screenshot error:', error);

        // Return a fallback placeholder
        const fallbackUrl = `https://via.placeholder.com/600x400/1a1a1a/5237f9?text=Preview+Unavailable`;

        return NextResponse.redirect(fallbackUrl);
    }
}
