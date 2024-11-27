import { MetadataRoute } from 'next';
import { APP_NAME, YEAR } from '~/lib/config';

export const dynamic = 'force-static';

export function GET() {
  const data: MetadataRoute.Manifest = {
    name: APP_NAME,
    short_name: 'Taxe PFA',
    description: `Estimează rapid taxele PFA în pentru anul ${YEAR}`,
    start_url: '/',
    background_color: '#25262b',
    theme_color: '#25262b',
    display: 'standalone',
    orientation: 'portrait',
    lang: 'ro',
    icons: [{ src: '/icon.svg', sizes: 'any' }],
  };

  return Response.json(data, { headers: { 'Content-Type': 'application/manifest+json' } });
}
