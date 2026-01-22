import './App.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import About from './components/about';
import Projects from './components/Projects';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.main',
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: true,
          markers: true,
        },
      })
      .to('.image-container img', {
        scale: 1,
        z: 0.7,
        transformOrigin: 'center center',
        ease: 'power1.inOut',
      })
      .to(
        '.hero img',
        {
          scale: 1.1,
          transformOrigin: 'center center',
          ease: 'power1.inOut',
        },
        '<',
      );
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="star-bg">
          <div className="stars-sm" aria-hidden="true"></div>
          <div className="stars-md" aria-hidden="true"></div>
          <div className="stars-lg" aria-hidden="true"></div>
        </div>
        <main className="main">
          <div className="portfolio-container">
            <section className="hero">
              <img
                src="/src/assets/images/hero-image.webp"
                alt=""
                aria-hidden="true"
              />
              <h1 className="librebaskerville">
                <span>HANGIL'S</span>
                <span>PORTFOLIO</span>
              </h1>
            </section>
            <div className="portfolio-contents">
              <About />
              <Projects />
            </div>
          </div>
          <div className="image-container">
            <img
              src="/src/assets/images/circle-bg-3x.webp"
              alt=""
              aria-hidden="true"
            ></img>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
