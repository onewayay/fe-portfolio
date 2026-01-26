import './App.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import About from './components/About';
import Projects from './components/Projects';
import PubProjects from './components/PubProjects';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.main',
          start: 'top top',
          end: '+=120%',
          pin: true,
          scrub: 1.2,
          id: 'heroPin',
          // markers: true,
        },
      })
      .to('.image-container img', {
        scale: 1,
        z: 0.9,
        duration: 2,
        transformOrigin: 'center center',
        ease: 'power1.inOut',
      })
      .to(
        '.hero img',
        {
          scale: 1.1,
          duration: 2,
          transformOrigin: 'center center',
          ease: 'power1.inOut',
        },
        '<',
      )
      .to(
        '.hero h1',
        {
          opacity: 1,
          bottom: '10%',
          duration: 2,
          ease: 'power1.inOut',
        },
        '<',
      )
      .to('header', {
        zIndex: 1,
      });
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('.move-item');
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            target.classList.add('active');
          } else {
            target.classList.remove('active');
          }
        });
      },
      {
        rootMargin: '-20% 0px -10% 0px',
        threshold: 0,
      },
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="star-bg">
          <div className="stars-sm" aria-hidden="true"></div>
          <div className="stars-md" aria-hidden="true"></div>
          <div className="stars-lg" aria-hidden="true"></div>
        </div>
        <main className="main">
          <div className="portfolio-container">
            <section className="hero">
              <img src="/images/hero-image.webp" alt="" aria-hidden="true" />
              <h1 className="librebaskerville">
                <span>HANGIL'S</span>
                <span>PORTFOLIO</span>
              </h1>
            </section>
            <About />
            <Projects />
            <PubProjects />
          </div>
          <div className="image-container">
            <img
              src="/images/circle-bg-3x.webp"
              alt=""
              aria-hidden="true"
            ></img>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
