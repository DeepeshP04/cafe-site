import { ArrowUpRight, Camera as Instagram } from "lucide-react";
import "./Gallery.css";
const photos = [
  [
    "photo-1495474472287-4d71bcdd2085",
    "Freshly brewed coffee on the café counter",
    "Our morning ritual",
    "gallery-tall",
  ],
  [
    "photo-1554118811-1e0d58224f24",
    "Warm and welcoming café interior",
    "Your corner table",
    "",
  ],
  [
    "photo-1509042239860-f550ce710b93",
    "A cappuccino with delicate latte art",
    "Poured with care",
    "",
  ],
  [
    "photo-1493857671505-72967e2e2760",
    "Fresh food served at a wooden café table",
    "A good little lunch",
    "gallery-wide",
  ],
  [
    "photo-1501339847302-ac426a4a7cbb",
    "Plants and sunlight inside the café",
    "A slower afternoon",
    "",
  ],
];
export default function Gallery() {
  return (
    <section
      className="gallery-section"
      id="gallery"
      aria-labelledby="gallery-title"
    >
      <div className="section-wrap">
        <div className="gallery-heading">
          <div>
            <p className="section-kicker">A seat saved for you</p>
            <h2 className="section-title" id="gallery-title">
              A peek <em>inside.</em>
            </h2>
          </div>
          <a
            className="gallery-social"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={16} />
            Find us on Instagram <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="gallery-grid">
          {photos.map(([image, alt, label, shape]) => (
            <figure className={`gallery-photo ${shape}`} key={image}>
              <img
                src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=950&q=82`}
                alt={alt}
                loading="lazy"
              />
              <figcaption>{label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
