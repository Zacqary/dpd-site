import Image from 'next/future/image';

import spotifyIcon from '../public/img/spotify.webp';
import appleIcon from '../public/img/apple.webp';
import bandcampIcon from '../public/img/bandcamp.webp';
import youtubeIcon from '../public/img/youtube.webp';
import instagramIcon from '../public/img/instagram.webp';
import twitterIcon from '../public/img/twitter.webp';
import facebookIcon from '../public/img/facebook.webp';

export default function Socials({ className, hideNonMusic = false }) {
  return (
    <div className={className}>
      <a
        href="https://open.spotify.com/artist/3n7gyeQTlIwleoJFpOIMFp?si=agID70CPQxip1otPp2-VuA"
        target="_new"
      >
        <Image alt="Spotify" src={spotifyIcon} height={60} width={60} />
      </a>
      <a href="https://music.apple.com/us/artist/dog-park-dissidents/1249880076" target="_new">
        <Image alt="Apple Music" src={appleIcon} height={60} width={60} />
      </a>
      <a href="https://dogparkdissidents.bandcamp.com" target="_new">
        <Image alt="Bandcamp" src={bandcampIcon} height={60} width={60} />
      </a>
      <a href="https://www.youtube.com/dogparkdissidents" target="_new">
        <Image alt="YouTube" src={youtubeIcon} height={60} width={60} />
      </a>
      {!hideNonMusic && (
        <>
          <a href="https://www.instagram.com/dogparkdissidents" target="_new">
            <Image alt="Instagram" src={instagramIcon} height={60} width={60} />
          </a>
          <a href="https://www.twitter.com/dogparkdsdnts" target="_new">
            <Image alt="Twitter" src={twitterIcon} height={60} width={60} />
          </a>
          <a href="https://www.facebook.com/dogparkdissidents" target="_new">
            <Image alt="Facebook" src={facebookIcon} height={60} width={60} />
          </a>
        </>
      )}
    </div>
  );
}
