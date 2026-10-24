import { useState } from "react";
import "./Expertise.css";

const expertiseAreas = [
  {
    number: "01",
    title: "PRODUCT DEVELOPMENT",
    heading: "From idea to product.",
    description:
      "Experience working through product research, competitor analysis and the development of consumer products across soaps, detergents and other formulations.",
  },
  {
    number: "02",
    title: "CHEMICALS & INGREDIENTS",
    heading: "Finding what businesses need.",
    description:
      "Helping businesses identify and source the chemicals and ingredients required for their products, with an understanding of both technical requirements and commercial realities.",
  },
  {
    number: "03",
    title: "TECHNICAL CONSULTING",
    heading: "Connecting technical knowledge to business.",
    description:
      "Bringing together research, product development and commercial experience to help businesses think through technical needs and practical opportunities.",
  },
];

function Expertise() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="expertise" id="expertise">
      <div className="expertise-intro">
        <p className="section-eyebrow">WHAT I BRING TO THE TABLE</p>

        <h2>
          Technical knowledge.
          <span>Commercial understanding.</span>
        </h2>

        <p>
          Experience that sits at the intersection of science, products and
          business.
        </p>
      </div>

      <div className="expertise-list">
        {expertiseAreas.map((area, index) => (
          <button
            key={area.number}
            className={`expertise-item ${
              activeIndex === index ? "active" : ""
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
          >
            <div className="expertise-item-top">
              <span className="expertise-number">{area.number}</span>

              <span className="expertise-title">{area.title}</span>

              <span className="expertise-arrow">↗</span>
            </div>

            <div className="expertise-content">
              <h3>{area.heading}</h3>

              <p>{area.description}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

export default Expertise;