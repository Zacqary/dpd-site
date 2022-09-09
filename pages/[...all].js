import { useRouter } from 'next/router';
import Home from './index';

export default function CatchAll() {
  const router = useRouter();
  const { all } = router.query;
  if (!all) return null;
  const [segment, ...rest] = all;
  if (segment === 'merch' && all.length > 1) {
    window.location = `https://dogparkdissidents.bandcamp.com/merch/${rest.join('/')}`;
    return null;
  }
  if (segment === 'track' && all.length > 1) {
    window.location = `https://dogparkdissidents.bandcamp.com/track/${rest.join('/')}`;
    return null;
  }
  if (segment === 'album' && all.length > 1) {
    window.location = `https://dogparkdissidents.bandcamp.com/album/${rest.join('/')}`;
    return null;
  }
  return <Home hash={segment} />;
}
