import React from "react";
import "./main.css";

const Contact = () => {
  return (
    <>
      <div className="contact-page">
        <main className="main">
          {/* Contact Section */}
          <section id="contact" className="contact section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
              <h2>Contact</h2>
              <p>
                Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                consectetur velit
              </p>
            </div>
            {/* End Section Title */}
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
              <div className="row gy-4">
                <div className="col-lg-5">
                  <div className="info-wrap">
                    <div
                      className="info-item d-flex"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      <i className="bi bi-geo-alt flex-shrink-0" />
                      <div>
                        <h3>Address</h3>
                        <p>Ashokenagar, India, 743263</p>
                      </div>
                    </div>
                    {/* End Info Item */}
                    <div
                      className="info-item d-flex"
                      data-aos="fade-up"
                      data-aos-delay={300}
                    >
                      <i className="bi bi-telephone flex-shrink-0" />
                      <div>
                        <h3>Call Us</h3>
                        <p>+918918676538</p>
                      </div>
                    </div>
                    {/* End Info Item */}
                    <div
                      className="info-item d-flex"
                      data-aos="fade-up"
                      data-aos-delay={400}
                    >
                      <i className="bi bi-envelope flex-shrink-0" />
                      <div>
                        <h3>Email Us</h3>
                        <p>pronalhira1112@gmail.com</p>
                      </div>
                    </div>
                    {/* End Info Item */}
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25923.97596911621!2d88.79170999630162!3d23.05656080722983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff35b2b703623f%3A0xfa3b81f8f922ce3d!2sBangaon%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1753933395356!5m2!1sen!2sin"
                      frameBorder={0}
                      style={{ border: 0, width: "100%", height: 270 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <form
                    action="forms/contact.php"
                    method="post"
                    className="php-email-form"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <div className="row gy-4">
                      <div className="col-md-6">
                        <label htmlFor="name-field" className="pb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name-field"
                          className="form-control"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email-field" className="pb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email-field"
                          required
                        />
                      </div>
                      <div className="col-md-12">
                        <label htmlFor="subject-field" className="pb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          id="subject-field"
                          required
                        />
                      </div>
                      <div className="col-md-12">
                        <label htmlFor="message-field" className="pb-2">
                          Message
                        </label>
                        <textarea
                          className="form-control"
                          name="message"
                          rows={10}
                          id="message-field"
                          required
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-md-12 text-center">
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">
                          Your message has been sent. Thank you!
                        </div>
                        <button type="submit">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* End Contact Form */}
              </div>
            </div>
          </section>
          {/* /Contact Section */}
        </main>
      </div>
    </>
  );
};

export default Contact;
