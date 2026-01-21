import './App.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import About from './components/about';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.wrapper',
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
        '.section.hero',
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
      <div className="star-bg">
        <div className="stars-sm"></div>
        <div className="stars-md"></div>
        <div className="stars-lg"></div>
      </div>
      <div className="wrapper">
        <div className="portfolio-container">
          <section className="hero">
            <h1 className="librebaskerville">
              <span>HANGIL'S</span>
              <span>PORTFOLIO</span>
            </h1>
          </section>
          <div className="portfolio-contents">
            <About />
            <section className="section projects librebaskerville">
              projects
            </section>
          </div>
        </div>
        {/* <div className="image-container">
          <img
            src="/src/assets/images/circle-bg-3x.webp"
            alt="창문 너머로 바라보는 우주비행사 이미지"
          ></img>
        </div> */}
      </div>
    </>
  );
}

export default App;
