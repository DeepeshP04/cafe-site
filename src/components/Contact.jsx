import {
  ArrowUpRight,
  Camera as Instagram,
  Clock3,
  MapPin,
  Phone,
} from "lucide-react";
import "./Contact.css";
const directions =
  "https://www.google.com/maps/search/?api=1&query=12+Market+Road+Bengaluru+India";
export default function Contact() {
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="section-wrap">
        <div className="contact-heading">
          <p className="section-kicker">Come find your table</p>
          <h2 className="section-title" id="contact-title">
            Just around <em>the corner.</em>
          </h2>
        </div>
        <div className="contact-layout">
          <div className="contact-details">
            <div className="contact-block">
              <span className="contact-icon">
                <MapPin size={17} />
              </span>
              <div>
                <h3>Find us</h3>
                <p>
                  12 Market Road
                  <br />
                  Bengaluru, India
                </p>
                <a href={directions} target="_blank" rel="noreferrer">
                  Get directions <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
            <div className="contact-block">
              <span className="contact-icon">
                <Clock3 size={17} />
              </span>
              <div>
                <h3>When we're here</h3>
                <p>
                  Monday – Friday <span>7 am – 5 pm</span>
                  <br />
                  Saturday – Sunday <span>8 am – 4 pm</span>
                </p>
              </div>
            </div>
            <div className="contact-block">
              <span className="contact-icon">
                <Phone size={17} />
              </span>
              <div>
                <h3>Say hello</h3>
                <p>
                  <a href="tel:+919876543210">+91 98765 43210</a>
                  <br />
                  <a href="mailto:hello@astercafe.in">hello@astercafe.in</a>
                </p>
              </div>
            </div>
            <div className="contact-actions">
              <a
                className="button button--dark"
                href={directions}
                target="_blank"
                rel="noreferrer"
              >
                <MapPin size={15} />
                Get directions
              </a>
              <a className="contact-call" href="tel:+919876543210">
                <Phone size={15} />
                Call us
              </a>
            </div>
            <a
              className="contact-instagram"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={16} />
              Follow along on Instagram <ArrowUpRight size={13} />
            </a>
          </div>
          <div className="contact-map">
            <iframe
              title="Map showing Aster Café in Bengaluru, India"
              src="https://maps.google.com/maps?q=Bengaluru%2C%20India&t=&z=11&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-label">
              <span className="map-dot" />
              <span>
                <strong>Aster Café</strong>
                <small>12 Market Road · Bengaluru, India</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
