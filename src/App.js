import React, { useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './App.css';

function App() {
  const vinylRef = useRef(null);

  useEffect(() => {
    window.history.replaceState(null, '', window.location.pathname);
    window.scrollTo(0, 0);

    const style = document.createElement('style');
    style.innerHTML = `
  html {
    scroll-behavior: smooth;
  }

  @keyframes riseFade {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
  nav {
    padding: 0.3rem 0.8rem !important;
  }

  nav h1 {
    font-size: 0.6em !important;
  }

  nav ul {
    flex-direction: row !important;
    gap: 0.8rem !important;
    font-size: 0.6rem !important;
  }

  h2 {
    font-size: 1.3rem !important;
  }

  p {
    font-size: 0.85rem !important;
  }

  section {
    padding: 3.5rem 1rem !important;
  }

  #home {
    flex-direction: column !important;
    justify-content: center !important;
    padding-top: 6rem !important;
    height: auto !important;
    min-height: 65vh !important;
  }

  #home > div {
    flex-direction: column 1important;
    gap: 1.5rem !important;
    align-items: center;
  }

  #home h2 {
    font-size: 1.5rem !important;
    white-space: nowrap !important;
  }

  #home p {
    font-size: 0.75rem !important;
    min-height: 4rem !important;
    display: inline-block !important;
    white-space: nowrap !important;
    overflow: hidden !important;
  }

  #home div img {
    width: 120px !important;
    height: 120px !important;
    margin-top: 1.2rem !important;
  }

  #home a img {
    width: 18px !important;
    height: 18px !important;
    margin-top: 2rem !important;
    margin-bottom: 1rem !important;
  }

  #projects div[id^="project-card"] {
    width: 100% !important;
  }

  #vinyl div {
    min-width: 130px !important;
    padding: 0.3rem !important;
    border-radius: 0.5rem !important;
  }

  #vinyl img {
    width: 60px !important;
    height: 60px !important;
    border-radius: 0.4rem !important;
    margin: 0 auto 0.4rem auto !important;
    display: block;
  }

  #vinyl h4 {
    font-size: 0.30rem !important;
    text-align: center !important;
  }

  #vinyl p {
    font-size: 0.45rem !important;
    text-align: center !important;
    color: #aaa !important;
  }

  #vinyl a img {
    width: 18px !important;
    height: 18px !important;
  }

  footer {
    font-size: 0.65rem !important;
  }
}
`;

    document.head.appendChild(style);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    const container = vinylRef.current;
    let scrollInterval;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (container) {
          container.scrollLeft += 0.2;
          if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
            container.scrollLeft = 0;
          }
        }
      }, 50);
    };

    const stopScroll = () => clearInterval(scrollInterval);

    container?.addEventListener('mouseenter', stopScroll);
    container?.addEventListener('mouseleave', startScroll);

    startScroll();

    return () => {
      stopScroll();
      container?.removeEventListener('mouseenter', stopScroll);
      container?.removeEventListener('mouseleave', startScroll);
    };
  }, []);

  return (
    <div style={{
      fontFamily: "'Courier Prime', monospace",
      backgroundColor: '#000',
      color: '#fff',
      minHeight: '100vh',
      scrollBehavior: 'smooth',
      position: 'relative',
      maxWidth: '100%',
      msOverflowX: 'hidden'
    }}>
      {/* nav */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: '#000', zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.7)' }}>
        <a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>
          <h1 style={{ fontSize: '1.0em', fontWeight: 'bold' }}>[axel.]</h1>
        </a>
        <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none' }}>
          <li><a href="#projects" style={{ color: '#ccc', textDecoration: 'none' }}>my work</a></li>
          <li><a href="#vinyl" style={{ color: '#ccc', textDecoration: 'none' }}>vinyls</a></li>
          <li><a href="#contact" style={{ color: '#ccc', textDecoration: 'none' }}>contact</a></li>
        </ul>
      </nav>

      {/* home */}
      <section id="home" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 2rem', position: 'relative' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4rem', alignItems: 'center' }}>
          <div style={{ maxWidth: '600px', textAlign: 'left', animation: 'riseFade 1s ease-out forwards', opacity: 0 }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 'bold' }}>[hi, i'm axel.]</h2>
            <p style={{ fontSize: '1.25rem', marginTop: '1rem' }}>
              i'm a{' '}
              <Typewriter
                words={["nerd", "cloud enthusiast.", "engineer/developer.", "vinyl collector.", "gamer."]}
                loop={true}
                cursor
                cursorStyle='|'
                typeSpeed={120}
                deleteSpeed={100}
                delaySpeed={500}
              />
            </p>
          </div>
          <div style={{ animation: 'riseFade 1.2s ease-out forwards', opacity: 0 }}>
            <img src="/vinyl-covers/newppic.jpg" alt="axelppic" style={{ width: '300px', height: '300px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #fff' }} />
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}>
          <a href="#projects">
            <img src="/assests/icons8-sort-down-30.png" alt="Scroll Down" style={{ width: '30px', height: '30px' }} />
          </a>
        </div>
      </section>

      {/* projects */}
      <section id="projects" style={{ padding: '8rem 2rem 6rem', minHeight: '70vh' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>my work.</h2>
          <span style={{ fontSize: '1rem', color: '#aaa', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            [my resume →
            <a href="/assests/Awey, Axel Resume.pdf" target="_blank" rel="noopener noreferrer" style={{ border: '1px solid #fff', color: '#fff', padding: '0.25rem 0.75rem', borderRadius: '5px', textDecoration: 'none', fontSize: '0.9rem', transition: 'all 0.3s ease' }}
              onMouseEnter={e => { e.target.style.backgroundColor = '#fff'; e.target.style.color = '#000'; }}
              onMouseLeave={e => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#fff'; }}>
              download resume
            </a>
           ]
          </span>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          <div id="project-card-1" style={{ backgroundColor: '#1a1a1a', padding: '1rem', borderRadius: '1rem', width: '300px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>RandPass Gen.</h3>
            <p style={{ color: '#aaa' }}>a python based Random Password Generator. it generates strong passwords with customizable length and character sets.</p>
            <a href="https://rand-pass-app.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="/assests/icons8-right-arrow-30.png" alt="Project Link" style={{ width: '20px', height: '20px', marginTop: '1rem' }} />
            </a>
          </div>

          <div id="project-card-2" style={{ backgroundColor: '#1a1a1a', padding: '1rem', borderRadius: '1rem', width: '300px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>cryptvault.</h3>
            <p style={{ color: '#aaa' }}>an application that gives users the ability to encrypt and decryot messages using various cryptographic algorithms.</p>
            <a href="https://cryptvault-web-app.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="/assests/icons8-right-arrow-30.png" alt="Project Link" style={{ width: '20px', height: '20px', marginTop: '1rem' }} />
            </a>
          </div>

          <div id="project-card-3" style={{ backgroundColor: '#1a1a1a', padding: '1rem', borderRadius: '1rem', width: '300px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>cloudPath advisor. [in progress..]</h3>
            <p style={{ color: '#aaa' }}>a tool to help developers or startups figure out the best cloud services/options for what they need.</p>
            <a href="https://cloud-path-advisor-in-progress.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="/assests/icons8-caution-48.png" alt="Project Link" style={{ width: '20px', height: '20px', marginTop: '1rem' }} />
            </a>
          </div>

          <div id="project-card-4" style={{ backgroundColor: '#1a1a1a', padding: '1rem', borderRadius: '1rem', width: '300px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>typetrack.</h3>
            <p style={{ color: '#aaa' }}>a keylogger app that logs keystrokes with the use of 'pynput' library along with a simple GUI using 'tkinter' & 'ttkbootstrap' to display real-time results.</p>
            <a href="https://github.com/axelawey/typetrack." target="_blank" rel="noopener noreferrer">
              <img src="/assests/icons8-github-30.png" alt="Project Link" style={{ width: '20px', height: '20px', marginTop: '1rem' }} />
            </a>
          </div>
        </div>
      </section>

      {/* vinyls */}
      <section id="vinyl" style={{ padding: '7rem 2rem 6rem', backgroundColor: '#000', minHeight: '90vh' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '100', margin: 0 }}>vinyl collection.</h2>
          <span style={{ fontSize: '1rem', color: '#aaa', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            [my playlists →
            <a href="https://music.apple.com/profile/yawawey" target="_blank" rel="noopener noreferrer">
              <img src="/assests/icons8-apple-music-50.png" alt="Apple Music" style={{ width: '22px', height: '22px' }} />
            </a>
            <a href="https://open.spotify.com/user/aweyyaw" target="_blank" rel="noopener noreferrer">
              <img src="/assests/icons8-spotify-50.png" alt="Spotify" style={{ width: '22px', height: '22px' }} />
            </a>
            ]
          </span>
        </div>
        
        <div
          ref={vinylRef}
          style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '1.5rem',
            paddingBottom: '1rem',
            scrollBehavior: 'smooth',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
          onMouseEnter={() => clearInterval(window.vinylScroll)}
          onMouseLeave={() => {
            window.vinylScroll = setInterval(() => {
              if (vinylRef.current) {
                vinylRef.current.scrollLeft += 0.3;
                if (vinylRef.current.scrollLeft + vinylRef.current.offsetWidth >= vinylRef.current.scrollWidth - 1) {
                  vinylRef.current.scrollLeft = 0;
                }
              }
            }, 20);
          }}
        >
          {[{
            title: 'Kendrick Lamar - DAMN.',
            img: '/vinyl-covers/DAMN.jpg',
            desc: '2017 | hip-hop/rap'
          }, {
            title: 'Tyler, The Creator - IGOR',
            img: '/vinyl-covers/IGOR.jpg',
            desc: '2019 | experimental'
          }, {
            title: 'Tyler, The Creator - WOLF',
            img: '/vinyl-covers/WOLF.jpg',
            desc: '2013 | hip-hop/alternative'
          }, {
            title: 'Tyler, The Creator - Call Me If You Get Lost',
            img: '/vinyl-covers/CMIYGL.jpg',
            desc: '2021 | hip-hop/rap'
          }, {
            title: 'Ella Fitzgerald - Stairway to the Stars',
            img: '/vinyl-covers/ELLA.jpg',
            desc: '1939 | jazz '
          }, {
            title: 'Billie Eillish - HIT ME HARD AND SOFT',
            img: '/vinyl-covers/HMAS.jpg',
            desc: '2024 | alternative | favorite: CHIHIRO.'
          }, {
            title: 'Kendrick Lamar - good kid, m.A.A.d city',
            img: '/vinyl-covers/GKMC.jpg',
            desc: '2012 | hip-hop/rap | favorite: The Art of Peer Pressure'
          }, {
            title: 'Mac DeMarco - 2',
            img: "/vinyl-covers/MAC2.jpg",
            desc: '2012 | alternative | favorite: Dreaming.'
          }, {
            title: "Clairo - Charm",
            img: "/vinyl-covers/CHARM.jpg",
            desc: '2024 | alternative | favorite: Second Nature.'
          }, {
            title: "Faye Webster - Underdressed at the Symphony",
            img: "/vinyl-covers/SYMPHONY.jpg",
            desc: "2024 | alternative | favorite: all"
          }, {
            title: "Madvillain - Madvillainy",
            img:"/vinyl-covers/villain.jpg",
            desc: "2003 | rap/boom bap | favorite: Figaro."
          }, {
            title: "Doechii - Alligator Bites Never Heal",
            img: "/vinyl-covers/doechi.jpg",
            desc: "2024 | hip-hop/rap | favorite: BULLFROG."
          }, {
            title: "Kali Uchis - Sincerely,",
            img: "/vinyl-covers/SINCERELY,.jpg",
            desc: "2025 | pop | favorite: N/A"
          }, {
            title: "Eem Triplin - Melody of a Memory",
            img: "/vinyl-covers/MOAM.jpg",
            desc: "2025 | alternative rap | favorite: Out Miami."
          }, {
            title: "Tyler, The Creator - Cherry Bomb",
            img:"/vinyl-covers/cherry.jpg",
            desc: "2015 | hip-hop/rap | favorite: F****** YOUNG/PERFECT."
          }, {
            title: "Faye Webster - I Know I'm Funny haha",
            img: "/vinyl-covers/haha.jpg",
            desc: "2021 | alternative | favorite: Sometimes. "
          }
        ].map((vinyl, index) => (
            <div key={index} style={{ backgroundColor: '#1a1a1a', padding: '1rem', borderRadius: '1rem', minWidth: '250px', flex: '0 0 auto' }}>
              <img src={vinyl.img} alt={vinyl.title} style={{ borderRadius: '0.5rem', marginBottom: '0.5rem', width: '100%' }} />
              <h4 style={{ fontWeight: 'bold' }}>{vinyl.title}</h4>
              <p style={{ color: '#aaa' }}>{vinyl.desc}</p>
            </div>
          ))}
        </div>
 
      </section>

      {/* contact */}
      <section id="contact" style={{ padding: '10rem 2rem 10rem', textAlign: 'center', minHeight: '50vh' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>let's get in touch.</h2>
        <p style={{ margin: '1rem 0' }}>find me on these platforms:</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <a href="https://www.linkedin.com/in/axelawey" target="_blank" rel="noopener noreferrer">
            <img src="/assests/icons8-linkedin-50.png" alt="LinkedIn" style={{ width: '30px', height: '30px' }} />
          </a>
          <a href="mailto:axelawey@gmail.com">
            <img src="/assests/icons8-gmail-50.png" alt="Gmail" style={{ width: '30px', height: '30px' }} />
          </a>
          <a href="https://www.discogs.com/user/axell." target="_blank" rel="noopener noreferrer">
            <img src="/assests/icons8-discogs-50.png" alt="Discogs" style={{ width: '30px', height: '30px' }} />
          </a>
          <a href="https://github.com/axelawey" target="_blank" rel="noopener noreferrer">
            <img src="/assests/icons8-github-50.png" alt="GitHub" style={{ width: '30px', height: '30px' }} />
          </a>
        </div>
      </section>

      <footer style={{
        textAlign: 'center',
        padding: '2rem 0',
        fontSize: '0.9rem',
        color: '#666',
        borderTop: '1px solid #222'
      }}>
        © {new Date().getFullYear()} axel. all rights reserved.
      </footer>
    </div>
  );
}

export default App;
