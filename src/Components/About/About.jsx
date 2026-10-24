import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-header">
        <p className="section-eyebrow">ABOUT MATANMI</p>

        <h2>
          There’s more to the
          <span>work than the work.</span>
        </h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p className="about-lead">
            I enjoy understanding how things work, solving problems and
            finding practical ways to turn ideas into something useful.
          </p>

          <p>
            My work has taken me from research and product development to
            technical sales, giving me a perspective that sits comfortably
            between technical thinking and real-world business needs.
          </p>

          <p>
            Outside of work, I enjoy music and play the guitar. It is one of
            the ways I relax, stay curious and connect with people beyond
            the technical side of what I do.
          </p>
        </div>

        <div className="about-aside">
            <div className="about-detail">
                <span>—</span>
                <p>CURIOUS BY NATURE</p>
            </div>

            <div className="about-detail">
                <span>—</span>
                <p>TECHNICAL BY TRAINING</p>
            </div>

            <div className="about-detail">
                <span>—</span>
                <p>MUSICIAN AT HEART</p>
            </div>
            </div>
        </div>
    </section>
  );
}

export default About;