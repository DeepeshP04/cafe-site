import { ArrowDown, ArrowUpRight, Clock3, Coffee, Leaf } from "lucide-react";
import "./Hero.css";
export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <img
        className="hero-photo"
        src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2200&q=85"
        alt="Quiet café interior with a clear wall beside the counter"
        fetchPriority="high"
      />
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="hero-kicker">
          <span />A little pause in the city
        </p>
        <h1 id="hero-title">
          Good mornings
          <br />
          start <em>right here.</em>
        </h1>
        <p className="hero-description">
          Thoughtfully brewed coffee, the kind of breakfast you linger over, and
          a seat that feels like yours.
        </p>
        <div className="hero-actions">
          <a className="button" href="#menu">
            Explore the menu <ArrowUpRight size={15} />
          </a>
          <a className="button button--outline" href="#contact">
            Come on in <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="hero-notes">
          <span>
            <Coffee size={16} />
            Coffee, poured slowly
          </span>
          <span>
            <Leaf size={16} />
            Seasonal & local
          </span>
          <span>
            <Clock3 size={16} />
            Here every day
          </span>
        </div>
      </div>
      <a
        className="hero-scroll"
        href="#about"
        aria-label="Scroll to learn about Serein"
      >
        <span>Scroll to slow down</span>
        <ArrowDown size={15} />
      </a>
      <div className="hero-index">
        <span>01</span>
        <i />
        06
      </div>
    </section>
  );
}
