import { useEffect, useState } from "react";
import "./Hero.css";

const phrases = [
  "real-world solutions.",
  "product development.",
  "better products.",
  "business opportunities.",
];

function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((currentIndex) => {
        return (currentIndex + 1) % phrases.length;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">
          R&D · PRODUCT DEVELOPMENT · TECHNICAL SALES
        </p>

        <h1>
          I bring science to{" "}
          <span key={phraseIndex} className="hero-highlight">
            {phrases[phraseIndex]}
          </span>
        </h1>

        <p className="hero-description">
          With experience across R&D, product development and technical sales,
          I help businesses turn technical needs into practical solutions.
        </p>

        <a href="#experience" className="hero-link">
          Explore my experience <span>↗</span>
        </a>
      </div>

      <div className="hero-image">
        <img
          src="/images/matanmi.jpeg"
          alt="Matanmi Lawal"
        />
      </div>
    </section>
  );
}

export default Hero;