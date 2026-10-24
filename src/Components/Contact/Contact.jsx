import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <p className="section-eyebrow">LET'S TALK</p>

        <h2>
          Have an idea?
          <span>Let's talk.</span>
        </h2>
      </div>

      <div className="contact-content">
        <p className="contact-description">
          Whether you're exploring a product idea, looking for the right
          ingredients or simply want to discuss a business opportunity,
          I'd be happy to hear from you.
        </p>

        <div className="contact-action">
          <a
            href="mailto:lawalmatanmi@gmail.com"
            className="contact-link"
          >
            Get in touch
            <span>↗</span>
          </a>

          <div className="contact-details">
            <a href="mailto:lawalmatanmi@gmail.com">
              lawalmatanmi@gmail.com
            </a>

            <a
              href="https://linkedin.com/in/matanmi-lawal"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/matanmi-lawal ↗
            </a>

            <a href="tel:08132610052">
              0813 261 0052
            </a>
          </div>
        </div>
      </div>

      <footer className="contact-footer">
        <p>MATANMI LAWAL</p>

        <p>R&D · PRODUCT DEVELOPMENT · TECHNICAL SALES</p>

        <p>© 2026</p>
      </footer>
    </section>
  );
}

export default Contact;
