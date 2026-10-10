import {
  ArrowUpRight,
  Camera as Instagram,
  Coffee,
  MapPin,
  Phone,
} from "lucide-react";
import "./Footer.css";
const links = [
  ["Home", "home"],
  ["Our story", "about"],
  ["Menu", "menu"],
  ["Gallery", "gallery"],
  ["Reviews", "reviews"],
  ["Visit us", "contact"],
];
const currentYear = new Date().getFullYear();
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main section-wrap">
        <div className="footer-brand-column">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">
              <Coffee size={19} />
            </span>
            <span className="brand-wordmark">
              aster<span>café</span>
            </span>
          </a>
          <p>
            A neighborhood café for carefully poured coffee, warm plates, and
            the good company in between.
          </p>
          <a
            className="footer-social"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Aster Café on Instagram"
          >
            <Instagram size={17} />
          </a>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <ul>
            {links.map(([label, id]) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h2>Say hello</h2>
          <ul>
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=12+Market+Road+Bengaluru+India"
                target="_blank"
                rel="noreferrer"
              >
                <MapPin size={13} />
                12 Market Road, Bengaluru, India
              </a>
            </li>
            <li>
              <a href="tel:+919876543210">
                <Phone size={13} />
                +91 98765 43210
              </a>
            </li>
            <li>
              <a href="mailto:hello@astercafe.in">hello@astercafe.in</a>
            </li>
            <li>
              <span>Mon–Fri 7–5 · Sat–Sun 8–4</span>
            </li>
          </ul>
        </div>
        <div className="footer-column footer-social-column">
          <h2>Stay a little</h2>
          <p>
            Good things, occasional notes. Find the daily pour over on
            Instagram.
          </p>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            Follow along <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
      <div className="footer-bottom section-wrap">
        <span>© {currentYear} Aster Café. Made with care in India.</span>
        <div>
          <a href="mailto:hello@astercafe.in?subject=Privacy%20policy">
            Privacy
          </a>
          <a href="mailto:hello@astercafe.in?subject=Terms%20and%20conditions">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
