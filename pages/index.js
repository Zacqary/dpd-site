import { useEffect, useRef, useState } from 'react';

import Head from 'next/head';
import Image from 'next/future/image';
import Script from 'next/script';
import styles from '../styles/Home.module.css';

import dpdBWPhoto from '../public/img/DPD-Bw-photo.jpg';
import dpdTextLogo from '../public/img/DPDTextLogo.png';
import acabAlbumArt from '../public/img/ACAB-Art.jpg';
import neverErasedArt from '../public/img/NeverErased.jpg';

import zacAboutPhoto from '../public/img/IMG_2485.jpg';
import jonAboutPhoto from '../public/img/IMG_2339.jpg';
import joeAboutPhoto from '../public/img/IMG_2625.jpg';

import molotovTee from '../public/img/MolotovTee.jpg';
import molotovTank from '../public/img/MolotovTank.jpg';
import pronounsTank from '../public/img/PronounsTank.jpg';
import pronounsTee from '../public/img/PronounsTee.jpg';
import badDogTee from '../public/img/BadDog-TShirt.jpg';
import badDogTank from '../public/img/BadDog-Tank.jpg';
import boneFlagTee from '../public/img/BoneFlagTee.jpg';
import pinkFlagTee from '../public/img/PinkBoneFlagTee.jpg';
import molotovHoodie from '../public/img/MolotovHoodie.jpg';

import Socials from '../components/socials';
import useIsInViewport from '../components/useIsInViewport';

const scrollRoutes = ['about', 'music', 'merch', 'shows'];

export default function Home({ hash }) {
  const [aboutRef, isAboutInViewport] = useIsInViewport();
  const [musicRef, isMusicInViewport] = useIsInViewport();
  const [merchRef, isMerchInViewport] = useIsInViewport();
  const [showsRef, isShowsInViewport] = useIsInViewport();
  const [currentHash, setCurrentHash] = useState(hash);
  const hashRef = useRef(hash);
  const scrollLock = useRef(false);

  const NavLink = ({ href, children }) => {
    return (
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          window.history.replaceState({}, '', `/${href}`);
          setCurrentHash(href);
        }}
      >
        {children}
      </a>
    );
  };

  useEffect(() => {
    const el = document.getElementById(currentHash);
    if (scrollRoutes.includes(currentHash) && el) {
      scrollLock.current = true;
      el.scrollIntoView();
      setTimeout(() => (scrollLock.current = false), 1000);
    }
    hashRef.current = currentHash;
  }, [currentHash]);

  useEffect(() => {
    if (scrollLock.current) return;

    const states = [isAboutInViewport, isMusicInViewport, isMerchInViewport, isShowsInViewport];
    if (states.every((s) => s === false)) {
      if (hashRef.current) {
        hashRef.current = undefined;
        window.history.replaceState({}, '', `/`);
      }
      return;
    }
    if (states.filter(Boolean).length === 1) {
      const newHash = scrollRoutes[states.indexOf(true)];
      hashRef.current = newHash;
    } else {
      const visibleRoutes = scrollRoutes.filter((_, i) => states[i] === true);
      const newRoute = visibleRoutes[0];
      hashRef.current = newRoute;
    }

    window.history.replaceState({}, '', `/${hashRef.current}`);
  }, [isAboutInViewport, isMusicInViewport, isMerchInViewport, isShowsInViewport]);

  return (
    <div className={styles.home}>
      <Head>
        <title>Dog Park Dissidents</title>
        <meta name="description" content="Queer punk rock in puppy hoods" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1 style={{ zIndex: 1 }}>
          <Image alt="Dog Park Dissidents" src={dpdTextLogo} />
        </h1>
        <section>
          <Image alt="" src={dpdBWPhoto} className={styles.coverimg} />
        </section>
        <Socials className={styles.headerSocials} />
      </header>
      <nav>
        <ul>
          <li>
            <NavLink href="about">About</NavLink>
          </li>
          <li>
            <NavLink href="music">Music</NavLink>
          </li>
          <li>
            <NavLink href="merch">Merch</NavLink>
          </li>
          <li>
            <NavLink href="shows" replace>
              Shows
            </NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <section>
          <div className={styles.sectionBody}>
            <h2>Out Now</h2>
            <div className={styles.albumGrid}>
              <column>
                <a
                  href="https://dogparkdissidents.bandcamp.com/album/acab-for-cutie-ep"
                  target="_new"
                >
                  <Image alt="" src={acabAlbumArt} width={500} height={500} />
                </a>
                <h3>ACAB For Cutie</h3>
                <p>
                  The latest EP from Dog Park Dissidents, featuring{' '}
                  <strong>
                    <em>Pronouns</em>
                  </strong>{' '}
                  and{' '}
                  <strong>
                    <em>Class Struggle</em>
                  </strong>
                </p>
                <a
                  className={styles.buttonLink}
                  href="https://dogparkdissidents.bandcamp.com/album/acab-for-cutie-ep"
                  target="_new"
                >
                  Listen Now
                </a>
              </column>
              <column>
                <a href="https://www.say-10.com/store/never-erased-compilation/" target="_new">
                  <Image alt="" src={neverErasedArt} width={500} height={500} />
                </a>
                <h3>Never Erased</h3>
                <p>
                  Say-10 Records&apos;s new compilation of queer punk artists, featuring the new Dog
                  Park Dissidents track{' '}
                  <strong>
                    <em>S*xual</em>
                  </strong>
                </p>
                <a
                  className={styles.buttonLink}
                  href="https://www.say-10.com/store/never-erased-compilation/"
                  target="_new"
                >
                  Listen & Order
                </a>
              </column>
            </div>
          </div>
        </section>

        <section className={styles.aboutSection} id="about" ref={aboutRef}>
          <div className={styles.sectionBody}>
            <h2>About</h2>
            <div className={styles.aboutGrid}>
              <div>
                <div className={styles.aboutText}>
                  <p className={styles.aboutP}>
                    <strong>
                      <em>Dog Park Dissidents</em>
                    </strong>{' '}
                    are a queer punk rock band from New Orleans, Long Island, and Philadelphia.
                    Featuring <strong>Zac Xeper</strong> (he/they, vocals),{' '}
                    <strong>Jon Greco</strong> (he/him, guitar, vocals), and{' '}
                    <strong>Joe Bove</strong> (he/him, bass, vocals). They bend genres, genders, and
                    decency, blending old-school anarchist punk energy with contemporary pop punk
                    and flamboyant low camp. <strong>Also, they are dogs.</strong>
                  </p>
                  <p className={styles.aboutP}>
                    Since releasing their breakout viral single{' '}
                    <strong>
                      <em>Queer as in Fuck You</em>
                    </strong>{' '}
                    in 2017, Dog Park Dissidents has been gaying up the punk rock scene with their
                    high-energy, high-chaos live shows, 3 whirlwind scream-along EP releases, and
                    that one time they were almost going to play a show with Against Me! in March of
                    2020 but, you know, they had to cancel it for some reason, who knows why.
                    Currently signed to Say-10 Records for a forthcoming rerelease of their catalog
                    remixed and mastered by Reade Wolcott and Jack Shirley, the band is primed to
                    explode and shove their deviant lifestyle in mainstream rock&apos;s face,
                    frightening parents and causing widespread moral panic.
                  </p>
                </div>
              </div>
              <div className={styles.aboutImg}>
                <Image alt="" src={jonAboutPhoto} width={500} height={500} />
                <Image
                  alt=""
                  src={joeAboutPhoto}
                  className={styles.aboutImg3}
                  width={500}
                  height={500}
                />
                <Image
                  alt=""
                  src={zacAboutPhoto}
                  className={styles.aboutImg1}
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.musicSection} id="music" ref={musicRef}>
          <div className={styles.sectionBody}>
            <h2>Music</h2>

            <Socials className={styles.socials} hideNonMusic />
            <iframe
              src="https://open.spotify.com/embed/artist/3n7gyeQTlIwleoJFpOIMFp?utm_source=generator&theme=0"
              width="100%"
              height="380"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        </section>
        <section className={styles.merchSection} id="merch" ref={merchRef}>
          <div className={styles.sectionBody}>
            <h2>Merch</h2>
            <div className={styles.merchGrid}>
              <a
                href="https://dogparkdissidents.bandcamp.com/merch/dpd-molotov-pup-t-shirt"
                target="_new"
              >
                <Image src={molotovTee} alt="Molotov Pup T-Shirt" width={300} height={300} />
              </a>
              <a href="https://dogparkdissidents.bandcamp.com/merch/pronouns-t-shirt" target="_new">
                <Image src={pronounsTee} alt="Pronouns T-Shirt" width={300} height={300} />
              </a>
              <a
                href="https://dogparkdissidents.bandcamp.com/merch/dpd-molotov-pup-tanktop"
                target="_new"
              >
                <Image src={molotovTank} alt="Molotov Pup Tanktop" width={300} height={300} />
              </a>
              <a
                href="https://dogparkdissidents.bandcamp.com/merch/bad-bad-bad-dog-t-shirt"
                target="_new"
              >
                <Image src={badDogTee} alt="Bad Dog T-Shirt" width={300} height={300} />
              </a>
              <a
                href="https://dogparkdissidents.bandcamp.com/merch/dpd-bone-flag-t-shirt"
                target="_new"
              >
                <Image src={boneFlagTee} alt="Bone Flag T-Shirt" width={300} height={300} />
              </a>
              <a href="https://dogparkdissidents.bandcamp.com/merch/pronouns-tanktop" target="_new">
                <Image src={pronounsTank} alt="Pronouns Tanktop" width={300} height={300} />
              </a>
              <a
                href="https://dogparkdissidents.bandcamp.com/merch/dpd-pink-flag-t-shirt"
                target="_new"
              >
                <Image src={pinkFlagTee} alt="Pink Flag T-Shirt" width={300} height={300} />
              </a>
              <a
                href="https://dogparkdissidents.bandcamp.com/merch/bad-bad-bad-dog-tanktop"
                target="_new"
              >
                <Image src={badDogTank} alt="Bad Dog Tanktop" width={300} height={300} />
              </a>
              <a
                href="https://dogparkdissidents.bandcamp.com/merch/dpd-molotov-pup-zip-hoodie"
                target="_new"
              >
                <Image src={molotovHoodie} alt="Molotov Pup Hoodie" width={300} height={300} />
              </a>
            </div>
            <a
              href="https://dogparkdissidents.bandcamp.com/merch"
              target="_new"
              className={styles.buttonLink}
            >
              See all merch
            </a>
          </div>
        </section>
        <section className={styles.showsSection} id="shows" ref={showsRef}>
          <div className={styles.sectionBody}>
            <h2>Shows</h2>
            <a
              href="https://www.songkick.com/artists/10121947"
              className="songkick-widget"
              data-theme="dark"
              data-track-button="on"
              data-detect-style="true"
              data-background-color="transparent"
              data-locale="en"
            >
              Dog Park Dissidents tour dates
            </a>
            <Script src="//widget.songkick.com/10121947/widget.js" />
          </div>
        </section>
      </main>

      <footer>
        <Socials className={styles.socials} />
      </footer>
    </div>
  );
}
