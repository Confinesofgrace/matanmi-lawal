import "./Experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-intro">
        <p className="section-eyebrow">THE EXPERIENCE</p>

        <h2>
          From research
          <span>to business.</span>
        </h2>

        <p>
          A career shaped by understanding products, developing solutions,
          and helping businesses find what they need.
        </p>
      </div>

      <div className="experience-list">

        <article className="experience-item">
          <span className="experience-number">01</span>

          <div>
            <p className="experience-label">
              RESEARCH & DEVELOPMENT
            </p>

            <h3>From research to ideation</h3>

            <p>
              Product research, competitor analysis and development 
              within a major consumer products environment.
            </p>
          </div>
        </article>

        <article className="experience-item">
          <span className="experience-number">02</span>

          <div>
            <p className="experience-label">
              PRODUCT DEVELOPMENT
            </p>

            <h3>From idea to formulation</h3>

            <p>
              Experience contributing to bathing soaps, dishwashing 
              products, detergents and powder-form laundry products.
            </p>
          </div>
        </article>

        <article className="experience-item">
          <span className="experience-number">03</span>

          <div>
            <p className="experience-label">
              TECHNICAL SALES
            </p>

            <h3>From formula to implementation and sales</h3>

            <p>
              Helping businesses identify and source the chemicals 
              and ingredients they need.
            </p>
          </div>
        </article>

      </div>
    </section>
  );
}

export default Experience;