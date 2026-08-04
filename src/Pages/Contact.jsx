export default function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-hero">
        <div className="contact-content">
          <div className="contact-left">
            <h1>Contact Us</h1>

            <p>
              We'd love to hear from you! Whether you have questions about our
              products, need technical support, or want assistance with your
              order, our team is always ready to help.
            </p>

            <div className="contact-info">
              <div className="contact-card">
                <h3>📍 Address</h3>
                <p>123 Technology Street, Hue City, Vietnam</p>
              </div>

              <div className="contact-card">
                <h3>📞 Phone</h3>
                <p>+84 123 456 789</p>
              </div>

              <div className="contact-card">
                <h3>✉ Email</h3>
                <p>support@shoppy.com</p>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form">
              <div className="form-row">
                <input type="text" placeholder="Name (Required)" required />

                <input type="email" placeholder="Email (Required)" required />
              </div>

              <input
                type="text"
                placeholder="What product are you interested in? (Required)"
                required
              />

              <textarea rows="7" placeholder="Message" />

              <label className="contact-checkbox">
                <input type="checkbox" />

                <span>
                  By clicking submit, I agree to receive updates, promotions and
                  product information from Shoppy.
                </span>
              </label>

              <button type="submit">Get in Touch!</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
